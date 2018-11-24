import React, { Component } from 'react'
import styled from 'styled-components'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'first task' },
    'task-2': { id: 'task-2', content: 'second task' },
    'task-3': { id: 'task-3', content: 'third task' }
  },
  columns: {
    'column-1': {
      id: 'column-1',
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
  border-radius: 2px;
  background-color: white;
`

class Task extends Component {
  render() {
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {provided => (
          <TaskContainer
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            innerRef={provided.innerRef}
          >
            {this.props.task.content}
          </TaskContainer>
        )}
      </Draggable>
    )
  }
}

class Beautiful extends Component {
  state = initialData

  onDragEnd = result => {
    const { destination, source, draggableId } = result

    if (!destination) {
      return
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    const column = this.state.columns[source.droppableId]
    const newTaskIds = Array.from(column.tasks)
    newTaskIds.splice(source.index, 1)
    newTaskIds.splice(destination.index, 0, draggableId)

    const newColumn = {
      ...column,
      tasks: newTaskIds
    }

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newColumn.id]: newColumn
      }
    }

    this.setState(newState)
  }

  render() {
    const { columns, columnOrder } = this.state
    const { onDragEnd } = this

    return (
      <DragDropContext onDragEnd={onDragEnd}>
        {columnOrder.map((columnId, i) => {
          const column = columns[columnId]
          const tasks = column.tasks.map(id => this.state.tasks[id])

          return (
            <Container key={i}>
              <Title>{column.title}</Title>
              <Droppable droppableId={column.id}>
                {provided => (
                  <TaskList
                    innerRef={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    {tasks.map((task, index) => (
                      <Task task={task} index={index} key={task.id} />
                    ))}
                    {provided.placeholder}
                  </TaskList>
                )}
              </Droppable>
            </Container>
          )
        })}
      </DragDropContext>
    )
  }
}

export default Beautiful
