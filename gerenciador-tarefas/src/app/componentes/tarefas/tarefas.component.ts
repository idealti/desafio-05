import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
 


@Component({
  selector: 'app-tarefas',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
   
  ],
  templateUrl: './tarefas.component.html',
  styleUrl: './tarefas.component.css'
})
export class TarefasComponent {

}
