import { Component } from '@angular/core';
import { VERSION } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  clicked = false;
  title = 'Angular ${VERSION.full} is rad!';

  handleClick(){
    this.clicked = true;
  }
}
