import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent implements OnInit {

  buscaForm= this.formBuilder.group({
    q: ""
  })

  constructor(private router: Router, private formBuilder: FormBuilder) {
    
  }

  ngOnInit(): void {
  }

  buscaListaProdutos(): void {
    
    this.router.navigate(["/busca"], { queryParams: this.buscaForm.value })
  }

  
}
