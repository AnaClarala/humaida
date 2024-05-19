import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageChauffeurComponent } from './page-chauffeur.component';

describe('PageChauffeurComponent', () => {
  let component: PageChauffeurComponent;
  let fixture: ComponentFixture<PageChauffeurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageChauffeurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageChauffeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
