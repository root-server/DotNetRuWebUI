import { Injectable } from '@angular/core';
import { Community } from './interfaces';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { filter } from 'rxjs/operators/filter';

@Injectable()
export class CommunityService {
    private _communities = new BehaviorSubject<Community[]>(this.getHardCodedCommunities());

    private dataStore = {
        communities: [] as Community[]
    };

    public get communities(): Observable<Community[]> {
        return this._communities.pipe(filter((x: Community[]) => x.length > 0));
    }

    private getHardCodedCommunities(): Community[] {
        return [
            {
                id: 'SpbDotNet',
                name: 'SpbDotNet',
                city: 'Санкт-Петербург',
                timeZone: 'Europe/Moscow'
            }, {
                id: 'MskDotNet',
                name: 'MskDotNet',
                city: 'Москва',
                timeZone: 'Europe/Moscow'
            }, {
                id: 'KryDotNet',
                name: 'KryDotNet',
                city: 'Красноярск',
                timeZone: 'Asia/Krasnoyarsk'
            }, {
                id: 'SarDotNet',
                name: 'SarDotNet',
                city: 'Саратов',
                timeZone: 'Europe/Saratov'
            }, {
                id: 'KznDotNet',
                name: 'KznDotNet',
                city: 'Казань',
                timeZone: 'Europe/Moscow'
            },
        ];
    }
}
