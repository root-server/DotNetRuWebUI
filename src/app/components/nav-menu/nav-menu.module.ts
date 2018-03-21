import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
    MatIconModule,
    MatListModule,
    MatButtonModule,
} from '@angular/material';
import { NavMenuComponent } from './nav-menu.component';

@NgModule({
    declarations: [
        NavMenuComponent,
    ],
    imports: [
        RouterModule,
        MatIconModule,
        MatListModule,
        MatButtonModule,
    ],
    exports: [
        NavMenuComponent,
    ]
})
export class NavMenuModule {
}

