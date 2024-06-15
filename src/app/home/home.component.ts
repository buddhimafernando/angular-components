import { Component } from '@angular/core';
import { VERSION } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  clicked = false;
  title = `Angular ${VERSION.full} is rad!`;

  boats = [
    {
    name: 'Starfire',
    year: 1973,
    img: 'assets/boat.jpeg'
  },
  {
    name: 'Oracle',
    year: 2001,
    img: 'assets/yatch.png'
  }
];

  handleClick(){
    this.clicked = true;
  }
}
