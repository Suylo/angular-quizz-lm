import {
  Component,
  OnDestroy,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../shared/services/quiz.service';
import { CategoriesService } from '../shared/services/categories.service';
import { Category } from 'src/_interfaces/Category';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit, OnDestroy {
  isQuizFinished = this.quizService.isQuizFinished;
  playerName = localStorage.getItem('playerName');
  categoryId = 0;
  quizCategory: WritableSignal<Category> = signal({ id: 0, categoryLabel: '' });

  routeSubscription = new Subscription();
  categoriesSubscription = new Subscription();

  constructor(
    private quizService: QuizService,
    private router: Router,
    private route: ActivatedRoute,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.routeSubscription = this.route.params.subscribe((params) => {
      this.categoryId = params['categoryId'];

      this.categoriesSubscription = this.categoriesService
        .getCategoryById(this.categoryId)
        .subscribe((res) => {
          this.quizCategory.set(res[0]);
        });
    });
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
    this.categoriesSubscription.unsubscribe()
  }

  goToResultPage() {
    this.router.navigate(['/result']);
  }
}
