import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isMenuCollapsed: boolean = true;

  @Output() isMenuCollapsedEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  setMenuCollapsed() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this.isMenuCollapsedEvent.emit(this.isMenuCollapsed);
  }
}
