import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizersTableComponent } from './organizers-table.component';

describe('OrganizersTableComponent', () => {
  let component: OrganizersTableComponent;
  let fixture: ComponentFixture<OrganizersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganizersTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrganizersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
