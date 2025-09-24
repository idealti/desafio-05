import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-listar-tarefas',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
   
  ],
  templateUrl: './listar-tarefas.component.html',
  styleUrl: './listar-tarefas.component.css'
})

  export class ListarTarefasComponent implements OnInit {
  
    mainOptions = [
    { id: 1, name: 'Todos' },
    { id: 2, name: 'pendente' },
    { id: 3, name: 'Concluído' }
  ];

  selectedCategory: string = '';

  tarefas = [
    { titulo: 'Estudar Vue.js', status: 'pendente' },
    { titulo: 'Enviar desafio técnico', status: 'Concluído' },
    { titulo: 'Ler ', status: 'pendente' },
  ];

  tarefasFiltradas = [...this.tarefas];

  ngOnInit() {
    this.filtrarTarefas();
  }

  onCategoryChange(status: string) {
    this.selectedCategory = status;
    this.filtrarTarefas();
  }

  filtrarTarefas() {
    if (this.selectedCategory === 'Todos') {
      this.tarefasFiltradas = [...this.tarefas];
    } else {
      this.tarefasFiltradas = this.tarefas.filter(t =>
        t.status.toLowerCase() === this.selectedCategory.toLowerCase()
      );
    }
  }
}