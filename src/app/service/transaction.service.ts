import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Transaction} from "../summary/transaction";

@Injectable()
export class TransactionService{

  private arrData:Array<Transaction>=new Array<Transaction>();

  constructor(private http:HttpClient) {  }

getData(){  return this.http.get('assets/trial.json');}

}//TransactionService

