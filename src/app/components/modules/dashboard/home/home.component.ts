import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isCollapsed = true;
  isMenuCollapsed = true;

  setIsMenuCollapsed(isMenuCollapsedEvent: boolean) {
    this.isMenuCollapsed = isMenuCollapsedEvent;
  }

  setIsCollapsed(isCollapsedEvent: boolean) {
    this.isCollapsed = isCollapsedEvent;
  }
}
