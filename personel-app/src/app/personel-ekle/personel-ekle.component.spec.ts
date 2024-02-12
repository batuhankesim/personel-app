import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonelEkleComponent } from './personel-ekle.component';

describe('PersonelEkleComponent', () => {
  let component: PersonelEkleComponent;
  let fixture: ComponentFixture<PersonelEkleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonelEkleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonelEkleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
