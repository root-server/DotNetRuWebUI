import { NgModule } from '@angular/core';
import { MatToolbarModule, MatButtonModule, MatSidenavModule } from '@angular/material';
import { ToolbarComponent } from './toolbar.component';

@NgModule({
    declarations: [
        ToolbarComponent,
    ],
    imports: [
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
    ],
    exports: [
        ToolbarComponent,
    ]
})
export class ToolbarModule { }

