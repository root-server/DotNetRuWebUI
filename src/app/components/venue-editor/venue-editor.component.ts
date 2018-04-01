import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { VenueService } from './venue-editor.service';
import { Venue } from './interfaces';

@Component({
    selector: 'dot-venue-editor',
    templateUrl: './venue-editor.component.html',
    styleUrls: ['./venue-editor.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class VenueEditorComponent {
    @Input()
    public venue: Venue;

    @Input()
    public formGroup: FormGroup;
}
