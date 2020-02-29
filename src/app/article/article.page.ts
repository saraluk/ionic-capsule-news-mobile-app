import { Component, OnInit } from "@angular/core";
import { NavParams, ModalController } from "@ionic/angular";

@Component({
  selector: "app-article",
  templateUrl: "./article.page.html",
  styleUrls: ["./article.page.scss"]
})
export class ArticlePage implements OnInit {
  image;
  title;
  description;
  content;
  source;
  author;
  sourceUrl;
  publishedAt;
  constructor(
    private navParams: NavParams,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.image = this.navParams.get("image");
    this.title = this.navParams.get("title");
    this.description = this.navParams.get("description");
    this.content = this.navParams.get("content");
    this.author = this.navParams.get("author");
    this.sourceUrl = this.navParams.get("sourceUrl");
    this.publishedAt = this.navParams.get("publishedAt");
  }
  closeModal() {
    this.modalController.dismiss();
  }
}
