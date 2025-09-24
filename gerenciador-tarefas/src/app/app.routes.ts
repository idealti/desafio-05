import { Routes } from '@angular/router';
import { TarefasComponent } from './componentes/tarefas/tarefas.component';
import { NovasTarefasComponent } from './componentes/novas-tarefas/novas-tarefas.component';
import { ListarTarefasComponent } from './componentes/listar-tarefas/listar-tarefas.component';

export const routes: Routes = [
    {
    path: '',
    redirectTo: 'tarefas',
    pathMatch: 'full'
  },
  {
    path: 'tarefas',
    component: TarefasComponent
  },
  {
    path: 'novas-tarefas',
    component: NovasTarefasComponent
  },

  {
    path: 'listar-tarefas',
    component: ListarTarefasComponent
  },
];
