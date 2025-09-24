import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../../filter.pipe';



@Component({
  selector: 'app-listar-tarefas',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    FilterPipe
  ],
  templateUrl: './listar-tarefas.component.html',
  styleUrl: './listar-tarefas.component.css'
})
export class ListarTarefasComponent implements OnInit {

  searchTerm: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  itens = [
  { titulo: 'Concluido' },
  { titulo: 'Todas' },
  { titulo: 'Pendentes' }
  
];

}

  
