import { Component } from '@angular/core';
import { Task } from '../../task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  
  tasks: Task[] = [
    {
      id: 1,
      title: 'Desenvolver página de login',
      description: 'Criar a tela de login com validação de usuário e senha',
      responsible: 'João',
      priority: 'HIGH',
      deadline: '2023-10-15'
    },
    {
      id: 2,
      title: 'Implementar sistema de cache',
      description: 'Adicionar cache para melhorar a performance da aplicação',
      responsible: 'Ana',
      priority: 'MEDIUM',
      deadline: '2023-10-20'
    },
    {
      id: 3,
      title: 'Testar integração com API externa',
      description: 'Testar a comunicação com a API de pagamentos',
      responsible: 'Carlos',
      priority: 'LOW',
      deadline: '2023-11-01'
    }
  ];

  
  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}
