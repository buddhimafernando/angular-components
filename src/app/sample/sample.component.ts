import { Component } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent {
  data: string[];
  newItem: string;
  constructor(private myService: MyServiceService) {
    this.data = myService.getData();
  }
  addItem() {
    this.myService.addData(this.newItem);
    this.newItem = '';
  }
}
