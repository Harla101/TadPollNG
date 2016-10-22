import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  activeSelected: boolean = true;
  closedSelected: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  activeClicked(){
    this.activeSelected = true;
    this.closedSelected = false;
  }

  closedClicked(){
    this.activeSelected = false;
    this.closedSelected = true;
  }

}
