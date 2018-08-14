import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../actions'
import uuid from 'uuid'

// import styles
import {
  UL,
  LI,
  HorizonalRule,
  Group,
  Options,
  Option
} from '../styles/FileSystemStyles'

// import icons
import Folder from '../icons/Folder'
import OpenFolder from '../icons/OpenFolder'
import File from '../icons/File'
import NewFile from '../icons/FileUpload'
import NewFolder from '../icons/NewFolder'

// import components
import FileOptions from './FileOptions'
import FolderOptions from './FolderOptions'
import InputField from './InputField'

const mapStateToProps = state => ({
  folder: state.dir,
  selected: state.selected,
  inputOption: state.inputOption,
  inputFields: state.inputFields
})

const mapDispachToProps = dispatch =>
  bindActionCreators(actionCreators, dispatch)

const RecurseFolder = ({
  inner = false,
  folder,
  toggleDir,
  selected,
  selectItem,
  addInputField,
  inputFields
}) => (
  <UL inner={inner}>
    {folder.map(
      (item, i) =>
        item.type === 'file' ? (
          <LI
            onClick={() => selectItem(item.id)}
            key={uuid()}
            selected={item.id === selected}
          >
            <Group primary>
              <File />
              {item.name}
              {item.id === selected && <FileOptions id={item.id} />}
            </Group>
            <Group>never | 0 mb</Group>
          </LI>
        ) : (
          <Fragment key={uuid()}>
            <LI
              onClick={() => selectItem(item.id)}
              selected={item.id === selected}
            >
              <Group primary>
                <Group
                  onClick={() => {
                    selectItem(item.id)
                    if (item.id === selected) {
                      toggleDir(item.id)
                    }
                  }}
                >
                  {item.open ? <OpenFolder /> : <Folder />}
                  {item.name}
                </Group>
                {item.id === selected && (
                  <Fragment>
                    <FolderOptions
                      open={item.open}
                      id={item.id}
                      toggleDir={toggleDir}
                    />

                    <Options>
                      <Option onClick={() => addInputField(item.id, 'newfile')}>
                        <NewFile />
                      </Option>
                      <Option
                        onClick={() => addInputField(item.id, 'newfolder')}
                      >
                        <NewFolder />
                      </Option>
                    </Options>
                  </Fragment>
                )}
              </Group>
              <Group>never | 0 mb</Group>
            </LI>

            <UL inner>
              <InputField
                id={item.id}
                addInputField={addInputField}
                inputFields={inputFields}
              />
            </UL>

            {item.open &&
              (item.contents.length > 0 ? (
                <RecurseFolder
                  inner={true}
                  folder={item.contents}
                  toggleDir={toggleDir}
                  selected={selected}
                  selectItem={selectItem}
                  addInputField={addInputField}
                  inputFields={inputFields}
                />
              ) : (
                <UL inner={inner}>
                  <LI inactive>Folder is empty</LI>
                </UL>
              ))}
          </Fragment>
        )
    )}
  </UL>
)

export default connect(
  mapStateToProps,
  mapDispachToProps
)(RecurseFolder)
