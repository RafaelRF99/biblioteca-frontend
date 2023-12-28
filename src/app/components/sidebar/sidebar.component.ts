import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { categoryList } from 'src/app/constants/category';
import { AuthService } from 'src/app/services/auth.service';
import { LivroService } from 'src/app/services/livro.service';
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
      subcategories: categoryList,
    },
  ];

  Authstatus!: boolean;

  constructor(
    private service: SizeService,
    private route: Router,
    private livroService: LivroService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.largeStatus = this.service.largeStatus;
    this.service.largeStatusChanged.subscribe((status: boolean) => {
      this.largeStatus = status;
    });

    window.addEventListener('resize', () => {
      this.service.checkWindowSize();
    });
    this.Authstatus = !!localStorage.getItem('token');
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

  handleItems(i: number) {
    this.service.modify();
    this.categories[i].options = true;
  }

  handleCategory(category: string) {
    this.livroService.setSelectedCategory(category.toLocaleLowerCase());
    this.route.navigate(['/category', category.toLocaleLowerCase()]);
  }

  logout() {
    this.auth.logout();
  }
}
