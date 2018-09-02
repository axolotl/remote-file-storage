import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../actions'

// import styles
import { UL, LI, Group, Options, Option } from '../styles/FileSystemStyles'

// import icons
import Folder from '../icons/Folder'
import OpenFolder from '../icons/OpenFolder'
import File from '../icons/File'
import NewFile from '../icons/FileUpload'
import NewFolder from '../icons/NewFolder'

// import components
import InputField from './InputField'
import ItemOptions from './ItemOptions'

const mapStateToProps = state => ({
  directory: state.local,
  selected: state.selected,
  inputOption: state.inputOption,
  inputFields: state.inputFields,
  openFolders: state.openFolders
})

const mapDispachToProps = dispatch =>
  bindActionCreators(actionCreators, dispatch)

const FileSystemContents = ({
  inner = false,
  subFolderID = false,
  directory,
  toggleFolder,
  selected,
  selectItem,
  addInputField,
  inputFields,
  openFolders
}) => (
  <UL inner={inner}>
    {((!subFolderID && directory.base) || directory[subFolderID]) && (
      <Fragment>
        {(!subFolderID ? directory.base : directory[subFolderID]).map(
          (item, i) =>
            item.type === 'file' ? (
              <LI
                onClick={() => selectItem(item.id)}
                key={item.id}
                selected={item.id === selected}
              >
                <Group primary>
                  <File
                    onClick={() =>
                      item.id !== selected ? toggleFolder(item.id) : null
                    }
                  />
                  {item.name}
                  {item.id === selected && (
                    <ItemOptions id={item.id} groupType="file" />
                  )}
                </Group>
                <Group>never | 0 mb</Group>
              </LI>
            ) : (
              <Fragment key={item.id}>
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
                      {openFolders.includes(item.id) ? (
                        <OpenFolder
                          onClick={() =>
                            item.id !== selected ? toggleFolder(item.id) : null
                          }
                        />
                      ) : (
                        <Folder
                          onClick={() =>
                            item.id !== selected ? toggleFolder(item.id) : null
                          }
                        />
                      )}
                      {item.name}
                    </Group>
                    {item.id === selected && (
                      <Fragment>
                        <ItemOptions
                          id={item.id}
                          belongsTo={item.belongsTo}
                          open={openFolders.includes(item.id)}
                          groupType="file"
                        />

                        <Options>
                          <Option
                            onClick={() => addInputField(item.id, 'newfile')}
                          >
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
                  (directory[item.id] && directory[item.id].length > 0 ? (
                    <FileSystemContents
                      inner={true}
                      directory={directory}
                      toggleFolder={toggleFolder}
                      selected={selected}
                      selectItem={selectItem}
                      addInputField={addInputField}
                      inputFields={inputFields}
                      openFolders={openFolders}
                      subFolderID={item.id}
                    />
                  ) : (
                    <UL inner={true}>
                      <LI inactive>Folder is empty</LI>
                    </UL>
                  ))}
              </Fragment>
            )
        )}
      </Fragment>
    )}
  </UL>
)

export default connect(
  mapStateToProps,
  mapDispachToProps
)(FileSystemContents)
