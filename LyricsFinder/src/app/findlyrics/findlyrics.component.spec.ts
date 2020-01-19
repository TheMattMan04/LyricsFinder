import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindlyricsComponent } from './findlyrics.component';

describe('FindlyricsComponent', () => {
  let component: FindlyricsComponent;
  let fixture: ComponentFixture<FindlyricsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindlyricsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindlyricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
