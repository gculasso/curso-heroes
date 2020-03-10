import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { HeroesService } from '../../servicios/heroes.service';




@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {

  heroe: any = {};


  constructor( private activatedRouted: ActivatedRoute,
               private _heroesService: HeroesService
               
               ) {

    this.activatedRouted.params.subscribe( params => {
          
        this.heroe = this._heroesService.getHeroe ( params ['id']);
      
        console.log("Trae heroes"); 
        
      }

    )

   }



  }
