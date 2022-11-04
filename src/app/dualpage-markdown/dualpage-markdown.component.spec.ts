import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DualpageMarkdownComponent } from './dualpage-markdown.component';

describe('DualpageMarkdownComponent', () => {
  let component: DualpageMarkdownComponent;
  let fixture: ComponentFixture<DualpageMarkdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DualpageMarkdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DualpageMarkdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
