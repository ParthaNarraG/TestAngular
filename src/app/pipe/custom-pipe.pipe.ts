import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  // transform(value: any, ...args: unknown[]): unknown {
  //   if(value.length>10){
  //     return value.substr(0,10) + '...';
  //   }
  //   return value;
  // }

  transform(value:any,parameter:any,property:any){
    if(value.length===0){
      return value;
    }
    let newArray:any=[];
    value.map((ele:any)=>{
      ele[property]===parameter?newArray.push(ele):"";
    })
    return newArray
  }

}
