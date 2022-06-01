import { useState } from 'react';
import { Card } from '../Card/card';
import { crearPersonajes } from '../scripts/personajes';

export function Father() {
  const InitialState = crearPersonajes();
  const [state, setState] = useState(InitialState);

  return (
    <div className="app container">
      <ul className="characters-list row list-unstyled">
        {InitialState.map((personaje) => {
          return <Card personaje={personaje}></Card>;
        })}
      </ul>
    </div>
  );
}
