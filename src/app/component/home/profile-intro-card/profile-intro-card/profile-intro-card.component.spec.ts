import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileIntroCardComponent } from './profile-intro-card.component';

describe('ProfileIntroCardComponent', () => {
  let component: ProfileIntroCardComponent;
  let fixture: ComponentFixture<ProfileIntroCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileIntroCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileIntroCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
