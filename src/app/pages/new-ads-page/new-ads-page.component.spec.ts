import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAdsPageComponent } from './new-ads-page.component';

describe('NewAdsPageComponent', () => {
  let component: NewAdsPageComponent;
  let fixture: ComponentFixture<NewAdsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewAdsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewAdsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
