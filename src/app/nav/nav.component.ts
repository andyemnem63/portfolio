import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
  @HostListener('window:scroll')
  scrollPos() {
    let scroll_pos = window.pageYOffset;
    if(scroll_pos == 0)
      return false;
    else
      return true;
  }

}
