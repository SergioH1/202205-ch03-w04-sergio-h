import { Die } from '../Buttons/Die';
import { ListType } from '../list-type/listType';
import { List } from '../list/list';
import { Personaje } from '../scripts/personaje';
import { Speak } from '../Buttons/speak';
import { Dialogue } from '../pages/Dialogue';
export function Card({ personaje }: { personaje: Personaje }) {
  const template = (
    <>
      <li className="character col">
        <div className="card character__card">
          <img
            src={'img/' + personaje.nombre + '.jpg'}
            alt="Nombre y familia del personaje"
            className="character__picture card-img-top"
          />
          <div className="card-body">
            <List personaje={personaje}></List>
            <div className="character__overlay">
              <ListType personaje={personaje}></ListType>
              <div className="character__actions">
                <Speak></Speak>
                <Die></Die>
              </div>
            </div>
          </div>
          <i className="emoji"></i>
        </div>
      </li>
      <Dialogue></Dialogue>
    </>
  );
  return template;
}
