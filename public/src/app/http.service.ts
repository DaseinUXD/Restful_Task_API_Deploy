import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {
    // this.getPokemon();
    // this.getIndex();
    // this.getTasks();
    // this.getTask();
    // this.getNew();
    // this.getEdit();
  }

  getWithAbility() {
    return this._http.get('https://pokeapi.co/api/v2/ability/34/')
  }
  getPokemon() {
    // let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
    // bulbasaur.subscribe(data => console.log('Pokemon is ', data));
    return this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
  }

  getIndex() {
    // our http response is an observable, store it in the variable tempObservable
    // let tempObservable = this._http.get('/');
    // subscribe to the observable and provide the code we want to execute with our data from the response
    // tempObservable.subscribe(data => console.log('Got the index!', data))3
    return this._http.get('/');
  }

  getTasks() {
    // our http response is an observable, store it in the variable tempObservable
    // let tempObservable = this._http.get('/tasks');
    // subscribe to the observable and provide the code we want to execute with our data from the response
    // tempObservable.subscribe(data => console.log('Got all tasks!', data));
    return this._http.get('/tasks');
  }

  getTask() {
    let tempObservable = this._http.get('/tasks/:id');
    tempObservable.subscribe(data => console.log('got single task:', data));
  }

  getNew() {
    let tempObservable = this._http.get('/tasks/new');
    tempObservable.subscribe(data => console.log('got new task:', data));
  }

  getEdit() {
    let tempObservable = this._http.get('/tasks/edit/:id');
    tempObservable.subscribe(data => console.log('got task to edit:', data));
  }


}
