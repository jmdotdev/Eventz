import { MyTicket } from '../../interfaces/event.interface';
import { MOCK_EVENTS } from '../events/events.mock';

const musicFestival = MOCK_EVENTS.find(e => e.id === 'nairobi-music-festival-2026')!;
const techSummit = MOCK_EVENTS.find(e => e.id === 'nairobi-tech-summit-2026')!;
const rooftopSession = MOCK_EVENTS.find(e => e.id === 'sunset-rooftop-session')!;
const basketball = MOCK_EVENTS.find(e => e.id === 'basketball-tournament')!;
const comedyNight = MOCK_EVENTS.find(e => e.id === 'comedy-night')!;
const afrofuture = MOCK_EVENTS.find(e => e.id === 'afrofuture-live')!;

export const MOCK_TICKETS: MyTicket[] = [
  {
    id: 'tkt-evz-88214-1',
    event: musicFestival,
    tierName: 'Regular',
    ticketNo: 'EVZ-88214-1',
    holder: 'John Mwangi',
    entry: 'Gate B · Not checked in',
    status: 'valid',
    when: 'upcoming',
    featured: true,
  },
  {
    id: 'tkt-evz-88301-1',
    event: techSummit,
    tierName: 'Delegate',
    ticketNo: 'EVZ-88301-1',
    holder: 'John Mwangi',
    entry: 'Main lobby',
    status: 'valid',
    when: 'upcoming',
  },
  {
    id: 'tkt-evz-87990-1',
    event: rooftopSession,
    tierName: 'General',
    ticketNo: 'EVZ-87990-1',
    holder: 'John Mwangi',
    entry: '',
    status: 'cancelled',
    when: 'upcoming',
    refundNote: 'The organizer cancelled this event due to weather. A full refund of KES 3,000 was sent to your M-Pesa on 21 Aug.',
    refundAmount: 3000,
  },
  {
    id: 'tkt-evz-86112-1',
    event: basketball,
    tierName: 'Day pass',
    ticketNo: 'EVZ-86112-1',
    holder: 'John Mwangi',
    entry: 'Checked in',
    status: 'valid',
    when: 'past',
  },
  {
    id: 'tkt-evz-85820-1',
    event: comedyNight,
    tierName: 'General',
    ticketNo: 'EVZ-85820-1',
    holder: 'John Mwangi',
    entry: 'Checked in',
    status: 'valid',
    when: 'past',
  },
  {
    id: 'tkt-evz-84490-1',
    event: afrofuture,
    tierName: 'General',
    ticketNo: 'EVZ-84490-1',
    holder: 'Wanjiku Kamau',
    entry: '',
    status: 'valid',
    when: 'transferred',
  },
];
