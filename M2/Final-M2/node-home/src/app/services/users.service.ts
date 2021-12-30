import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  back: string = environment.BACK_URL+'users'

  constructor() { }

  async login(email: string, password: string){
    const url = this.back+'/login'
    try{
      const data = await axios.post(url, {email, password})
      return data.data
    }catch(e){
      console.log(e)
      return undefined
    }
  }

}
