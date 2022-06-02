import { Asesor } from './asesor';
import { Escudero } from './escudero';
import { Luchador } from './luchador';
import { Rey } from './rey';
import { Personaje } from './personaje';

export function crearPersonajes() {
  const data: Array<Personaje> = [
    new Rey('Joffrey', 'Baratheon', 33, 2),
    new Luchador('Jaime', 'Lannister', 33, 'espada', 8),
    new Luchador('Daenerys', 'Targaryen', 33, 'dragones', 9),
  ];
  data.push(new Asesor('Tyrion', 'Lannister', 33, data[2]));
  data.push(new Escudero('Bronn', 'Aguas Negras', 33, 5, data[1] as Luchador));

  return data;
}
