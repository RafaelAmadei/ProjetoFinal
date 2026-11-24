import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExplorarLocais } from './explorar-locais';

describe('ExplorarLocais', () => {
  let component: ExplorarLocais;
  let fixture: ComponentFixture<ExplorarLocais>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExplorarLocais],
    }).compileComponents();

    fixture = TestBed.createComponent(ExplorarLocais);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
