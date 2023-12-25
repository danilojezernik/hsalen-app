import {Injectable} from '@angular/core';

function _window(): Window {
  // return the global native browser window object
  return window;
}

@Injectable({
  providedIn: 'root'
})
export class WindowObjectService {

  constructor() {
  }

  getWindow(): Window {
    return _window()
  }

}
