import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashLetterComponent } from './splash-letter.component';

describe('SplashLetterComponent', () => {
  let component: SplashLetterComponent;
  let fixture: ComponentFixture<SplashLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplashLetterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SplashLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
