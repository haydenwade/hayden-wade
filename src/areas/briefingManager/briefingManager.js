import React from 'react';
import _ from 'lodash';
import { Grid, Row, Col, Button, FormGroup, ControlLabel, FormControl, HelpBlock, Form, Panel, Glyphicon } from 'react-bootstrap';
import api from './services/vi-api';
import moment from 'moment';
import BriefingLoader from './briefingLoader';
import FilesModal from '../../shared/filesModal/filesModal';

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
            files:[]
        };
    }
    componentDidMount() {
        api.getBriefings().then((res) => {
            this.setState({ loading: false, briefings: res });
        });
    }
    //#region files modal
    handleFilesModalSave = (newFiles) => {
        console.log('saving',newFiles);
        this.setState({...this.state, showFilesModal:false, files:newFiles})
    };
    handleCloseFilesModal = () => {
        this.setState({...this.state, showFilesModal:false})
    }
    handleOpenFilesModal = () => {
        this.setState({...this.state, showFilesModal:true})
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
            api.getBriefings().then((res)=>{
                this.setState({ ...this.state, briefings: res });
            });
        });
    }
    handleBriefingDeleteClicked = (e) => {
        let briefings = Object.assign({},this.state).briefings;
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
                filename:'',
                publishDate: moment().format('YYYY-MM-DD')
            }
        ];

        const briefings = newBriefings.concat(this.state.briefings);
        this.setState({ ...this.state, briefings: briefings });
    }
    //#endregion
    renderSingleBriefing(briefing, i) {
        return (
            <Row key={i}>
                <Col md={12} xs={12}>
                    <Panel>
                        <Panel.Body>
                            <Form horizontal>
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
                                <FormGroup controlId={briefing.uuid}>
                                    <Col componentClass={ControlLabel} sm={2}>
                                        Content
                                    </Col>
                                    <Col sm={10}>
                                        <FormControl
                                            name="mainText"
                                            componentClass="textarea"
                                            placeholder="Today's tip..."
                                            value={briefing.mainText}
                                            onChange={this.handleChange}
                                        />
                                    </Col>
                                </FormGroup>
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
                                <Button className="pull-right" id={briefing.uuid} onClick={this.handleBriefingDeleteClicked}>Delete</Button>
                            </Form>
                        </Panel.Body>
                    </Panel>
                </Col>
            </Row>
        )
    }
    render() {
        return (
            <Grid>
                <Row>
                    <Col md={12} xs={12}>
                        <h3 className='hr-black'>Briefing Manager</h3>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} xs={12}>
                        Manage Your Briefings:<br/>
                        <Button className="pull-right btn-primary" onClick={this.handleBriefingUpdateClicked}><Glyphicon glyph="floppy-disk" /> Publish</Button>
                        <Button className="pull-right btn-default" onClick={this.handleCreateNewBriefing}><Glyphicon glyph="plus" /> New Briefing</Button>
                        <Button className="pull-right btn-default" onClick={this.handleOpenFilesModal}><Glyphicon glyph="folder-open" /> Files</Button>
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
                    fileTypes={['audio/mp3','video/mp4']}
                    files={this.state.files}
                />
            </Grid>
        )
    }
}

function FieldGroup({ id, label, help, ...props }) {
    return (
        <FormGroup controlId={id}>
            <Col componentClass={ControlLabel} sm={2}>
                {label}
            </Col>
            <Col sm={10}>
                <FormControl {...props} />
                {help && <HelpBlock>{help}</HelpBlock>}
            </Col>
        </FormGroup>
    );
}
export default Voice;