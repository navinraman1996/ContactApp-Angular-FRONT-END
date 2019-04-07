import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({ //The TestBed.configureTestingModule() method takes a metadata object that can have most of the properties of an @NgModule.
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent); //The TestBed.createComponent<T> creates an instance of the component T and returns a strongly typed ComponentFixture for that component.
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'contactApp'`, () => {
    const fixture = TestBed.createComponent(AppComponent); //The TestBed.createComponent<T> creates an instance of the component T and returns a strongly typed ComponentFixture for that component.
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('contactApp');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent); //The TestBed.createComponent<T> creates an instance of the component T and returns a strongly typed ComponentFixture for that component.
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to contactApp!');
  });
});
