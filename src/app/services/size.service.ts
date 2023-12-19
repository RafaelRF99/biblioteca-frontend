import { EventEmitter, HostListener, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SizeService {
  largeStatus: boolean = false;
  largeStatusChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  private checkWindowSize() {
    this.largeStatus = window.innerWidth >= 800;
    this.largeStatusChanged.emit(this.largeStatus);
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkWindowSize();
  }

  modify() {
    this.largeStatus = !this.largeStatus;
    this.largeStatusChanged.emit(this.largeStatus);
  }
}
