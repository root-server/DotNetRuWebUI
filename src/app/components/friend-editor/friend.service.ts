import { Injectable } from '@angular/core';
import { Friend } from './interfaces';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { filter } from 'rxjs/operators/filter';

@Injectable()
export class FriendService {
    private _friends = new BehaviorSubject<Friend[]>(this.getHardCodedFriends());

    private dataStore = {
        friends: [] as Friend[]
    };

    public get friends(): Observable<Friend[]> {
        return this._friends.pipe(filter((x: Friend[]) => x.length > 0));
    }

    private getHardCodedFriends(): Friend[] {
        return [
            {
                id: 'Microsoft',
                name: 'Microsoft Corporation',
                description: 'Microsoft Corporation — одна из крупнейших транснациональных компаний по производству ' +
                    'проприетарного программного обеспечения для различного рода вычислительной техники — персональных ' +
                    'компьютеров, игровых приставок, КПК, мобильных телефонов и прочего, разработчик наиболее широко ' +
                    'распространённой в мире программной платформы — семейства операционных систем Windows.',
                url: 'https://www.microsoft.com'
            },
            {
                id: 'Arcadia',
                name: 'Arcadia',
                description: 'Компания Аркадия является одной из ведущих компаний по разработке программного обеспечения. Более ' +
                    '20 лет сохраняет высокий стандарт предоставляемых услуг в области программного обеспечения. Специализируется ' +
                    'на разработке приложений, внедряя передовые идеи с помощью актуальных на сегодняшний день технологий.',
                url: 'http://www.arcadia.spb.ru/'
            }
        ];
    }
}
