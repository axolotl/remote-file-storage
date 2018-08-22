import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../actions'
import uuid from 'uuid'

// import styles
import {
  UL,
  LI,
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
import InputField from './InputField'
import OptionsGroup from './OptionsGroup'

const mapStateToProps = state => ({
  folder: state.dir,
  selected: state.selected,
  inputOption: state.inputOption,
  inputFields: state.inputFields,
  openFolders: state.openFolders
})

const mapDispachToProps = dispatch =>
  bindActionCreators(actionCreators, dispatch)

const RecurseFolder = ({
  inner = false,
  folder,
  toggleFolder,
  selected,
  selectItem,
  addInputField,
  inputFields,
  openFolders
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
              {item.id === selected && (
                <OptionsGroup id={item.id} groupType="file" />
              )}
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
                      toggleFolder(item.id)
                    }
                  }}
                >
                  {openFolders.includes(item.id) ? <OpenFolder /> : <Folder />}
                  {item.name}
                </Group>
                {item.id === selected && (
                  <Fragment>
                    <OptionsGroup
                      id={item.id}
                      open={openFolders.includes(item.id)}
                      groupType="file"
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

            {openFolders.includes(item.id) &&
              (item.contents.length > 0 ? (
                <RecurseFolder
                  inner={true}
                  folder={item.contents}
                  toggleFolder={toggleFolder}
                  selected={selected}
                  selectItem={selectItem}
                  addInputField={addInputField}
                  inputFields={inputFields}
                  openFolders={openFolders}
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
