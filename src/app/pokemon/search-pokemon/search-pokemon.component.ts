import { Component,OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { Observable,Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.scss']
})
export class SearchPokemonComponent implements OnInit {
  searchTerms=new Subject<string>; //{ab..abc..abz..ab..abc}
  pokemons$:Observable<Pokemon[]>; //{..PokemonList(a)..PokemonList{ab}}
  ngOnInit(): void {
    this.pokemons$=this.searchTerms.pipe(
      //{..."a"."ab"..."abz"."ab"..."abc".....}
      debounceTime(300),
      //{......"ab"...."ab"...."abc"......}
      distinctUntilChanged(),
      //{......"ab"........"abc"......}
      switchMap((term)=>this.pokemonService.searchPokemonList(term))
      //{ .....pokemonList(ab)............pokemonList(abc)}

    );
  }

  constructor(private router:Router,private pokemonService:PokemonService){

  }

  search(term:string){
    this.searchTerms.next(term);
  }

  goToDetail(pokemon:Pokemon){
     const link=['/pokemon',pokemon.id];
     this.router.navigate(link);
  }
}
