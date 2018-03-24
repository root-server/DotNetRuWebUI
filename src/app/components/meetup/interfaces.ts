export interface Meetup {
    id: string;
    name: string;
    communityId: string;
    // obsolete
    // date: string;
    venueId: string;
    friendIds: string[];
}
