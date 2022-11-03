import { Component, OnInit } from '@angular/core';
import { PortfolioItem } from "../../../shared/interfaces/portfolio-item";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  public portfolio_items:PortfolioItem[] = [
    { heading: 'Titulo', subheading: 'Descripcion' },
    { heading: 'Titulo', subheading: 'Descripcion' },
    { heading: 'Titulo', subheading: 'Descripcion' },
    { heading: 'Titulo', subheading: 'Descripcion' },
    { heading: 'Titulo', subheading: 'Descripcion' },
    { heading: 'Titulo', subheading: 'Descripcion' }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
