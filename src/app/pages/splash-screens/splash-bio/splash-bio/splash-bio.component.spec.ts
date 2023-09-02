import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashBioComponent } from './splash-bio.component';

describe('SplashBioComponent', () => {
  let component: SplashBioComponent;
  let fixture: ComponentFixture<SplashBioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplashBioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SplashBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
