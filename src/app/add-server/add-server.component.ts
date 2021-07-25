import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-server',
  templateUrl: './add-server.component.html',
  styleUrls: ['./add-server.component.scss']
})
export class AddServerComponent implements OnInit {

  item:string="Test Item"
  items=["Chess","Football","Cricket"];
  constructor() { }

  ngOnInit(): void {
  }

  addItem(data:any){
    this.items.push(data);
    console.log(this.items);
  }

  

}
