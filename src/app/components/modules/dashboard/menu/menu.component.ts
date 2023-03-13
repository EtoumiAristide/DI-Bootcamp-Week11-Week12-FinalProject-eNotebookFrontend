import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @Input() isMenuCollapsed: boolean = true;
  isCollapsed: boolean = true;

  @Output() isCollapsedEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private _router: Router) {
  }

  setIsCollpased() {
    this.isCollapsed = !this.isCollapsed
    this.isCollapsedEvent.emit(this.isCollapsed);
    this._router.initialNavigation();
  }
}
