import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';





@Component({
  selector: 'app-newregister-content-dialog',
  templateUrl: './newregister-content-dialog.component.html',
  styleUrls: ['./newregister-content-dialog.component.css']
})
export class NewregisterContentDialogComponent {

  constructor(public dialog:MatDialog) { }
  
  openDialog() {
    console.log('some text')
    const dialogRef = this.dialog.open(NewRegisterContentDialogModel);
    dialogRef.afterClosed().subscribe(result =>{
      console.log(`Dialog result:$(result)`);
    });

  }
}
@Component({
  selector: 'newregister-content-dialog-model',
  templateUrl: 'newregister-content-dialog-model.html',
})
export class NewRegisterContentDialogModel { }

  // ngOnInit() {
  // }


