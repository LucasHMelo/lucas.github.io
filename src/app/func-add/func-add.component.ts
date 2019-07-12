import { Component, OnInit, createPlatformFactory } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-func-add',
  templateUrl: './func-add.component.html',
  styleUrls: ['./func-add.component.css']
})
export class FuncAddComponent implements OnInit {
  adicionarFuncionarioForm: FormGroup;


  constructor(private formbuilder: FormBuilder) {
    this.createForm();
  }
    
    createForm(){
      this.adicionarFuncionarioForm = this.formbuilder.group({
        nomeFuncionario: ['', Validators.required],
        cargo : ['', Validators.required],
        numeroIdentificador: ['', Validators.required]

      })
    }

  ngOnInit() {
  }

}
