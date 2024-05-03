import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
// Importa la constante HEROES desde el archivo 'mock-heroes.ts'
import { HEROES } from './mock-heroes';
// Importa el servicio MessageService desde el archivo 'message.service.ts'
import { MessageService } from './message.service';



@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  // Método para obtener todos los héroes
  getHeroes(): Observable<Hero[]> {
    // Convierte el arreglo de héroes HEROES en un Observable
    const heroes = of(HEROES);
    // Agrega un mensaje al servicio MessageService para indicar que se obtuvieron los héroes
    this.messageService.add('HeroService: fetched heroes');
    // Retorna el Observable con los héroes
    return heroes;
  }

  // Método para obtener un héroe por su ID
  getHero(id: number): Observable<Hero> {
    // Encuentra el héroe con el ID especificado en el arreglo HEROES
    const hero = HEROES.find(h => h.id === id)!;
    // Agrega un mensaje al servicio MessageService para indicar que se obtuvo el héroe con el ID especificado
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    // Retorna un Observable con el héroe encontrado
    return of(hero);
  }
}
