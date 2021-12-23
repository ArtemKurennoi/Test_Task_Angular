import {Injectable} from '@angular/core';
import {Transaction} from "../summary/transaction";

@Injectable()
export class CountService{

  constructor()  {  }

  getCountIncome(arr:Array<Transaction>){
    return arr.filter(it=>it.type==="income").length;
  }

  getCountInvestments(arr:Array<Transaction>){
    return arr.filter(it=>it.type==="investment").length;
  }

  getCountOutcome(arr:Array<Transaction>){
    return arr.filter(it=>it.type==="outcome").length;
  }

  getCountLoans(arr:Array<Transaction>){
    return arr.filter(it=>it.type==="loan").length;
  }



}
