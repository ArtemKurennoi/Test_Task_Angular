import { Component, OnInit } from '@angular/core';
import {Transaction} from "./transaction";
import {CountService} from "../service/count.service";
import {TransactionService} from "../service/transaction.service";


@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  providers: [CountService,TransactionService]
})
export class SummaryComponent implements OnInit {

  //подсчет данных
  countIncome:number=0;
  countInvestments:number =0;
  countOutcome:number =0;
  countLoans:number =0;
  countAllCard:number=0;
  //массив данных
  arrData:Array<Transaction>=new Array<Transaction>();

  //внедрение сервисов
  constructor(private countService:CountService ,private transactionService:TransactionService)
  {  }

  ngOnInit(): void {

    this.transactionService.getData().subscribe((items:any)=>{
      this.countAllCard=items["total"];
      this.arrData=items["data"];
      //передаем в методы подсчета данных массив
      this.countIncome=this.countService.getCountIncome(items["data"]);
      this.countInvestments=this.countService.getCountInvestments(items["data"]);
      this.countOutcome=this.countService.getCountOutcome(items["data"]);
      this.countLoans=this.countService.getCountLoans(items["data"]);
    });
  }//ngOnInit
}
