import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DateAdapter } from '@angular/material';
import * as moment from 'moment';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { Community, CommunityService } from '@dotnetru/community';
import { Venue, VenueService } from '@dotnetru/venue-editor';
import { Friend, FriendService } from '@dotnetru/friend-editor';
import { Meetup } from './interfaces';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
    selector: 'dot-meetup',
    styleUrls: ['./meetup.component.css'],
    templateUrl: './meetup.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        { provide: DateAdapter, useClass: MomentDateAdapter }
    ]
})
export class MeetupComponent {
    public meetup: Meetup = {
        id: 'SpbDotNet-29',
        name: 'Встреча SpbDotNet №29',
        communityId: 'SpbDotNet',
        // date: '2018-03-20',
        venue: { id: 'Spb-Selectel' } as Venue,
        friendIds: [
            // 'Microsoft',
            // 'Arcadia'
        ]
    } as Meetup;
    // public meetupMoment: moment.Moment = moment(this.meetup.date);
    public communities: Observable<Community[]>;
    public venues: Observable<Venue[]>;
    public friends: Observable<Friend[]>;

    public formGroup: FormGroup;
    public needCreateVenue = false;

    constructor(
        private fb: FormBuilder,
        private _dateAdapter: DateAdapter<moment.Moment>,
        private _detector: ChangeDetectorRef,
        communityService: CommunityService,
        venueService: VenueService,
        friendService: FriendService,
    ) {
        this.communities = communityService.communities;
        this.venues = venueService.venues;
        this.friends = friendService.friends;
        _dateAdapter.setLocale('ru-RU');
        this.createForm();
    }

    public get formArray(): FormArray {
        return this.formGroup.get('formArray') as FormArray;
    }

    public meetupFormGroup = (propName?: string): FormGroup => this.getStepProperty(0, propName) as FormGroup;

    public venueFormGroup = (propName?: string): FormGroup => this.getStepProperty(1, propName) as FormGroup;

    public changeNeedCreateVenue(): void {
        this.needCreateVenue = !this.needCreateVenue;
        const venueFormGroup: FormGroup = this.needCreateVenue
            ? this.fb.group({
                venueId: ['', Validators.required],
                venueName: ['', Validators.required],
                venueAddress: ['', Validators.required],
                venueMapUrl: ['', [Validators.required, Validators.pattern(/^https?:\/\/[^\.]+\.[^\.]+.*/i)]],
            })
            : this.fb.group({
                venueId: ['', Validators.required],
            });
        this.formArray.setControl(1, venueFormGroup);
        setTimeout(() => {
            this._detector.detectChanges();
        }, 0);
    }

    private createForm(): void {
        this.formGroup = this.fb.group({
            formArray: this.fb.array([
                this.fb.group({
                    communityId: ['', Validators.required],
                    meetupId: ['', Validators.required],
                    meetupName: ['', Validators.required],
                }),
                this.fb.group({
                    venueId: ['', Validators.required],
                }),
                this.fb.array([
                    this.fb.group({
                        venueId: ['', Validators.required],
                    })
                ])
            ]),
        });
    }

    private getStepProperty(stepIndex: number, propName?: string): AbstractControl {
        const res = propName
            ? this.formArray.get([stepIndex, propName])
            : this.formArray.get([stepIndex]);
        return res;
    }


}
