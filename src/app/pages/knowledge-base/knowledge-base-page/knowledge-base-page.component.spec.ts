import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeBasePageComponent } from './knowledge-base-page.component';

describe('KnowledgeBasePageComponent', () => {
  let component: KnowledgeBasePageComponent;
  let fixture: ComponentFixture<KnowledgeBasePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KnowledgeBasePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KnowledgeBasePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
