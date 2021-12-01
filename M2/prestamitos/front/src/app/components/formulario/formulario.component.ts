import { Component, OnInit } from '@angular/core';
import { CreditService } from 'src/app/services/credit.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  name: string
  id: number
  email: string
  salario: number
  status: string
  antiguedad: number
  result: ResultI
  initialResult: ResultI = {message: "", success: false}

  constructor(private service: CreditService) {
    this.name = ""
    this.id = 0
    this.email = ""
    this.status = "Empleado"
    this.salario = 0
    this.antiguedad = 0
    this.result = this.initialResult
  }

  ngOnInit(): void {
  }

  changeStatus(e: any){
    this.status = e.target.value
  }

  async send(){
    let data = {
      name: this.name,
      id: this.id,
      email: this.email,
      status: this.status,
      time: this.antiguedad,
      ing: this.salario,
    }
    const datos = this.service.obtainCredit(data)
    this.result = await Promise.resolve(datos)
  }

  deleteResult(){
    this.result = this.initialResult
  }

}

interface ResultI{
  message: string
  success: boolean
}