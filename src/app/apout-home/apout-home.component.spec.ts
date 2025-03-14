import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApoutHomeComponent } from './apout-home.component';

describe('ApoutHomeComponent', () => {
  let component: ApoutHomeComponent;
  let fixture: ComponentFixture<ApoutHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApoutHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApoutHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
