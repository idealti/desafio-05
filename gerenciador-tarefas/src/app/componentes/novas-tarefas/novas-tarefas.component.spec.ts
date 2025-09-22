import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovasTarefasComponent } from './novas-tarefas.component';

describe('NovasTarefasComponent', () => {
  let component: NovasTarefasComponent;
  let fixture: ComponentFixture<NovasTarefasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovasTarefasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovasTarefasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
