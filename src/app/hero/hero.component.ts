import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  heroHeading: string = "Car rental";
  heroSub: string = "We rent out cars, who would have guessed.";
  heroBtnUrl: string = "#";
  heroBtnText: string = "Rent a Car";

}
