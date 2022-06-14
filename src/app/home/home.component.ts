import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cars: {name: string, color: string}[] = [{
    name: "VW",
    color: "red"
  },{
    name: "BMW",
    color: "blue"
  },{
    name: "Mercedes",
    color: "pink"
  },{
    name: "Tesla",
    color: "burned"
  },{
    name: "Fiat",
    color: "green"
  }] 

  formGr = new FormGroup({
    name: new FormControl("", Validators.required),
    color: new FormControl("", Validators.required)
  })

  onSubmit(): void{
    if(this.formGr.valid){
      let formData: any = this.formGr.value;
      console.log(formData);
      this.cars.push(formData);
    }
    else{
      console.log("Some fields are empty");
    }
  }
}
