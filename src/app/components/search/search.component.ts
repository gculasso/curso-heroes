import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';




@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {

  heroes:any[] = [];

  constructor( private  activatedRoute:ActivatedRoute,
               private _heroesService: HeroesService) { 

    
  }

  ngOnInit() {

    this.activatedRoute.params.subscribe ( params => {
      
      this.heroes = this._heroesService.buscarHeroes (params['termino']);
      console.log (this.heroes);

    });


  }

}
