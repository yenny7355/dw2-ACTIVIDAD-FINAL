export interface Hero {
  id: number;
  name: string;
}

//aca lo que hacemos es crear un interfaz para el hero en su propio archivo dandole como propiedad un id y un name
//bien ahora despues de crear esta ointerfaza devemos importarla en el archivo de component.ts para que se refactorize y asi el hero tenga un id y un name para asignarle un id y name