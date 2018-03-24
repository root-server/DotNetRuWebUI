import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { VenueService } from './venue.service';
import { Venue } from '.';
import { Observable } from 'rxjs/Observable';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'dot-venue',
    templateUrl: './venue.component.html',
    styleUrls: ['./venue.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class VenueComponent {
    @Input()
    public venue: Venue;
}
