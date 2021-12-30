import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import axios from 'axios';
import { Observable, ReplaySubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { InmuebleI, NewInmuebleI } from '../interfaces/inmuebles.interface';

@Injectable({
  providedIn: 'root'
})
export class HousesService {

  back: string = environment.BACK_URL+'inmuebles'
  inmuebles: InmuebleI[] = []

  constructor(private sanitizer: DomSanitizer) { }

  async obtainInmuebles(
    patio?: boolean, rooms?: number, sector?: string,
    bathrooms?: number, floors?: number, value?: number
  ): Promise<Array<InmuebleI>>{
    let f = '', query = ''
    f += bathrooms ? 'no_banos='+bathrooms+'&' : ''
    f += floors ? 'no_pisos='+floors+'&' : ''
    f += value ? 'valor='+value+'&' : ''
    f += rooms ? 'no_habitaciones='+rooms+'&' : ''
    f += sector ? 'sector='+sector+'&' : ''
    f += patio ? 'patio='+patio+'&' : ''
    if(f.length > 0) query = '?'+f.slice(0,-1)
    try{
      const data = await axios.get(this.back+query)
      return data.data
    }catch(e){
      console.log(e)
      return []
    }
  }

  async createInmueble(obj: NewInmuebleI): Promise<InmuebleI | undefined>{
    try{
      const headers = {
        'Authorization': 'Bearer '+localStorage.getItem('token')
      }
      const data = await axios.post(this.back, obj, {headers})
      return data.data
    }catch(e){
      console.log(e)
      return undefined
    }
  }

  convertFile(file : File) : Observable<string> {
    const result = new ReplaySubject<string>(1);
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = (event: any) => result.next(btoa(event.target.result.toString()));
    return result;
  }

  convertImg(str: string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${str}`);
  }

}
