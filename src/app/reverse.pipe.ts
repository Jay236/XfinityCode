
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(data: Array<any>, args?: any): any {
    return data.sort(function(a, b){
        if(a[args.datas] < b[args.datas]){
            return -1 * args.direction;
        }
        else if( a[args.datas] > b[args.datas]){
            return 1 * args.direction;
        }
        else{
            return 0;
        }
    });
};
}
