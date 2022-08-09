import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaProdutoService {

  constructor(private httpClient: HttpClient) { }

  url = "http://localhost:3000/listaProdutos"

  // Cadastrar Produto
  // postListaProduto()
  getListaProduto(): Observable<any> {
    return this.httpClient.get(this.url)
  }
  

}
