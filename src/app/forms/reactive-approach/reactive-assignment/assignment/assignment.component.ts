import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss']
})
export class AssignmentComponent implements OnInit {
  projectStatus:any=["Stable","Critical","Finished"];
  defaultProperty:any="Critical";
  signupForm:any;
  constructor() { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.signupForm=new FormGroup({
      projectName:new FormControl("",[Validators.required,this.syncValidator.bind(this)]),
      mail:new FormControl("",[Validators.required,Validators.email]),
      projectStatus:new FormControl("",Validators.required)
    })
  }

  onSubmit(){
    console.log(this.signupForm);
  }

  //Async Custom Validator
  customValidator(control:any): Promise<any>{
    const promise=new Promise((resolve,reject)=>{
      setTimeout(()=>{
        if(control.value==="Test"){
          resolve({"projectIsForbidden":true})
        }
        resolve(null)
      },1500)
    })
    return promise;
  }

  //customValidator
  syncValidator(control:FormControl){
    if("Test"===control.value){
      return {nameisForbidden:true}
    }
    return null;
  }
}
