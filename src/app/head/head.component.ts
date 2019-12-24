import { Component, OnInit } from '@angular/core';
import {Head} from '../model/head';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  public headTxt: string = 'If you can DREAM it, we can DEVELOP it';
  public headSub: string = 'Turning your vision into a reality';

  constructor() {}

  ngOnInit() {
    this.rotateTxt(4000);
  }

  /* Change text every 3s */
  rotateTxt(time) {
    let last: number;
    let index: number = 0;
    /* Holds all text for header*/
    let headTxtArr = [
      new Head('If you can DREAM it, we can DEVELOP it', 'Turning your vision into a reality'),
      new Head('Quick, Reliable, Easy', 'With our 3 step process building your website couldn\'t get any easier'),
      new Head('Software solutions for your business needs', 'Providing quality services'),
    ];
    last = headTxtArr.length - 1;

    /* change text every x seconds*/
    setInterval(()=> {
        if(index == last) {
          index = 0;
        }
        this.headTxt = headTxtArr[index].headTxt;
        this.headSub = headTxtArr[index].subTxt;
        index++;
      }, time);

  }
}
