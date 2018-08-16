/*
what did I say i wanted to do with regard to the tables?
because I think that's gonna come in very handy right here ...

two tables: files and folders ... ?
okay that's a little extreme for right now
what can we do instead?
flatten my existind data structure.
make an array of arrays, no more nesting
first array is folders, all folders
second (and only) nested array is contents for each folder
*/

module.exports = {
  base: [
    {
      type: 'file',
      name: 'testfile',
      id: 1
    },
    {
      type: 'file',
      name: 'testfile2',
      id: 2
    },
    {
      type: 'folder',
      name: 'testfolder',
      id: 3
    },
    {
      type: 'folder',
      name: 'testfolder2',
      id: 4
    }
  ],
  testfolder: [
    {
      type: 'file',
      name: 'testfile',
      id: 5
    }
  ],
  testfolder2: [
    {
      type: 'file',
      name: 'testfile',
      id: 6
    },
    {
      type: 'folder',
      name: 'testfolder3',
      id: 7
    }
  ],
  testfolder3: [
    {
      type: 'folder',
      name: 'testfolder4',
      id: 8
    }
  ],
  testfolder4: [
    {
      type: 'file',
      name: 'deepest test file',
      id: 9
    }
  ]
}
