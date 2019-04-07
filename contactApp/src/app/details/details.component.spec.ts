import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsComponent } from './details.component';

//Grouping related tests within describe blocks and describing each individual test within an it call keeps your tests self documenting.
describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({ //The TestBed.configureTestingModule() method takes a metadata object that can have most of the properties of an @NgModule.
      declarations: [ DetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent); //The TestBed.createComponent<T> creates an instance of the component T and returns a strongly typed ComponentFixture for that component.
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
