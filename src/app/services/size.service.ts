import { EventEmitter, HostListener, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SizeService {
  largeStatus!: boolean;
  selectedCategory!: string;
  largeStatusChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
    this.largeStatus = window.innerWidth >= 800;
    this.largeStatusChanged.emit(this.largeStatus);
  }

  checkWindowSize() {
    if (window.innerWidth >= 800) {
      this.largeStatus = true;
      this.largeStatusChanged.emit(this.largeStatus);
    } else {
      this.largeStatus = false;
      this.largeStatusChanged.emit(this.largeStatus);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkWindowSize();
  }

  modify() {
    this.largeStatus = !this.largeStatus;
    this.largeStatusChanged.emit(this.largeStatus);
  }

  setSelectedCategory(category: string) {
    this.selectedCategory = category;
  }
}
