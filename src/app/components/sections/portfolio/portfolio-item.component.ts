import { Component, Input, OnInit } from '@angular/core';
import { PortfolioItem } from "../../../shared/interfaces/portfolio-item";

@Component({
  selector: 'app-portfolio-item',
  template: `
    <div class="portfolio-item">
      <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
        <div class="portfolio-hover">
          <div class="portfolio-hover-content">
            <i class="fas fa-plus fa-3x"></i>
          </div>
        </div>
        <img class="img-fluid" src="assets/img/portfolio/1.jpg" alt="{{ portfolio_item.heading }}" />
      </a>
      <div class="portfolio-caption">
        <div class="portfolio-caption-heading">{{ portfolio_item.heading }}</div>
        <div class="portfolio-caption-subheading text-muted">{{ portfolio_item.subheading }}</div>
      </div>
    </div>
  `,
  styles: [``],
})
export class PortfolioItemComponent implements OnInit {

  @Input() portfolio_item!:PortfolioItem;

  constructor() {}

  ngOnInit(): void {}
}
