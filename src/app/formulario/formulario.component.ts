import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormularioService } from './../formulario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  contatos: Array<any>;
  formulario: FormGroup;

  constructor(private service: FormularioService, private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  configuraFormulario(){
    this.formulario = this.fb.group({
      nome: [null, Validators.required],
      fone: [null, Validators.required],
      email: [null, [Validators.email, Validators.required]]
    });
  }

  criar(){
    this.service.criar(this.formulario.value).subscribe(resposta =>{
        this.contatos.push(resposta);
        this.formulario.reset();
    })
  }

}
