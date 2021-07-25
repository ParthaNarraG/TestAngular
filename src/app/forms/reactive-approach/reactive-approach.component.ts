import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-approach',
  templateUrl: './reactive-approach.component.html',
  styleUrls: ['./reactive-approach.component.scss']
})
export class ReactiveApproachComponent implements OnInit {
  genderType:any=["Male","Female"];
  signupForm:any;
  userData:any
  

  constructor() { 
    this.formsData();
  }

  ngOnInit(): void {
    
  }

  //Reactive Controls
  formsData(){
    this.signupForm=new FormGroup({
      userData:new FormGroup({
        userName:new FormControl("",Validators.required),
        email:new FormControl("",[Validators.required,Validators.email],this.forbiddenMailAddress)
      }),
      gender: new FormControl("Male"),
      hobbies: new FormArray([])
    });
    // Detect Status Changes
    // this.signupForm.statusChanges.subscribe((status:any)=>{
    //   console.log(status);
    // })
    // Detect value Changes
    // this.signupForm.valueChanges.subscribe((data:any)=>{
    //   console.log(data);
    // })
  }

  onSubmit(){
    console.log(this.signupForm)
  }

  //Click Add Hobby to Dynamically Input
  addHobby(){
    let control=new FormControl("")
    this.signupForm.get('hobbies').push(control)
  }

  //GetControls method used for returning the controls of FormArray
  getControls(){
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }

  //Setting AsyncValidator
  forbiddenMailAddress(control:any): Promise<any>{
    const promise:any=new Promise((resolve,reject)=>{
      setTimeout(()=>{
        if(control.value==="chinnu.narra123@gmail.com"){
          resolve({"emailIsForbidden":true})
        }
        resolve(null)
      },1500)
    })
    return promise;
  } 
}
