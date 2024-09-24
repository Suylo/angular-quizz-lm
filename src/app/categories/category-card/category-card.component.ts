import { Component, Input } from '@angular/core';
import { Category } from 'src/_interfaces/Category';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss'],
})
export class CategoryCardComponent {
  @Input() category: Category = {
    id: 0,
    categoryLabel: ''
  };
}
