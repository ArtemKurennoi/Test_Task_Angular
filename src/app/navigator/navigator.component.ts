import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Subscription} from 'rxjs';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html'
})
export class NavigatorComponent implements OnInit {

  //для передачи параметра в строке
  private tab:number|undefined;
  private queryNavigator:Subscription;

  constructor(private route: ActivatedRoute) {

    //получаем параметр
    this.queryNavigator = route.queryParams.subscribe(
      (queryParam: any) => {
        this.tab = queryParam['tab'];
      }
    );
    console.log(this.tab);
  }//constructor

  ngOnInit(): void {
  }

}
