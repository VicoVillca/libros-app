import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  class:string = "navbar";
  class2:string = "bi mobile-nav-toggle bi-list";
  constructor() { }

  ngOnInit(): void {
  }

  click(){
    console.log("Holap");
    //this.sw=!this.sw;
    if(this.class=='navbar'){
      this.class="navbar navbar-mobile";
      this.class2="bi mobile-nav-toggle bi-x";
    }else{
      this.class="navbar";
      this.class2="bi mobile-nav-toggle bi-list";
    }
    console.log(this.class);
  }

}
