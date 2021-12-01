import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class CreditService {

  BACK_URL: string = "http://localhost:8000/api/v1/"

  constructor() { }

  obtainCredit(reqData: RequireData){
    let data = axios.post(this.BACK_URL+'credito', reqData)
    .then((datos) =>  datos.data)
    .catch((err) => console.log(err))
    return data
  }
}

interface RequireData{
}
