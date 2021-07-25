import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent implements OnInit {
  answer:any="Hi";
  @ViewChild('formData') signupForm:any;

  constructor() {
  
  }

   settingValue(){
    this.signupForm.setValue({
      email:"ranveer@mail.com",
      subscription:"Pro",
      password:"123456"
    })
   }

  ngOnInit(): void {

  }

  onSubmit(data:any){
    console.log(data) 
    this.signupForm.reset();
  }

  // onSubmit(){
  //   console.log(this.signupForm);
  // }

  //Assignment Solution
  subscriptions:any=['Basic','Advanced','Pro'];
  defaultProperty:any='Advanced';

}
