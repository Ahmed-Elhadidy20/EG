import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaegNotFoundeComponent } from './paeg-not-founde.component';

describe('PaegNotFoundeComponent', () => {
  let component: PaegNotFoundeComponent;
  let fixture: ComponentFixture<PaegNotFoundeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaegNotFoundeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaegNotFoundeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
