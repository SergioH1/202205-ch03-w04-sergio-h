import { Card } from '../Card/card';
import { crearPersonajes } from '../scripts/personajes';

export function Father() {
  const InitialState = crearPersonajes();

  return (
    <div className="app container">
      <ul className="characters-list row list-unstyled">
        {InitialState.map((personaje) => {
          return <Card key={personaje.nombre} personaje={personaje}></Card>;
        })}
      </ul>
    </div>
  );
}
