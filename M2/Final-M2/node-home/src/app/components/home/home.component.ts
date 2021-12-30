import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InmuebleI } from 'src/app/interfaces/inmuebles.interface';
import { HousesService } from 'src/app/services/houses.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  defaultImg: string = '../../../assets/img/N-removebg-preview.png'

  rooms! : number
  bathrooms! : number
  value! : number
  floors! : number
  patio : string = ''
  sector : string = ''

  houses: InmuebleI[] = []

  user: string = ''
  password: string = ''

  constructor(private houseService: HousesService, 
    private userService: UsersService,
    private router: Router) { }

  ngOnInit(): void {
    this.cargaInicial()
  }

  async cargaInicial(){
    this.houses = await this.houseService.obtainInmuebles(undefined,
      undefined, undefined, undefined, undefined, undefined)
  }

  changePatio(e: any){
    this.patio = e.target.value
  }

  async onSearch(e: any){
    e.preventDefault()
    let s = this.sector.trim() !== '' ? this.sector.trim() : undefined
    let p
    switch(this.patio){
      case 'true':
        p = true
        break
      case 'false':
        p = false
        break
      default:
        break;
    }
    const data = await this.houseService.obtainInmuebles(p, this.rooms, s,
      this.bathrooms, this.floors, this.value)
      if(data){
        this.houseService.inmuebles = data
        this.router.navigateByUrl('/results')
      }
  }

  async login(e: any){
    e.preventDefault()
    if(this.user.trim() !== '' && this.password.trim() !== ''){
      const data = await this.userService.login(this.user, this.password)
      if(data && data.token){
        localStorage.setItem('token', data.token)
        window.location.reload()
      }else{
        alert('Contraseña y/o usuario errados')
      }
    }else{
      alert('Por favor llene todos los campos')
    }
  }

  fileOut(str: string){
    return this.houseService.convertImg(str)
  }

}
