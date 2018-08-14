import uuid from 'uuid'

export const mockState = [
  {
    type: 'file',
    name: 'test',
    id: uuid()
  },
  {
    type: 'file',
    name: 'test2',
    id: uuid()
  },
  {
    type: 'file',
    name: 'test3',
    id: uuid()
  },
  {
    type: 'folder',
    name: 'test_folder',
    id: uuid(),
    open: false,
    contents: [
      {
        type: 'file',
        name: 'test',
        id: uuid()
      },
      {
        type: 'folder',
        name: 'nested_folder',
        id: uuid(),
        open: false,
        contents: []
      }
    ]
  },
  {
    type: 'folder',
    name: 'test_folder2',
    id: uuid(),
    open: false,
    contents: [
      {
        type: 'file',
        name: 'test',
        id: uuid()
      },
      {
        type: 'folder',
        name: 'nested_folder',
        id: uuid(),
        open: false,
        contents: [
          {
            type: 'file',
            name: 'test',
            id: uuid()
          },
          {
            type: 'folder',
            name: 'nested_folder',
            id: uuid(),
            open: false,
            contents: []
          }
        ]
      }
    ]
  }
]