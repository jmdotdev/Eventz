export type EventCategory =
  | 'Music'
  | 'Parties'
  | 'Conferences'
  | 'Sports'
  | 'Comedy'
  | 'Food & Drink'
  | 'Arts & Culture'
  | 'Business'
  | 'Technology'
  | 'Workshops'
  | 'Family'
  | 'Networking';

export type EventStatus = 'onsale' | 'soldout' | 'lowstock' | 'free';

export interface EventVenue {
  name: string;
  address: string;
}

export interface EventTicketTier {
  id: string;
  name: string;
  price: number;
  description: string;
  remaining: number;
  popular?: boolean;
  soldOut?: boolean;
}

export interface EventScheduleItem {
  time: string;
  title: string;
  detail?: string;
}

export interface EventLineupItem {
  name: string;
  role: string;
}

export interface EventOrganizer {
  name: string;
  initial: string;
  verified: boolean;
  eventsHosted: number;
  rating: number;
  respondsWithin: string;
}

export interface EventListing {
  id: string;
  title: string;
  category: EventCategory;
  dateTime: string;
  endTime?: string;
  venue: EventVenue;
  priceFrom: number;
  coverGradient: [string, string];
  tags: string[];
  about: string[];
  schedule: EventScheduleItem[];
  lineup: EventLineupItem[];
  organizer: EventOrganizer;
  ticketTiers: EventTicketTier[];
  status: EventStatus;
  featured?: boolean;
  saved?: boolean;
}

export interface AttendeeInfo {
  fullName: string;
  email: string;
  phone?: string;
  idNumber?: string;
  sendToEmail?: boolean;
}

export type MyTicketStatus = 'valid' | 'cancelled';

export interface MyTicket {
  id: string;
  event: EventListing;
  tierName: string;
  ticketNo: string;
  holder: string;
  entry: string;
  status: MyTicketStatus;
  when: 'upcoming' | 'past' | 'transferred';
  featured?: boolean;
  refundNote?: string;
  refundAmount?: number;
}

export interface AccountStats {
  attended: number;
  upcoming: number;
  saved: number;
}

export interface RecentlyViewedItem {
  event: EventListing;
  statusNote?: string;
}
