import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seatselection',
  templateUrl: './seatselection.component.html',
  styleUrls: ['./seatselection.component.css']
})
export class SeatselectionComponent {

  iscorrect: boolean = false;
  istiming: boolean = true;
  isActive: boolean = false;
  isbutton: boolean = false;
  isDivActive: boolean = true;
  isCommentClicked: boolean = true;

  constructor(private router: Router) {}

  changecolour(){
    this.isActive = !this.isActive; 
    this.isbutton = true;
  }
  shownInput(){
   this.isDivActive = false;
  this.isCommentClicked = false;
  this.istiming = false;
  this.isbutton = false;
  }
  correct(){
    this.iscorrect = true;
    this.isDivActive = true;
    this.isCommentClicked = true;
  }
  seatbooked(){
    this.router.navigate(['/seatyoubooked']);
  }
}
