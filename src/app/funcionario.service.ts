import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  uri = '/funcionario';

  constructor(private http: HttpClient) { }

  // Método adicona um novo funcionario btn
  adicionarFuncionario(nomeFuncionario, cargo, numeroIdentificador){
    const objFuncionario = {
      nomeFuncionario: nomeFuncionario,
      cargo: cargo,
      numeroIdentificador: numeroIdentificador
    };

    console.log(objFuncionario);
    this.http.post(`${this.uri}/add`, objFuncionario)
    .subscribe(res => console.log('ok') );
  }
}
