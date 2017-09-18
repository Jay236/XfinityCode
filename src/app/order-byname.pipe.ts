import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderByname'
})
export class OrderBynamePipe implements PipeTransform {

  transform(datas: any, term: any): any {
    if(term === undefined)  return datas;
  return datas.filter(function(data){
    return data.name.toLowerCase().includes(term.toLowerCase());
  })

  }

}
