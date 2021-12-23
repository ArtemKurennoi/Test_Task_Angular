import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent   {
  //получаем данные из главного компонента
  @Input() type:string="По умолчанию";
  @Input() count:number=1;
  @Input() tab:number=0;

}
