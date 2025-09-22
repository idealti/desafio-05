import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirrTarefasComponent } from './excluirr-tarefas.component';

describe('ExcluirrTarefasComponent', () => {
  let component: ExcluirrTarefasComponent;
  let fixture: ComponentFixture<ExcluirrTarefasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExcluirrTarefasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcluirrTarefasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
