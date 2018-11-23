import React, { Component } from 'react'
import styled from 'styled-components'

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

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
`

const Title = styled.div`
  padding: 8px;
`

const TaskList = styled.div`
  padding: 8px;
`

const TaskContainer = styled.div`
  border: 1px solid lightgrey;
  padding: 8px;
  margin-bottom: 8px;
`

class Task extends Component {
  render() {
    return <TaskContainer>{this.props.task.content}</TaskContainer>
  }
}

class Beautiful extends Component {
  state = initialData

  render() {
    const { columns, columnOrder } = this.state

    return columnOrder.map(columnId => {
      const column = columns[columnId]
      const tasks = column.tasks.map(id => this.state.tasks[id])

      return (
        <Container>
          <Title>{column.title}</Title>
          <TaskList>{tasks.map(task => <Task task={task} />)}</TaskList>
        </Container>
      )
    })
  }
}

export default Beautiful
