// Importa el decorador Component y la interfaz OnInit desde la biblioteca '@angular/core'
import { Component, OnInit } from '@angular/core';
// Importa la interfaz Hero desde el archivo '../hero'
import { Hero } from '../hero';
// Importa el servicio HeroService desde el archivo '../hero.service'
import { HeroService } from '../hero.service';

// Decorador Component para definir el componente DashboardComponent
@Component({
  // Selector CSS para este componente
  selector: 'app-dashboard',
  // Ruta al archivo de plantilla HTML para este componente
  templateUrl: './dashboard.component.html',
  // Rutas a los archivos de estilos CSS para este componente
  styleUrls: [ './dashboard.component.css' ]
})
// Clase del componente DashboardComponent que implementa la interfaz OnInit
export class DashboardComponent implements OnInit {
  // Arreglo de héroes que se mostrarán en el dashboard
  heroes: Hero[] = [];

  // Constructor del componente DashboardComponent que recibe una instancia de HeroService
  constructor(private heroService: HeroService) { }

  // Método ngOnInit que se ejecuta cuando el componente se inicializa
  ngOnInit(): void {
    // Llama al método getHeroes() para obtener la lista de héroes
    this.getHeroes();
  }

  // Método para obtener la lista de heroes desde el servicio HeroService
  getHeroes(): void {
    // Utiliza el metodo getHeroes() del servicio HeroService y subscribe para obtener la lista de héroes
    // Luego, utiliza el metodo slice(1, 5) para obtener solo los héroes del indice 1 al 4 (los primeros 4 heroes)
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(0, 4));
  }
}
