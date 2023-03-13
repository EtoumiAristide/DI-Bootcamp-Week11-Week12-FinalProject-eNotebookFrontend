import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatblissementComponent } from './etatblissement.component';

describe('EtatblissementComponent', () => {
  let component: EtatblissementComponent;
  let fixture: ComponentFixture<EtatblissementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtatblissementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtatblissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
