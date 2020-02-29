import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class NewsService {
  topHeadLineNewsUrl =
    "https://newsapi.org/v2/top-headlines?apiKey=9d82d24487ea42bdac74d32ef696e7e7&sources=bbc-news&sortBy=popularity";

  businessNewsUrl =
    "https://newsapi.org/v2/top-headlines?apiKey=9d82d24487ea42bdac74d32ef696e7e7&category=business&country=us&sortBy=popularity&pageSize=5";

  technologyNewsUrl =
    "https://newsapi.org/v2/top-headlines?apiKey=9d82d24487ea42bdac74d32ef696e7e7&category=technology&country=us&sortBy=popularity&pageSize=5";
  constructor(private http: HttpClient) {}

  getTopHeadLineNews() {
    return this.http.get(this.topHeadLineNewsUrl);
  }

  getBusinessNews() {
    return this.http.get(this.businessNewsUrl);
  }

  getTechnologyNews() {
    return this.http.get(this.technologyNewsUrl);
  }
}
