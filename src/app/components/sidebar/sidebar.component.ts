import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  largeStatus: boolean = false;

  private checkWindowSize() {
    this.largeStatus = window.innerWidth >= 800;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkWindowSize();
  }

  modify() {
    this.largeStatus = !this.largeStatus;
  }
}
