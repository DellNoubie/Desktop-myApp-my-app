import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError,tap ,of} from 'rxjs';

@Injectable()
export class PokemonService {
  constructor(private http:HttpClient){

  }

  getPokemonList():Observable<Pokemon[]>{
    //return POKEMONS;
    return this.http.get<Pokemon[]>('api/pokemons').pipe(
      tap((response)=>this.log(response)),
      catchError((error)=>this.handleError(error,[]))
      );
    }

  getPokemonById(pokemonId:number):Observable<Pokemon|undefined>{
    return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
    tap((response)=>this.log(response)),
      catchError((error)=>this.handleError(error,undefined))
    );
  }
  private log(response:any){
    console.table(response);
  }
  private handleError(error:Error,errorValue:any){
    console.log(error);
    return of(errorValue);
  }
  getPokemonTypeList():string[]{
    return ['Plante','Feu','Eau','Insecte','Normal','Electrik','Poisson','Fée','Vol','Combat','Psy'];
  }

  updatePokemon(pokemon:Pokemon):Observable<null>{
    const httpOptions={
      headers:new HttpHeaders({'Content-Type':'Application/json'})
    };
    return this.http.put('api/pokemons',pokemon,httpOptions).pipe(
      tap((response)=>this.log(response)),
      catchError((error)=>this.handleError(error,null))
    );
  }
  deletePokemonById(pokemonId:number):Observable<null>{
    return this.http.delete(`api/pokemons/${pokemonId}`).pipe(
      tap((response)=>this.log(response)),
      catchError((error)=>this.handleError(error,null))
    );
  }

  addPokemon(pokemon:Pokemon):Observable<Pokemon>{
    const httpOptions={
      headers:new HttpHeaders({'Content-Type':'Application/json'})
    };
    return this.http.post<Pokemon>('api/pokemons',pokemon,httpOptions).pipe(
      tap((response)=>this.log(response)),
      catchError((error)=>this.handleError(error,null))
    );
  }
  searchPokemonList(term:string):Observable<Pokemon[]>{
    if(term.length<=1){
      return of([]);
    }
    return this.http.get<Pokemon[]>(`api/pokemons/?name=${term}`).pipe(
      tap((response)=>this.log(response)),
      catchError((error)=>this.handleError(error,[]))
    );

  }
}
