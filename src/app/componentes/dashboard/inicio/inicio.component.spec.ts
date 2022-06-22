import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioComponent } from './inicio.component';

describe('InicioComponent', () => {
  let component: InicioComponent;
  let fixture: ComponentFixture<InicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Commponente existente',() => {
     const fixture = TestBed.createComponent(InicioComponent);
     const app = fixture.componentInstance;
     expect(app).toBeTruthy();  
  }); // Revisar si el componente existe

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
