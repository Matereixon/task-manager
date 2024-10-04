export interface Task {
    id?: number;
    title: string;
    description: string;
    responsible: string;
    priority: 'HIGH' | 'MEDIUM' | 'LOW';
    deadline: string;
  }

  