import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditListItemModalComponent } from './edit-list-item-modal.component';

describe('EditListItemModalComponent', () => {
  let component: EditListItemModalComponent;
  let fixture: ComponentFixture<EditListItemModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditListItemModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditListItemModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
