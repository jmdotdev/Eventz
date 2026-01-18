import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketListTableComponent } from './ticket-list-table.component';

describe('TicketListTableComponent', () => {
  let component: TicketListTableComponent;
  let fixture: ComponentFixture<TicketListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketListTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TicketListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
