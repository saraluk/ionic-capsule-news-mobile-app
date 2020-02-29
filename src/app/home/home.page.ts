import { Component, OnInit } from "@angular/core";
import { NewsService } from "../services/news.service";
import { ArticlePage } from "../article/article.page";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
  topHeadlineNews;
  businessNews;
  technologyNews;
  constructor(
    private newsService: NewsService,
    private modalController: ModalController
  ) {}
  ngOnInit() {
    this.newsService.getTopHeadLineNews().subscribe(result => {
      console.log(result);
      this.topHeadlineNews = result["articles"];
    });

    this.newsService.getBusinessNews().subscribe(result => {
      console.log(result);
      this.businessNews = result["articles"];
    });

    this.newsService.getTechnologyNews().subscribe(result => {
      console.log(result);
      this.technologyNews = result["articles"];
    });
  }

  async viewArticle(article) {
    const modal = await this.modalController.create({
      component: ArticlePage,
      componentProps: {
        image: article.urlToImage,
        title: article.title,
        description: article.description,
        content: article.content,
        author: article.author,
        sourceUrl: article.url,
        publishedAt: article.publishedAt
      }
    });
    return await modal.present();
  }
}
