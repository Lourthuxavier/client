import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathtypeComponent } from './mathtype.component';

describe('MathtypeComponent', () => {
  let component: MathtypeComponent;
  let fixture: ComponentFixture<MathtypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MathtypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MathtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
