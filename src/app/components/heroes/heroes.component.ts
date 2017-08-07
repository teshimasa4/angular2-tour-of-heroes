import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Hero }                from '../../models/hero';
import { HeroService }         from '../../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private heroService: HeroService,
    private router: Router) { }

  ngOnInit() {
  }

}
