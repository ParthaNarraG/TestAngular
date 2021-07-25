import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ServiceCallsService } from 'src/app/shared/service-calls.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-http-calls',
  templateUrl: './http-calls.component.html',
  styleUrls: ['./http-calls.component.scss']
})
export class HttpCallsComponent implements OnInit {
  isFetch:boolean=false;
  dataArray:any=[];
  constructor(private service:ServiceCallsService) { }

  ngOnInit(): void {
    this.mapFunc();
  }

  onFetch(){
    this.getData();
    this.isFetch=true;
  }

  async onClear(){
    const response=await this.service.deletePosts();
    this.dataArray.length=0;
  }

  async onSubmit(form:any){
    try{
      const response=await this.service.postData(form.value);
      this.isFetch=false;
      form.reset();
    }
    catch(error:any){
      console.log(error);
    }
  }

  async getData(){
    try{
      this.dataArray=await this.service.getData();
    }
    catch(error:any){
      console.log(error);
    }
  }

  mapFunc(){
    const updated=from([1,2,3]).pipe(map((ele)=>{
      ele=ele**2;
    }))
    const subscribe=updated.subscribe((value)=>{
      console.log(value);
    })
  }
}
