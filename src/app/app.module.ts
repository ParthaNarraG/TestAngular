import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddServerComponent } from './add-server/add-server.component';
import { TestServerComponent } from './test-server/test-server.component';

import { EvenComponent } from './even/even.component';
import { basicHighLight } from './CustomDirectives/basicHighLight.directive';
import { RendererDirectiveDirective } from './CustomDirectives/renderer-directive.directive';
import { OwnStructuralDirectiveDirective } from './CustomDirectives/own-structural-directive.directive';
import { PracticeDirectiveDirective } from './CustomDirectives/practice-directive.directive';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { TabularComponent } from './tabular/tabular.component';
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveApproachComponent } from './forms/reactive-approach/reactive-approach.component';
import { AssignmentComponent } from './forms/reactive-approach/reactive-assignment/assignment/assignment.component';
import { PipesComponent } from './pipes/pipes/pipes.component';
import { CustomPipePipe } from './pipe/custom-pipe.pipe';
import { ReversePipePipe } from './pipe/reverse-pipe.pipe';
import { SortPipePipe } from './pipe/sort-pipe.pipe';
import { HttpCallsComponent } from './http/http-calls/http-calls.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { CustomInterceptor } from './interceptors/custom.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AddServerComponent,
    TestServerComponent,
    EvenComponent,
    basicHighLight,
    RendererDirectiveDirective,
    OwnStructuralDirectiveDirective,
    PracticeDirectiveDirective,
    UsersComponent,
    LoginComponent,
    ChildComponentComponent,
    TabularComponent,
    TemplateDrivenComponent,
    ReactiveApproachComponent,
    AssignmentComponent,
    PipesComponent,
    CustomPipePipe,
    ReversePipePipe,
    SortPipePipe,
    HttpCallsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:CustomInterceptor,
    multi:true    
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
