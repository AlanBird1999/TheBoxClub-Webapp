import { Injectable } from '@angular/core';
import { Container } from '../home/home.component';

@Injectable({
  providedIn: 'root',
})
export class RoomControllService {
  private currentContainer: Container | undefined;
  constructor() {}

  setCurrentContainer(contaienr: Container | undefined) {
    this.currentContainer = contaienr;
  }

  get container(): Container | undefined {
    return this.currentContainer;
  }
}
