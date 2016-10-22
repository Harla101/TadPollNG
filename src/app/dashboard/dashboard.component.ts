import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  activeSelected: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  activeClicked(){
    this.activeSelected = !this.activeSelected;
  }

}
