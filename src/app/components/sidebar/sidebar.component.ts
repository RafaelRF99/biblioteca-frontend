import { Component, HostListener, OnInit } from '@angular/core';
import { SizeService } from 'src/app/services/size.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  largeStatus!: boolean;
  categories = [
    {
      name: 'Categorias',
      options: false,
      subcategories: ['Ação', 'Terror', 'Animação'],
    },
  ];

  constructor(private service: SizeService) {}

  ngOnInit(): void {
    this.largeStatus = this.service.largeStatus;
    this.service.largeStatusChanged.subscribe((status: boolean) => {
      this.largeStatus = status;
    });

    window.addEventListener('resize', () => {
      this.service.checkWindowSize();
    });
  }

  modify() {
    this.service.modify();
    this.largeStatus = this.service.largeStatus;
    if (!this.largeStatus) {
      for (let x = 0; x < this.categories.length; x++) {
        this.categories[x].options = false;
      }
    }
  }

  handleOption(i: number) {
    if (this.largeStatus) {
      this.categories[i].options = !this.categories[i].options;
    }
  }

  handleItems() {
    this.service.modify();
  }
}
