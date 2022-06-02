import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpserviceService {

  constructor(private http:HttpClient) { }
  private url='https://reqres.in/api/products/3';


  getEmployeeNames():Observable<DataFormat>{
    return this.http.get<DataFormat>(this.url);
  }
}
interface DataFormat{
   data:DataObject;
   support:SupportObject;
  
}
interface DataObject{
color:string;
id:number;
name:string;
pantone_value:string;
year:number;

}
interface SupportObject{
  text:string;
  url:string;
}