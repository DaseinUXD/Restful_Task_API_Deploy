import {Component, OnInit} from '@angular/core';

import {HttpService} from "./http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Pokemon';
  tasks = [];
  pokemon = [];

  constructor(private _httpService: HttpService) {
  }

  ngOnInit() { // ngOnInit runs after the constructor method
    this.getTasksFromService();
    this.getPokemonFromService();
    this.getPokemonWithAbility();
  }

  getTasksFromService() {
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log('got out data', data);
      this.tasks = data['tasks'];
    })
  }

  getPokemonFromService() {
    let observable = this._httpService.getPokemon();
    observable.subscribe(pokemon => {
      console.log('got our pokemon named:', pokemon['name']);
      for (let i in pokemon) {
        console.log(pokemon['name'] + '\'s:', i+':', pokemon[i]);
      }
      this.pokemon = pokemon['name'];
    })
  }

  getPokemonWithAbility() {
    let observable = this._httpService.getWithAbility();
    observable.subscribe(pokemonAbility => {
      var total = (pokemonAbility['pokemon']).length;
      var abilityName = pokemonAbility['name'];
      console.log(total, 'pokemon have the ability:', abilityName);

      for (let i in pokemonAbility['pokemon']) {

        console.log(pokemonAbility['pokemon'][i].pokemon.name)
        // }

      }
    })

  }

