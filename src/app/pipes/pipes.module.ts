import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BypassSecurityTrustUrlPipe } from './bypass-security-trust-url.pipe';
import { BypassSecurityTrustResourceUrlPipe } from './bypass-security-trust-resource-url.pipe';
import { YandexMapsToWidgetPipe } from './yandex-maps-to-widget.pipe';
import { FilterByIdPipe } from './filter-by-id.pipe';

@NgModule({
    declarations: [
        BypassSecurityTrustUrlPipe,
        BypassSecurityTrustResourceUrlPipe,
        YandexMapsToWidgetPipe,
        FilterByIdPipe,
    ],
    imports: [
        BrowserModule,
    ],
    exports: [
        BypassSecurityTrustUrlPipe,
        BypassSecurityTrustResourceUrlPipe,
        YandexMapsToWidgetPipe,
        FilterByIdPipe,
    ]
})
export class PipesModule { }
