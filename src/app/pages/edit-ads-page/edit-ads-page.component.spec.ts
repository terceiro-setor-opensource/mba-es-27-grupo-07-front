import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAdsPageComponent } from './edit-ads-page.component';

describe('EditAdsPageComponent', () => {
  let component: EditAdsPageComponent;
  let fixture: ComponentFixture<EditAdsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditAdsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAdsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
