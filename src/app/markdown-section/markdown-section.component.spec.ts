import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkdownSectionComponent } from './markdown-section.component';

describe('MarkdownSectionComponent', () => {
  let component: MarkdownSectionComponent;
  let fixture: ComponentFixture<MarkdownSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkdownSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarkdownSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
