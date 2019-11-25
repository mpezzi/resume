import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { ResumeReferenceListComponent } from './resume-reference-list.component';

describe('ResumeReferenceListComponent', () => {
  let component: ResumeReferenceListComponent;
  let fixture: ComponentFixture<ResumeReferenceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeReferenceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeReferenceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
