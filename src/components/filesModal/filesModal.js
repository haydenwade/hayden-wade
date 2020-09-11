import React from 'react';
import Dropzone from 'react-dropzone'
import _ from 'lodash';
import { Modal, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm, faTimes } from '@fortawesome/free-solid-svg-icons'

class FilesModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = { files: this.props.files }
    this.onRemoveFile = this.onRemoveFile.bind(this);
  }
  onDrop(newFiles) {
    const files = newFiles.concat(this.state.files);
    this.setState({ ...this.state, files: files });
  }
  onRemoveFile(filename) {
    let files = _.cloneDeep(this.state.files);
    _.remove(files, (f) => {
      return f.name === filename;
    });
    this.setState({ ...this.state, files: files });
  }
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            {this.props.body}
          </p>
          <Dropzone onDrop={this.onDrop.bind(this)} accept={this.props.fileTypes}>
            {({ getRootProps, getInputProps }) => (
              <section>
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <p>Drag 'n' drop some files here, or click to select files</p>
                </div>
              </section>
            )}
          </Dropzone>
          <h3>Files:</h3>
          <ListGroup>
            {
              this.state.files.map(f => <ListGroupItem key={f.name}><FontAwesomeIcon icon={faFilm} /> {f.name} - {f.size} bytes <FontAwesomeIcon icon={faTimes} className="float-right" onClick={() => { this.onRemoveFile(f.name) }} /></ListGroupItem>)
            }
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => { this.props.handleSave(this.state.files) }}>Save</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
export default FilesModal;