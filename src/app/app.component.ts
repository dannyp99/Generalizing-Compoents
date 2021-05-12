import { Component, OnInit } from '@angular/core';
import { NavItem } from './nav-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sample-project';
  navItems: NavItem[] = [];
  ngOnInit() {
    this.title = 'cool beans'
  }
}
