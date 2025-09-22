import { todoStatuses, type TodoItem } from "../api/todo"
import { randomDate, randomDueDate } from "./utils"
import { v4 as uuidv4 } from 'uuid';

const sampleTitles = [
  'Comprar leite', 'Estudar Vue', 'Escrever artigo', 'Exercício matinal',
  'Preparar jantar', 'Ler livro', 'Revisar código', 'Limpar casa',
  'Planejar viagem', 'Assistir aula', 'Tomar vitaminas', 'Organizar arquivos'
]

const sampleDescriptions = [
  'Ir ao mercado...', 'Revisar props e slots...', 'Sobre Vue 3',
  'Alongamento e corrida', 'Cozinhar algo rápido', 'Capítulo sobre TypeScript',
  'Checar PRs pendentes', 'Passar aspirador e organizar a sala',
  'Reservar hotéis e passagens', 'Assistir aula online', 'Tomar vitaminas diárias',
  'Limpar desktop e pastas'
]

export function createTodoItems(count: number): TodoItem[] {
  const todos: TodoItem[] = []

  for (let i = 0; i < count; i++) {
    const title = sampleTitles[Math.floor(Math.random() * sampleTitles.length)] ?? 'Comprar leite'
    const description = sampleDescriptions[Math.floor(Math.random() * sampleDescriptions.length)] ?? 'Ir ao mercado...'
    const status = todoStatuses[Math.floor(Math.random() * todoStatuses.length)] ?? 'todo'


    todos.push({
      id: uuidv4(),
      title,
      description,
      status,
      createdAt: randomDate(),
      dueDate: randomDueDate(),
    })
  }

  return todos
}