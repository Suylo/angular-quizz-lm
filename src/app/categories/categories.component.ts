import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Category} from "../../_interfaces/Category";
import {CategoriesService} from "../shared/services/categories.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit{
  categories: Category[] = [];
  searchCategory = '';
  playerName = '';

  constructor(private router: Router, private categoriesService: CategoriesService) {
  }

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe((categories: Category[]) => {
      this.categories = categories;
    });
    this.playerName = localStorage.getItem('playerName') || '';
  }


  onSearchSubmit(){
    if (this.searchCategory != '') {
      this.categories = this.categories.filter((category: Category) => {
        const lowerCaseLabel = category.categoryLabel.toLowerCase();
        const lowerCaseSearch = this.searchCategory.toLowerCase();
        return lowerCaseLabel.includes(lowerCaseSearch) || lowerCaseLabel.startsWith(lowerCaseSearch);
      });
    } else {
      this.categoriesService.getCategories().subscribe((categories: Category[]) => {
        this.categories = categories;
      });
    }
  }

  resetSearch() {
    this.searchCategory = '';
    this.onSearchSubmit();
  }
}
