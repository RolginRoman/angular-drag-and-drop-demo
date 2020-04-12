import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTestInjectorComponent } from './app-test-injector.component';

describe('AppTestInjectorComponent', () => {
  let component: AppTestInjectorComponent;
  let fixture: ComponentFixture<AppTestInjectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTestInjectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTestInjectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
