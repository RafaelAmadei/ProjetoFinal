import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrarOcorrencia } from './registrar-ocorrencia';

describe('RegistrarOcorrencia', () => {
  let component: RegistrarOcorrencia;
  let fixture: ComponentFixture<RegistrarOcorrencia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrarOcorrencia],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrarOcorrencia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
