import { Component, OnInit, createPlatformFactory } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { FuncionarioService} from '../funcionario.service';

@Component({
  selector: 'app-func-add',
  templateUrl: './func-add.component.html',
  styleUrls: ['./func-add.component.css']
})
export class FuncAddComponent implements OnInit {
  adicionarFuncionarioForm: FormGroup;


  constructor(private formbuilder: FormBuilder, private funcionarioService: FuncionarioService) {
    this.createForm();
  }
    
    createForm(){
      this.adicionarFuncionarioForm = this.formbuilder.group({
        nomeFuncionario: ['', Validators.required],
        cargo : ['', Validators.required],
        numeroIdentificador: ['', Validators.required]

      })
    }
    adicionarFuncionario(nomeFuncionario, cargo, numeroIdentificador){
      this.funcionarioService.adicionarFuncionario(nomeFuncionario, cargo, numeroIdentificador)
    }

  ngOnInit() {
  }

}
