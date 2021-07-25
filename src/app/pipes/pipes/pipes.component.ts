import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  appStatus=new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('stable')
    },2000)
  })
  
  passString="";
  serverDetails:any=[
    {
      serverName:'ProductionServer',
      serverStatus:'Stable',
      serverInstanceType:'large',
      date:new Date(),
      background:"#1D1D27",
      color:"#fff"
    },
    {
      serverName:'User Database',
      serverStatus:'Offline',
      serverInstanceType:'large',
      date:new Date(),
      background:"#F6F6F6",
      color:"#000"
    },
    {
      serverName:'Development Server',
      serverStatus:'Stable',
      serverInstanceType:'Medium',
      date:new Date(),
      background:"#1A2B3C",
      color:"#fff"
    },
    {
      serverName:'Testing Environment Server',
      serverStatus:'Offline',
      serverInstanceType:'small',
      date:new Date(),
      background:"#1D1D27",
      color:"#fff"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  addServer(){
    this.serverDetails.push( {
      serverName:'Testing Environment Server',
      serverStatus:'Offline',
      serverInstanceType:'small',
      date:new Date(),
      background:"#1D1D27",
      color:"#fff"
    })
  }

}
