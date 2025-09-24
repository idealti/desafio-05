import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-novas-tarefas',
  standalone: true,
  imports: [
    
    CommonModule,
    FormsModule,
    RouterModule
    
  ],
  templateUrl: './novas-tarefas.component.html',
  styleUrl: './novas-tarefas.component.css'
})
  export class NovasTarefasComponent {
  titulo!: string;
  descricao!: string;
  data!: string;
  Status!: boolean;

  NovasTarefas() {
    
  }

}

