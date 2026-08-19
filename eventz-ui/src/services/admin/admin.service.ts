import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface AdminStat {
  label: string;
  value: string;
  icon: 'revenue' | 'tickets' | 'calendar' | 'attendees';
  delta: string;
  deltaTone: 'up' | 'down' | 'neutral';
}

export interface CapacityLegendRow {
  label: string;
  value: string;
  swatch: string;
  outline?: boolean;
}

export interface UpcomingEventRow {
  title: string;
  category: string;
  gradient: [string, string];
  date: string;
  ticketsSold: string;
  revenue: string;
  status: string;
}

export interface OrderRow {
  id: string;
  buyer: string;
  phone: string;
  event: string;
  amount: number;
  status: 'Paid' | 'Pending' | 'Refunded' | 'Failed';
  date: string;
}

export interface AttendeeRow {
  name: string;
  email: string;
  event: string;
  ticketType: string;
  checkedIn: boolean;
  checkedInAt?: string;
}

export interface BarDatum {
  label: string;
  pct: number;
  highlight?: boolean;
}

export interface BreakdownRow {
  label: string;
  detail: string;
  pct: number;
  color: string;
}

export interface RankedEventRow {
  title: string;
  gradient: [string, string];
  meta: string;
  revenue: string;
}

export interface AnalyticsData {
  stats: AdminStat[];
  salesBars: BarDatum[];
  ticketTypeBreakdown: BreakdownRow[];
  bestPerforming: RankedEventRow[];
  buyerCities: BreakdownRow[];
}

export interface PayoutRow {
  id: string;
  period: string;
  gross: string;
  fees: string;
  net: string;
  status: 'Paid' | 'In transit' | 'Failed';
  actionLabel: string;
}

export interface TeamMember {
  name: string;
  initials: string;
  role: string;
  status: 'Active' | 'Pending';
}

@Injectable({ providedIn: 'root' })
export class AdminService {
  getDashboardStats(): Observable<AdminStat[]> {
    return of([
      { label: 'Total revenue', value: 'KES 3.42M', icon: 'revenue', delta: '▲ 18.2%', deltaTone: 'up' },
      { label: 'Tickets sold', value: '1,284', icon: 'tickets', delta: '▲ 9.4%', deltaTone: 'up' },
      { label: 'Upcoming events', value: '6', icon: 'calendar', delta: '2 this week', deltaTone: 'neutral' },
      { label: 'Total attendees', value: '4,912', icon: 'attendees', delta: '▼ 2.1%', deltaTone: 'down' },
    ]);
  }

  getRevenueSeries(): Observable<{ data: number[]; labels: string[] }> {
    return of({
      data: [1_900_000, 2_150_000, 2_040_000, 2_680_000, 2_510_000, 3_120_000, 3_421_500],
      labels: ['21 Jul', '28 Jul', '4 Aug', '11 Aug', '17 Aug'],
    });
  }

  getCapacityBreakdown(): Observable<{ percent: number; soldLabel: string; totalLabel: string; legend: CapacityLegendRow[] }> {
    return of({
      percent: 72,
      soldLabel: '72%',
      totalLabel: '2,160 of 3,000 sold',
      legend: [
        { label: 'Tickets sold', value: '2,160', swatch: '#381DDB' },
        { label: 'Available', value: '720', swatch: '#C6C9F5' },
        { label: 'Held / comps', value: '120', swatch: '#F2F4FF', outline: true },
      ],
    });
  }

  getUpcomingEventsSummary(): Observable<UpcomingEventRow[]> {
    return of([
      { title: 'Nairobi Music Festival 2026', category: 'Music', gradient: ['#2E1065', '#7C3AED'], date: 'Sat, 29 Aug', ticketsSold: '2,160 / 3,000', revenue: 'KES 2.31M', status: 'On sale' },
      { title: 'AfroFuture Live', category: 'Music', gradient: ['#4C0519', '#E11D48'], date: 'Sat, 5 Sep', ticketsSold: '340 / 450', revenue: 'KES 680,000', status: 'On sale' },
      { title: 'Comedy Night: Punchline', category: 'Comedy', gradient: ['#3B3B44', '#8A8A9E'], date: 'Sat, 22 Aug', ticketsSold: '180 / 180', revenue: 'KES 180,000', status: 'Sold out' },
      { title: 'Creative Workshop: Film Photo', category: 'Workshops', gradient: ['#1E1B4B', '#6366F1'], date: 'Tue, 1 Sep', ticketsSold: '24 / 30', revenue: 'KES 60,000', status: 'On sale' },
    ]);
  }

  getOrders(): Observable<OrderRow[]> {
    const statuses: OrderRow['status'][] = ['Paid', 'Paid', 'Paid', 'Pending', 'Refunded', 'Failed'];
    const events = ['Nairobi Music Festival 2026', 'Nairobi Tech Summit 2026', 'AfroFuture Live', 'Comedy Night: Punchline'];
    const buyers = ['John Mwangi', 'Wanjiku Kamau', 'Brian Otieno', 'Amina Yusuf', 'Kevin Njoroge', 'Faith Achieng'];
    return of(
      Array.from({ length: 42 }).map((_, i) => ({
        id: `EVZ-${88214 - i}`,
        buyer: buyers[i % buyers.length],
        phone: `+2547${(10000000 + i * 137).toString().slice(0, 8)}`,
        event: events[i % events.length],
        amount: [1500, 2500, 3500, 7500][i % 4],
        status: statuses[i % statuses.length],
        date: new Date(2026, 7, 18 - (i % 20)).toDateString(),
      })),
    );
  }

  getAttendees(): Observable<AttendeeRow[]> {
    const events = ['Nairobi Music Festival 2026', 'Nairobi Tech Summit 2026', 'AfroFuture Live'];
    const tiers = ['Early Bird', 'Regular', 'VIP', 'Delegate'];
    const names = ['John Mwangi', 'Wanjiku Kamau', 'Brian Otieno', 'Amina Yusuf', 'Kevin Njoroge', 'Faith Achieng', 'Peter Kimani', 'Lydia Wafula'];
    return of(
      Array.from({ length: 38 }).map((_, i) => ({
        name: names[i % names.length],
        email: `${names[i % names.length].toLowerCase().replace(' ', '.')}@gmail.com`,
        event: events[i % events.length],
        ticketType: tiers[i % tiers.length],
        checkedIn: i % 3 !== 0,
        checkedInAt: i % 3 !== 0 ? `${6 + (i % 4)}:${(i * 7) % 60 < 10 ? '0' : ''}${(i * 7) % 60} PM` : undefined,
      })),
    );
  }

  getAttendeeStats(): Observable<AdminStat[]> {
    return of([
      { label: 'Total attendees', value: '4,912', icon: 'attendees', delta: '', deltaTone: 'neutral' },
      { label: 'Checked in', value: '3,304', icon: 'tickets', delta: '', deltaTone: 'neutral' },
      { label: 'Scan rate', value: '19.4%', icon: 'calendar', delta: '', deltaTone: 'neutral' },
    ]);
  }

  getAnalytics(): Observable<AnalyticsData> {
    return of({
      stats: [
        { label: 'Revenue', value: 'KES 8.94M', icon: 'revenue', delta: '▲ 22.4%', deltaTone: 'up' },
        { label: 'Tickets sold', value: '4,206', icon: 'tickets', delta: '▲ 14.1%', deltaTone: 'up' },
        { label: 'Conversion rate', value: '6.8%', icon: 'calendar', delta: '▼ 0.4%', deltaTone: 'down' },
        { label: 'Attendance rate', value: '87%', icon: 'attendees', delta: '▲ 3.2%', deltaTone: 'up' },
      ],
      salesBars: [
        { label: 'W22', pct: 42 }, { label: 'W23', pct: 55 }, { label: 'W24', pct: 48 },
        { label: 'W25', pct: 60 }, { label: 'W26', pct: 52 }, { label: 'W27', pct: 78, highlight: true },
        { label: 'W28', pct: 65 }, { label: 'W29', pct: 92, highlight: true }, { label: 'W30', pct: 88, highlight: true },
        { label: 'W31', pct: 70 },
      ],
      ticketTypeBreakdown: [
        { label: 'Regular', detail: 'KES 4.38M · 49%', pct: 49, color: '#381DDB' },
        { label: 'VIP', detail: 'KES 2.86M · 32%', pct: 32, color: '#5B45E6' },
        { label: 'Early Bird', detail: 'KES 1.34M · 15%', pct: 15, color: '#8A78F0' },
        { label: 'Group of 5', detail: 'KES 356,000 · 4%', pct: 4, color: '#C6C9F5' },
      ],
      bestPerforming: [
        { title: 'Nairobi Music Festival 2026', gradient: ['#2E1065', '#7C3AED'], meta: '2,160 tickets · 72% capacity', revenue: 'KES 2.31M' },
        { title: 'Nairobi Tech Summit 2026', gradient: ['#052E3A', '#0891B2'], meta: '892 tickets · 65% capacity', revenue: 'KES 1.87M' },
        { title: 'AfroFuture Live', gradient: ['#4C0519', '#E11D48'], meta: '340 tickets · 76% capacity', revenue: 'KES 680,000' },
        { title: 'Creative Workshop: Film Photo', gradient: ['#1E1B4B', '#6366F1'], meta: '24 tickets · 80% capacity', revenue: 'KES 60,000' },
      ],
      buyerCities: [
        { label: 'Nairobi', detail: '76%', pct: 76, color: '#381DDB' },
        { label: 'Mombasa', detail: '22%', pct: 22, color: '#5B45E6' },
        { label: 'Kisumu', detail: '14%', pct: 14, color: '#8A78F0' },
        { label: 'Nakuru', detail: '9%', pct: 9, color: '#C6C9F5' },
        { label: 'Diaspora', detail: '5%', pct: 5, color: '#C6C9F5' },
      ],
    });
  }

  getPayoutSummary(): Observable<{ amount: string; date: string; gross: string; fee: string; refunds: string }> {
    return of({ amount: 'KES 486,200', date: 'Friday, 21 Aug', gross: 'KES 520,000', fee: '−KES 26,000', refunds: '−KES 7,800' });
  }

  getPayoutHistory(): Observable<PayoutRow[]> {
    const statuses: PayoutRow['status'][] = ['Paid', 'Paid', 'Paid', 'In transit', 'Paid', 'Failed'];
    return of(
      Array.from({ length: 16 }).map((_, i) => {
        const status = statuses[i % statuses.length];
        return {
          id: `PO-2026-${(814 - i * 7).toString().padStart(4, '0')}`,
          period: `${new Date(2026, 7, 14 - i * 7).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} – ${new Date(2026, 7, 20 - i * 7).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`,
          gross: `KES ${(380_000 + i * 12_400).toLocaleString('en-US')}`,
          fees: `−KES ${(19_000 + i * 600).toLocaleString('en-US')}`,
          net: `KES ${(361_000 + i * 11_800).toLocaleString('en-US')}`,
          status,
          actionLabel: status === 'Failed' ? 'Retry' : 'Statement',
        };
      }),
    );
  }

  getTeamMembers(): Observable<TeamMember[]> {
    return of([
      { name: 'John Mwangi', initials: 'JM', role: 'Owner', status: 'Active' },
      { name: 'Lydia Wafula', initials: 'LW', role: 'Manager', status: 'Active' },
      { name: 'Peter Kimani', initials: 'PK', role: 'Gate staff', status: 'Pending' },
    ]);
  }
}
