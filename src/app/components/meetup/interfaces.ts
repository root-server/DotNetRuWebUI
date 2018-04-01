import { Venue } from '@dotnetru/venue-editor';

export interface Meetup {
    id: string;
    name: string;
    communityId: string;
    // obsolete
    // date: string;
    venueId: string;
    venue: Venue;
    friendIds: string[];
}
