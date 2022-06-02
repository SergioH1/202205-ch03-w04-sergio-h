import { Asesor } from '../scripts/asesor';
import { Escudero } from '../scripts/escudero';
import { Luchador } from '../scripts/luchador';
import { Personaje } from '../scripts/personaje';
import { Rey } from '../scripts/rey';

export function ListType({ personaje }: { personaje: Personaje }) {
  function selectType() {
    if (personaje instanceof Rey) {
      return <li>Años de reinado: {personaje.añosReinado}</li>;
    } else if (personaje instanceof Luchador) {
      return (
        <>
          <li>Arma: {personaje.arma}</li>
          <li>Destreza: {personaje.destreza}</li>
        </>
      );
    } else if (personaje instanceof Asesor) {
      return <li>Asesora a: {personaje.jefe.nombre}</li>;
    } else if (personaje instanceof Escudero) {
      return (
        <>
          <li>Sirve a: {personaje.amo.nombre}</li>
          <li>Peloteo: {personaje.sumision}</li>
        </>
      );
    }
  }
  return <ul className="list-unstyled">{selectType()}</ul>;
}
