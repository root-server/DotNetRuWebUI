import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
    selector: 'dot-toolbar',
    templateUrl: './toolbar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent {
    @Input()
    public sidenav: MatSidenav;
}

