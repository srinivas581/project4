import { Component, OnInit } from '@angular/core';
import { IndPerson3Component } from '../ind-person3/ind-person3.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-ind-person4',
  templateUrl: './ind-person4.component.html',
  styleUrls: ['./ind-person4.component.css']
})
export class IndPerson4Component implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(IndPerson3Component, {
      width: '500px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

}
