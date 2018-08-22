import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../actions'

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
import NewFile from '../icons/FileUpload'
import NewFolder from '../icons/NewFolder'

// import components
import RecurseFolder from './RecurseFolder'
import InputField from './InputField'

const mapStateToProps = state => ({
  inputFields: state.inputFields
})

const mapDispachToProps = dispatch =>
  bindActionCreators(actionCreators, dispatch)

class FileSystem extends Component {
  componentDidMount() {
    const { readItemsDB } = this.props
    readItemsDB()
  }

  render() {
    const { inputFields, addInputField } = this.props 

    return (
      <UL inner={false}>
        <LI header>
          <Group>Files and Folders</Group>

          <Group>
            <Options>
              <Option onClick={() => addInputField('base', 'newfile')}>
                <NewFile />
              </Option>
              <Option onClick={() => addInputField('base', 'newfolder')}>
                <NewFolder />
              </Option>
            </Options>
          </Group>

          <Group>Last modified | Size</Group>
        </LI>

        <InputField head id='base' addInputField={addInputField} inputFields={inputFields}/>

        <HorizonalRule />
        <RecurseFolder />
      </UL>
    )
  }
}

// const FileSystem = ({ inputFields, addInputField }) => (
//   <UL inner={false}>
//     <LI header>
//       <Group>Files and Folders</Group>

//       <Group>
//         <Options>
//           <Option onClick={() => addInputField('base', 'newfile')}>
//             <NewFile />
//           </Option>
//           <Option onClick={() => addInputField('base', 'newfolder')}>
//             <NewFolder />
//           </Option>
//         </Options>
//       </Group>

//       <Group>Last modified | Size</Group>
//     </LI>

//     <InputField head id='base' addInputField={addInputField} inputFields={inputFields}/>

//     <HorizonalRule />
//     <RecurseFolder />
//   </UL>
// )

export default connect(
  mapStateToProps,
  mapDispachToProps
)(FileSystem)
