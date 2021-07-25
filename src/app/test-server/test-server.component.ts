import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-test-server',
  templateUrl: './test-server.component.html',
  styleUrls: ['./test-server.component.scss']
})
export class TestServerComponent implements OnInit {
  isDirty:boolean=true;
  value="2"
  // @Input() getItem:any;
  @Output() newItemEvent:any=new EventEmitter();

  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  navigate(){
    this.router.navigate(['test'],{relativeTo:this.route});
  }

  sendData(data:any){
    this.newItemEvent.emit(data);
  }

  canDeactivate() {
    console.log('i am navigating away');

    // if the editName !== this.user.name
    if (localStorage.getItem("isLogin")==="true") {
      return window.confirm('Discard changes?');
    }

    return true;
}

}
