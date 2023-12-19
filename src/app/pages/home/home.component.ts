import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SizeService } from 'src/app/services/size.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  largeStatus: boolean = false;
  subscription: Subscription;

  constructor(private service: SizeService) {
    this.subscription = this.service.largeStatusChanged.subscribe((status) => {
      this.largeStatus = status;
    });
  }

  ngOnInit(): void {
    this.largeStatus = this.service.largeStatus;
  }
}
