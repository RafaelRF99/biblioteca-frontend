import { Component, HostListener, OnInit } from '@angular/core';
import { SizeService } from 'src/app/services/size.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  largeStatus: boolean = false;
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
  }

  modify() {
    this.service.modify();
    this.largeStatus = this.service.largeStatus;
  }

  handleOption(i: number) {
    this.categories[i].options = !this.categories[i].options;
  }
}
