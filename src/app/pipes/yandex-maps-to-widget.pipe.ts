import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'yandexMapsToWidget' })
export class YandexMapsToWidgetPipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) { }

    public transform(mapsUrl: string) {
        if (!mapsUrl) {
            return mapsUrl;
        }
        // mapUrl: 'https://yandex.ru/maps/-/CBarNXcsgD'
        // mapUrl: 'https://maps.yandex.ru/-/C6q5nXJx'
        // widgetUrl: 'https://yandex.ru/map-widget/v1/-/CVgQ5YOF"></iframe>
        const regexp = /^https?:\/\/.*yandex\.ru.*\/-\//gi;
        const widgetUrl = mapsUrl.replace(regexp, 'https://yandex.ru/map-widget/v1/-/');
        return this.sanitizer.bypassSecurityTrustResourceUrl(widgetUrl);
    }
}
