import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { AppComponent } from './app.component';
import { OrderBynamePipe } from './order-byname.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReversePipe } from './reverse.pipe';
import { RouterModule, Routes } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    OrderBynamePipe,
    ReversePipe,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'home',
        component: HomeComponent
      },
      {
        path: 'about',
        component: AboutComponent
      }
    ])
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
