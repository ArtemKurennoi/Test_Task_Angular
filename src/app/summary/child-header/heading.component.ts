import { Component, Input } from '@angular/core';

@Component({
  selector: 'heading-card',
  templateUrl: './heading.component.html'
})
export class HeadingComponent  {
  //получаем данные из главного компонента
  @Input() allCard:number=1;

}
