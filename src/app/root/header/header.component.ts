import { HostListener, OnInit } from '@angular/core';
import { Component, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        // height: "100px"
      })),
      state('closed', style({
        // opacity: 0.8,
        // height: '150px'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
  
  
})
export class HeaderComponent implements OnInit {

  isOpen = true;

  mouseIn = true;
  mouseOut = false;

  toggle(){
    this.isOpen = !this.isOpen;
    console.log('works');
  }

  
  constructor() {
    
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.mouseIn = true;
    console.log('here');
  }

  @HostListener('mouseenter')
  onMouseExit() {
    this.mouseIn = false;
  }

  ngOnInit(): void {
  }

  
}