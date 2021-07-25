import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TestServerComponent } from '../test-server/test-server.component';

@Injectable({
  providedIn: 'root'
})
export class DeactivatedGuard implements CanDeactivate<TestServerComponent> {
  canDeactivate(
    component: TestServerComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(component.isDirty===true){
        if(confirm("Discard Changes")){
          return true;
        }
        else{
          return false;
        }
      }
    return false;
  }
  
}
