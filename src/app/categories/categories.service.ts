import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Category} from "../../_interfaces/Category";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  categories: Category[] = [];

  constructor(private http: HttpClient) {
  }

  getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>('http://localhost:3000/categories');
  }
}
