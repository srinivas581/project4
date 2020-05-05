import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-money',
  templateUrl: './money.component.html',
  styleUrls: ['./money.component.css']
})
export class MoneyComponent implements OnInit {

  bank_card=['$60','$60','$60']

  constructor() { }

  ngOnInit() {
  }

}
