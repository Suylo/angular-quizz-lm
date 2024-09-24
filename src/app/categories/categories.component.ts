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

  constructor(private router: Router, private categoriesService: CategoriesService) {
  }

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe((categories: Category[]) => {
      this.categories = categories;
    });
  }
}
