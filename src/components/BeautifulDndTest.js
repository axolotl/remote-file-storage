import React, { Component } from 'react'

const initialData = {
  tasks: {
    'task-1': { id: 1, content: 'first task' },
    'task-2': { id: 2, content: 'second task' },
    'task-3': { id: 3, content: 'third task' }
  },
  columns: {
    'column-1': {
      id: 1,
      title: 'To do',
      tasks: ['task-1', 'task-2', 'task-3']
    }
  },
  columnOrder: ['column-1']
}

class Beautiful extends Component {
  state = initialData

  render() {
    const { columns, columnOrder } = this.state

    return columnOrder.map(columnId => {
      const column = columns[columnId]
      const tasks = column.tasks.map(id => this.state.tasks[id])

      return column.title
    })
  }
}

export default Beautiful
