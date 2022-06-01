import { emoji } from '../datos/emojis';

import { Asesor } from '../scripts/asesor';
import { Escudero } from '../scripts/escudero';
import { Luchador } from '../scripts/luchador';
import { Personaje } from '../scripts/personaje';
import { Rey } from '../scripts/rey';

export class CreateCard {
  constructor(public personaje: Personaje) {}
  createTemplate() {
    let template = `
        <li class="character col ${this.personaje.nombre}">
            <div class="card character__card">
                <img
                    src="img/${this.personaje.nombre.toLowerCase()}.jpg"
                    alt="${this.personaje.nombre} y ${this.personaje.familia}"
                    class="character__picture card-img-top 
                        ${this.personaje.estadoVivo ? '' : 'reves'}"
                />
                <div class="card-body">
                    <h2 class="character__name card-title h4">
                        ${this.personaje.nombre} y ${this.personaje.familia}
                    </h2>
                    <div class="character__info">
                        <ul class="list-unstyled">
                            <li>Edad: ${this.personaje.edad} años</li>`;

    if (this.personaje.estadoVivo) {
      template += `
                            <li>
                                Estado:
                                 <i class="fas fa-thumbs-up"></i>
                            </li>`;
    } else {
      template += `
                            <li>
                                Estado:
                                <i class="fas fa-thumbs-down"></i>
                            </li>`;
    }

    template += `
                        </ul>
                    </div>
                    <div class="character__overlay">
                        <ul class="list-unstyled">`;

    if (this.personaje instanceof Rey) {
      template += `<li>Años de reinado: ${this.personaje.añosReinado}</li>`;
    } else if (this.personaje instanceof Luchador) {
      template += `<li>Arma: ${this.personaje.arma}</li>
                    <li>Destreza: ${this.personaje.destreza}</li> `;
    } else if (this.personaje instanceof Asesor) {
      template += `<li>Asesora a: ${this.personaje.jefe.nombre}</li> `;
    } else if (this.personaje instanceof Escudero) {
      template += `<li>Peloteo: ${this.personaje.sumision}</li>
                    <li>Sirve a: ${this.personaje.amo.nombre}</li>`;
    }

    template += `
                        </ul>
                        <div class="character__actions">
                            <button class="character__action btn">habla</button>
                            <button class="character__action btn">muere</button>
                        </div>
                    </div>
                </div>
                <i class="emoji">
                ${emoji[this.personaje.categoria]}
                </i>
            </div>
        </li>
        `;
    return template;
  }
}
