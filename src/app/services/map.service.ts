import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  isMapOpenSub = new Subject<boolean>();
  coordinatesSub = new Subject<number[]>();

  setDarkMode(isMapOpen: boolean) {
    this.isMapOpenSub.next(isMapOpen);
  }

  setCoordinates(latitude: number, longitude: number) {
    this.coordinatesSub.next([latitude, longitude])
  }
}
