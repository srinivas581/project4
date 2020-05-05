import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unread',
  templateUrl: './unread.component.html',
  styleUrls: ['./unread.component.css']
})
export class UnreadComponent implements OnInit {

  unread_mat=['A','A','A','A']
  constructor() { }

  ngOnInit() {
  }

}
