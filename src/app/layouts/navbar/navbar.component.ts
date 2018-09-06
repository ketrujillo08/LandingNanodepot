import { Component, OnInit, ViewChild, ElementRef, Renderer2,HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { WINDOW } from '../../service/window/window.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {
  public navIsFixed: boolean = false;
  constructor(
    private _renderer:Renderer2,
    public _router:Router,
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window
  ) { }

  ngOnInit() {
    
  }
  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    if (number > 100) {
      this.navIsFixed = true;
    } else if (this.navIsFixed && number < 10) {
      this.navIsFixed = false;
    }
  }

  moveTo(element:Element,event:Event){
    event.preventDefault();
    
    let fragment = element.getAttribute('fragment');
    let target = this.document.getElementById(fragment);
    let y = target.offsetTop;
    this.document.documentElement.scrollTo({top:y});
    
  }

}
