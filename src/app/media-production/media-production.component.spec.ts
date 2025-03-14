import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaProductionComponent } from './media-production.component';

describe('MediaProductionComponent', () => {
  let component: MediaProductionComponent;
  let fixture: ComponentFixture<MediaProductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaProductionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MediaProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
