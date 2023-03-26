import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ActionEvent } from '../state/product.state';


/**
 * Service chargé de gerer la communication entre composant
 */
@Injectable({
  providedIn: 'root'
})
export class EventDriverService {

  //le sujet utiliser pour les evenements il assure la communication
  sourceEventSubject:Subject<ActionEvent> = new Subject<ActionEvent>();
  //Tous les composants qui font un sucribe sur cette observable vont recevoir l'evenement publié
  sourceEventSubjectObservable = this.sourceEventSubject.asObservable();

  /**
   * La fonction utilisé pour publier des evenements
   * @param event l'evenement
   */
  publishEvent(event:ActionEvent){
    this.sourceEventSubject.next(event);
  }
}
