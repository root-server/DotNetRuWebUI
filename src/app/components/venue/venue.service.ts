import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { filter } from 'rxjs/operators/filter';
import { Venue } from '.';

@Injectable()
export class VenueService {
    private _venues = new BehaviorSubject<Venue[]>(this.getHardCodedVenues());

    private dataStore = {
        venues: [] as Venue[]
    };

    public get venues(): Observable<Venue[]> {
        return this._venues.pipe(filter((x: Venue[]) => x.length > 0));
    }

    private getHardCodedVenues(): Venue[] {
        return [
            {
                id: 'Spb-Arcadia',
                name: 'Конференц-зал «Arcadia»',
                address: 'Санкт-Петербург, Большой Сампсониевский пр., 28, корп. 2 (7 этаж), БЦ «MEZON PLAZA»',
                mapUrl: 'https://yandex.ru/maps/-/CBarNXcsgD'
            }, {
                id: 'Spb-Selectel',
                name: 'Конференц-холл «Selectel»',
                address: 'Санкт-Петербург, Цветочная, 19',
                mapUrl: 'https://maps.yandex.ru/-/C6q5nXJx'
            }
        ];
    }
}
