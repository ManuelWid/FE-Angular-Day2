import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  formGr = new FormGroup({
    name: new FormControl(""),
    color: new FormControl("")
  })

  onSubmit(): void{
    let formData: any = this.formGr.value;
    console.log(formData);
  }

}
