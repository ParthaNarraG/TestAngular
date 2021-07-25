import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs'
@Component({
  selector: 'app-tabular',
  templateUrl: './tabular.component.html',
  styleUrls: ['./tabular.component.scss']
})
export class TabularComponent implements OnInit {
  storeSubscription:any;
  constructor()   { }

  ngOnInit(): void {
    let count=0;
    this.storeSubscription=Observable.create((observer:any)=>{
      setInterval(()=>{
        if(count>3){
          observer.error=new Error("3 is greater")
        }
        observer.next(count)
        count++;
      },1000)
    })

    this.storeSubscription.subscribe((data:any)=>{
      console.log(data);
    },(error:any)=>{
      console.log(error)
    })

  }

}
