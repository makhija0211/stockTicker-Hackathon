import { Component, OnInit } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private http:Http) { }

  ngOnInit() {
  this.getModel()
      .subscribe(
      data => {
        console.log(data);
        //display(data);
        }
      
      );


   }

  getModel(): Observable<any> {
    //return this.http.get('http://finance.google.com/finance/info?client=ig&q=NASDAQ:GOOG')
     return this.http.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22GOOG%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=').map((res:any) => { console.log("Graph json:", res.json() ); return res.json() })
  }
 display(){

 } 

  
}
