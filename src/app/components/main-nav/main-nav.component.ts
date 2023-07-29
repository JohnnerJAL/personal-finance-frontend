import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.url.subscribe(url => {
      console.log(url);
    });

    console.log(this.route.snapshot);
  }  

}
