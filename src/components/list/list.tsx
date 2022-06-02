import { Personaje } from '../scripts/personaje';

export function List({ personaje }: { personaje: Personaje }) {
  return (
    <>
      <h2 className="character__name card-title h4">
        {personaje.nombre} - {personaje.familia}
      </h2>
      <div className="character__info">
        <ul className="list-unstyled">
          <li>Edad: {personaje.edad} años</li>
          <li>
            Estado:
            {personaje.estadoVivo ? (
              <i className="fas fa-thumbs-up"></i>
            ) : (
              <i className="fas fa-thumbs-down"></i>
            )}
          </li>
        </ul>
      </div>
    </>
  );
}
