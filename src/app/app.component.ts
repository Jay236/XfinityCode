import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ReversePipe } from './reverse.pipe';
import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { OrderBynamePipe } from "./order-byname.pipe";
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 2 Seed';
  data =  [];

  datas: Array<any>;
  isDesc: boolean = false;
  column: string = 'name';
  direction: number;

  constructor(private http: Http) {
    this.http.get('./assets/data/data.json')

    .subscribe(res => this.data = res.json());
  }



  sort(datas){
    this.isDesc = !this.isDesc; //change the direction    
    this.column = datas;
    this.direction = this.isDesc ? 1 : -1;
  };
}
