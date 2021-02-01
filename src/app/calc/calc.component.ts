import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  title = "Gotham Coding";
  siteURL = window.location.href;
  sitePORT = window.location.port;
  num1 = 5;
  num2 = 10;
  getCalculate(){
    return this.num1+this.num2;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
