import { Component, OnInit } from '@angular/core';
import { NewInmuebleI } from 'src/app/interfaces/inmuebles.interface';
import { HousesService } from 'src/app/services/houses.service';

@Component({
  selector: 'app-enter-home',
  templateUrl: './enter-home.component.html',
  styleUrls: ['./enter-home.component.scss']
})
export class EnterHomeComponent implements OnInit {

  rooms! : number | undefined
  bathrooms! : number | undefined
  value! : number | undefined
  floors! : number | undefined
  patio: string = ''
  sector : string = ''
  imgs: any[] = []
  disableIn: boolean = false

  constructor(private houseService: HousesService) { }

  ngOnInit(): void {
  }

  changePatio(e: any){
    this.patio = e.target.value
  }

  async crear(e: any){
    e.preventDefault()
    if(this.sector.trim() !== '' && this.rooms &&
    this.bathrooms && this.value && this.floors){
      this.disableIn = true
      let p
      switch(this.patio){
        case 'true':
          p = true
          break
        case 'false':
          p = false
          break
        default:
          alert('Complete todos los campos primero')
      }
      if(p !== undefined){
        const obj: NewInmuebleI = {
          tipo: 'Casa',
          no_habitaciones: this.rooms,
          patio: p,
          no_pisos: this.floors,
          sector: this.sector,
          cocina_intergral: true,
          descripcion: '',
          valor: this.value,
          imagenes: this.imgs,
          no_banos: this.bathrooms
        }
        const data = await this.houseService.createInmueble(obj)
        if(data){
          this.reset()
          alert('Se guardo exitosamente')
        }else{
          alert('No se pudo guardar el elemento')
        }
      }
    }else{
      alert('Complete todos los campos para continuar')
    }
    this.disableIn = false
  }

  fileIn(e: any){
    const files = e.target.files
    if(files.length <= 10){
      [...files].map((it: any) => {
        return this.houseService.convertFile(it).subscribe((b64: any) => {
          this.imgs.push(b64)
        })
      })
    }else{
      alert('Solo puedes cargar un máximode 10 archivos, si excedes este numero no se subiran tus archivos')
      e.target.value = null
    }
  }

  reset(){
    this.rooms = undefined
    this.bathrooms = undefined
    this.value = undefined
    this.floors = undefined
    this.patio = 'null'
    this.sector = ''
    this.imgs = []
  }

}
