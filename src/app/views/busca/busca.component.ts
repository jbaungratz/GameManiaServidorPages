import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ListaProdutoService } from 'src/app/services/lista-produto.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent implements OnInit {

  buscaForm= this.formBuilder.group({
    q: ""
  })

  constructor(private listaProdutoService: ListaProdutoService, private router: Router, private formBuilder: FormBuilder) {  }

  listaProduto: any[] = []

  ngOnInit(): void {
    this.listaProdutoService.getListaProduto().subscribe(( response ) => {
      this.listaProduto = response;
      console.log(this.listaProduto) 
    })
    // console.log("Teste do Init")
  }




  buscaListaProdutos(): void {
    
    this.router.navigate(["/busca"], { queryParams: this.buscaForm.value })
  }

  
}
