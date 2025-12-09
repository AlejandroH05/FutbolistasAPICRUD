import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutbolistaSComponent } from './futbolistas.component';

describe('UsuariosComponent', () => {
  let component: FutbolistaSComponent;
  let fixture: ComponentFixture<FutbolistaSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FutbolistaSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FutbolistaSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
