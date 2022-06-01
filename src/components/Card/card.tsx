import { useState } from 'react';
import { crearPersonajes } from '../scripts/personajes';
export function Card() {
  const InitialState = crearPersonajes();
  const [state, setState] = useState(InitialState);
  const template = (
    <>
      <ul>
        {InitialState.map((item) => (
          <li key={item.nombre} className={'card character col' + item.nombre}>
            <div className="card character__card"></div>
          </li>
        ))}
      </ul>
    </>
  );

  return template;
}
