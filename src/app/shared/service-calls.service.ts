import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceCallsService {
  baseUrl:any="https://ng-receipemodel-default-rtdb.firebaseio.com  "

  constructor(private http:HttpClient) {
   }

   postData(data:any){
    return new Promise((resolve,reject)=>{
      this.http.post<{name:string}>(`${this.baseUrl}/posts.json`,data).subscribe(resolve,reject);
    })
   }

   getData(){
     let searchParams=new HttpParams();
     searchParams=searchParams.append("custom","key");
     searchParams=searchParams.append("print","pretty");
     return new Promise((resolve,reject)=>{
       this.http.get(`${this.baseUrl}/posts.json`,{
         headers:new HttpHeaders({"custom-header":'Hello'}),
         params:searchParams
        //  params:new HttpParams().set('print','pretty') //Optional
       }).pipe(map((responseData:any)=>{
        const newArray=[];
        for(const key in responseData){
          if(responseData.hasOwnProperty(key)){
            newArray.push({...responseData[key],id:key})
          }
        }
        return newArray;  
       })).subscribe(resolve,reject);
     })
   }

   deletePosts(){
     return new Promise((resolve,reject)=>{
       this.http.delete(`${this.baseUrl}/posts.json`).subscribe(resolve,reject);
     })
   }
}
