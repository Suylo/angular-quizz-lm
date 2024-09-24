import { Component, OnInit, Signal, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../shared/services/quiz.service';
import { CategoriesService } from '../shared/services/categories.service';
import { Category } from 'src/_interfaces/Category';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  isQuizFinished = this.quizService.isQuizFinished;
  playerName = localStorage.getItem('playerName');
  categoryId = 1;
  quizCategory: WritableSignal<Category> = signal({id: 0, categoryLabel: ''});

  constructor(
    private quizService: QuizService,
    private router: Router,
    private route: ActivatedRoute,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.categoryId = params['categoryId'];
    });

    this.categoriesService.getCategoryById(this.categoryId).subscribe((res) => {
      this.quizCategory.set(res[0]);
    });
  }

  goToResultPage() {
    this.router.navigate(['/result']);
  }
}
