import React from 'react';
import withPageLayout from '../../components/page-container/withPageLayout';
import _ from 'lodash';
import { Container, Row, Col, Button, Form, Card } from 'react-bootstrap';
import api from './services/vi-api';
import moment from 'moment';
import BriefingLoader from './briefingLoader';
import FilesModal from '../../components/filesModal/filesModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderOpen, faPlus, faSave } from '@fortawesome/free-solid-svg-icons'

//TODO:
//Enhancement: checkbox 'only show titles' can expand single one from title to edit
//Enhancement: change color of save changes when dirty. would happen on deletes and briefing edits that haven't been saved
//Enhancement: highlight changes

class Voice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            briefings: [],
            showFilesModal: false,
            files: []
        };
    }
    componentDidMount() {
        api.getBriefings().then((res) => {
            this.setState({ loading: false, briefings: res });
        });
    }
    //#region files modal
    handleFilesModalSave = (newFiles) => {
        console.log('saving', newFiles);
        this.setState({ ...this.state, showFilesModal: false, files: newFiles })
    };
    handleCloseFilesModal = () => {
        this.setState({ ...this.state, showFilesModal: false })
    }
    handleOpenFilesModal = () => {
        this.setState({ ...this.state, showFilesModal: true })
    }
    //#endregion
    //#region change handlers for briefings
    handleChange = (e) => {
        let briefings = Object.assign({}, this.state).briefings;
        let matchingBriefing = _.find(briefings, (b) => {
            return b.uuid === e.target.id;
        });
        matchingBriefing[e.target.name] = e.target.value;
        this.setState({ ...this.state, briefings: briefings });
    }
    handleBriefingUpdateClicked = (e) => {
        api.updateBriefings(this.state.briefings, this.state.files).then((res) => {
            api.getBriefings().then((res) => {
                this.setState({ ...this.state, briefings: res });
            });
        });
    }
    handleBriefingDeleteClicked = (e) => {
        let briefings = Object.assign({}, this.state).briefings;
        _.remove(briefings, (b) => {
            return b.uuid === e.target.id;
        });
        this.setState({ ...this.state, briefings: briefings });
    }
    handleCreateNewBriefing = (e) => {
        let newBriefings = [
            {
                uuid: 'new',
                mainText: '',
                titleText: '',
                redirectionUrl: '',
                filename: '',
                publishDate: moment().format('YYYY-MM-DD')
            }
        ];

        const briefings = newBriefings.concat(this.state.briefings);
        this.setState({ ...this.state, briefings: briefings });
    }
    //#endregion
    renderSingleBriefing(briefing, i) {
        return (
            <Row key={i} style={{paddingBottom:'10px'}}>
                <Col md={12} xs={12}>
                    <Card >
                        <Card.Body>
                            <Form>
                                <FieldGroup
                                    id={briefing.uuid}
                                    name="titleText"
                                    type="text"
                                    label="Title"
                                    placeholder="Enter title to be displayed in Alexa App"
                                    value={briefing.titleText}
                                    onChange={this.handleChange}
                                />
                                <FieldGroup
                                    id={briefing.uuid}
                                    name="publishDate"
                                    type="date"
                                    label="Publish Date"
                                    value={briefing.publishDate}
                                    onChange={this.handleChange}
                                />
                                <Form.Group as={Row} controlId={briefing.uuid}>
                                    <Form.Label column sm={2}>
                                        Content
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control
                                            name="mainText"
                                            as="textarea"
                                            placeholder="Today's tip..."
                                            value={briefing.mainText}
                                            onChange={this.handleChange}
                                        />
                                    </Col>
                                </Form.Group>
                                <FieldGroup
                                    id={briefing.uuid}
                                    name="redirectionUrl"
                                    type="text"
                                    label="External Link"
                                    placeholder="Enter url to external site"
                                    value={briefing.redirectionUrl}
                                    onChange={this.handleChange}
                                />
                                <FieldGroup
                                    id={briefing.uuid}
                                    name="filename"
                                    type="text"
                                    label="Media Filename"
                                    placeholder="Enter the filename for this briefing"
                                    value={briefing.filename}
                                    onChange={this.handleChange}
                                />
                                <Button className="float-right" variant="light" id={briefing.uuid} onClick={this.handleBriefingDeleteClicked}>Delete</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        )
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col md={12} xs={12}>
                        <h3 className='hr-black'>Briefing Manager</h3>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} xs={12}>
                        Manage Your Briefings:<br />
                        <Button className="float-right" variant="primary" onClick={this.handleBriefingUpdateClicked}><FontAwesomeIcon icon={faSave} /> Publish</Button>
                        <Button className="float-right" variant="light" onClick={this.handleCreateNewBriefing}><FontAwesomeIcon icon={faPlus} /> New Briefing</Button>
                        <Button className="float-right" variant="light" onClick={this.handleOpenFilesModal}><FontAwesomeIcon icon={faFolderOpen} /> Files</Button>

                    </Col>
                </Row>
                <Row>
                    <Col>
                        {
                            this.state.loading ? <BriefingLoader /> : this.state.briefings.map((briefing, i) => {
                                return this.renderSingleBriefing(briefing, i);
                            })
                        }
                    </Col>
                </Row>
                <FilesModal
                    title='Briefings Media Files'
                    body='These files are associated with your briefings.'
                    show={this.state.showFilesModal}
                    handleClose={this.handleCloseFilesModal}
                    handleSave={this.handleFilesModalSave}
                    fileTypes={['audio/mp3', 'video/mp4']}
                    files={this.state.files}
                />
            </Container>
        )
    }
}

function FieldGroup({ id, label, ...props }) {
    return (
        <Form.Group as={Row} controlId={id}>
            <Form.Label column sm={2}>
                {label}
            </Form.Label>
            <Col sm={10}>
                <Form.Control {...props} />
            </Col>
        </Form.Group>
    );
}
export default withPageLayout(Voice);