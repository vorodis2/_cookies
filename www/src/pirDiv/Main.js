import { Glaf } from './Glaf.js';
import { LocalStorage } from './components/LocalStorage.js';
import { Param } from './components/Param.js';

export class Main {
  constructor() {
    this.param = new Param().param;
    document.title = 'Cookies';
    window.param = this.param;
    this.param.otstup=4
    this.localStorage = new LocalStorage(null, 'pirDiv.v4');
    window.localStorageApp = this.localStorage;
    this.glaf = new Glaf(this);
  }
}
