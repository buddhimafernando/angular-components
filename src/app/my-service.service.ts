import { Injectable } from '@angular/core';

// a decorator to indicator that this class is a service 
@Injectable({
  //created as a singleton and injected into the root module of the application
  providedIn: 'root'
})
//a service has been created name MyServiceService
export class MyServiceService {
  //private property which is an array of strings
  private data: string[] =[];

  // method 
  getData(): string[] {
    return this.data;
  }
  addData(newData: string){
    this.data.push(newData);
  }
}
