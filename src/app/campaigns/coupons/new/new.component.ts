import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  table_data=[
    {
      "Name":"Nike365",
      "CouponId":"N4567D",
      "Value":"$10",
      "Validity":"Apr6,2020",
      "RedeemedOn":"Apr15th,2020",
      "RedeemedBy":"Iron Man"
    },
    {
      "Name":"Nike365",
      "CouponId":"N4567D",
      "Value":"$10",
      "Validity":"Apr6,2020",
      "RedeemedOn":"Apr15th,2020",
      "RedeemedBy":"Iron Man"
    },
    {
      "Name":"Nike365",
      "CouponId":"N4567D",
      "Value":"$10",
      "Validity":"Apr6,2020",
      "RedeemedOn":"Apr15th,2020",
      "RedeemedBy":"Iron Man"
    },
    {
      "Name":"Nike365",
      "CouponId":"N4567D",
      "Value":"$10",
      "Validity":"Apr6,2020",
      "RedeemedOn":"Apr15th,2020",
      "RedeemedBy":"Iron Man"
    },
    {
      "Name":"Nike365",
      "CouponId":"N4567D",
      "Value":"$10",
      "Validity":"Apr6,2020",
      "RedeemedOn":"Apr15th,2020",
      "RedeemedBy":"Iron Man"
    },
    {
      "Name":"Nike365",
      "CouponId":"N4567D",
      "Value":"$10",
      "Validity":"Apr6,2020",
      "RedeemedOn":"Apr15th,2020",
      "RedeemedBy":"Iron Man"
    },
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
