import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondGenComponent } from './second-gen.component';

describe('SecondGenComponent', () => {
  let component: SecondGenComponent;
  let fixture: ComponentFixture<SecondGenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondGenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
