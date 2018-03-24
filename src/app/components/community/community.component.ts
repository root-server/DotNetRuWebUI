import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CommunityService } from './community.service';
import { Observable } from 'rxjs/Observable';
import { DomSanitizer } from '@angular/platform-browser';
import { Community } from './interfaces';

@Component({
    selector: 'dot-community',
    templateUrl: './community.component.html',
    styleUrls: ['./community.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommunityComponent {
    @Input()
    public community: Community;
}
