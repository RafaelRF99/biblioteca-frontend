import { Component, HostListener, OnInit } from '@angular/core';
import { SizeService } from 'src/app/services/size.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  largeStatus: boolean = false;

  constructor(private service: SizeService) {}

  ngOnInit(): void {
    this.largeStatus = this.service.largeStatus;
  }

  modify() {
    this.service.modify();
    this.largeStatus = this.service.largeStatus;
  }
}
