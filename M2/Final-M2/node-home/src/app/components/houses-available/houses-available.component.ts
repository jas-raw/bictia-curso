import { Component, OnInit } from '@angular/core';
import { InmuebleI } from 'src/app/interfaces/inmuebles.interface';
import { HousesService } from 'src/app/services/houses.service';

@Component({
  selector: 'app-houses-available',
  templateUrl: './houses-available.component.html',
  styleUrls: ['./houses-available.component.scss']
})
export class HousesAvailableComponent implements OnInit {

  defaultImg: string = "../../../assets/img/N-removebg-preview.png"
  houses: InmuebleI[] = []

  constructor(private houseService: HousesService) { }

  ngOnInit(): void {
    this.houses = this.houseService.inmuebles
  }

  fileOut(str: string){
    return this.houseService.convertImg(str)
  }

}
