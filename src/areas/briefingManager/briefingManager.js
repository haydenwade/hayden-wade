import React from 'react';
import _ from 'lodash';
import { Grid, Row, Col, Button, FormGroup, ControlLabel, FormControl, HelpBlock, Form, Panel, Glyphicon } from 'react-bootstrap';
import api from './services/vi-api';
import moment from 'moment';
import BriefingLoader from './briefingLoader';

//TODO:
//Enhancement: checkbox 'only show titles' can expand single one from title to edit
//Enhancement: change color of save changes when dirty. would happen on deletes and briefing edits that haven't been saved
//Enhancement: highlight changes

class Voice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            briefings: []
        };

        this.handleBriefingTitleChanged = this.handleBriefingTitleChanged.bind(this);
        this.handleBriefingPublishDateChanged = this.handleBriefingPublishDateChanged.bind(this);
        this.handleBriefingContentChanged = this.handleBriefingContentChanged.bind(this);
        this.handleBriefingExternalLinkChanged = this.handleBriefingExternalLinkChanged.bind(this);
        this.handleBriefingUpdateClicked = this.handleBriefingUpdateClicked.bind(this);
        this.handleBriefingDeleteClicked = this.handleBriefingDeleteClicked.bind(this);
        this.handleCreateNewBriefing = this.handleCreateNewBriefing.bind(this);
    }
    componentDidMount() {
        api.getBriefings().then((res) => {
            this.setState({ loading: false, briefings: res });
        });
    }
    //#region change handlers for briefings
    handleBriefingTitleChanged(e) {
        let briefings = _.cloneDeep(this.state.briefings);
        let matchingBriefing = _.find(briefings, (b) => {
            return b.uuid === e.target.id;
        });
        matchingBriefing.titleText = e.target.value;
        this.setState({ ...this.state, briefings: briefings });
    }
    handleBriefingPublishDateChanged(e) {
        let briefings = _.cloneDeep(this.state.briefings);
        let matchingBriefing = _.find(briefings, (b) => {
            return b.uuid === e.target.id;
        });
        matchingBriefing.publishDate = e.target.value;
        this.setState({ ...this.state, briefings: briefings });
    }
    handleBriefingContentChanged(e) {
        let briefings = _.cloneDeep(this.state.briefings);
        let matchingBriefing = _.find(briefings, (b) => {
            return b.uuid === e.target.id;
        });
        matchingBriefing.mainText = e.target.value;
        this.setState({ ...this.state, briefings: briefings });
    }
    handleBriefingExternalLinkChanged(e) {
        let briefings = _.cloneDeep(this.state.briefings);
        let matchingBriefing = _.find(briefings, (b) => {
            return b.uuid === e.target.id;
        });
        matchingBriefing.redirectionUrl = e.target.value;
        this.setState({ ...this.state, briefings: briefings });
    }
    handleBriefingUpdateClicked(e) {
        api.updateBriefings(this.state.briefings).then((res) => {
            api.getBriefings().then((res)=>{
                this.setState({ ...this.state, briefings: res });
            });
        });
    }
    handleBriefingDeleteClicked(e) {
        let briefings = _.cloneDeep(this.state.briefings);
        _.remove(briefings, (b) => {
            return b.uuid === e.target.id;
        });
        this.setState({ ...this.state, briefings: briefings });
    }
    handleCreateNewBriefing(e) {
        let newBriefings = [
            {
                uuid: 'new',
                mainText: '',
                titleText: '',
                redirectionUrl: '',
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
                                    type="text"
                                    label="Title"
                                    placeholder="Enter title to be displayed in Alexa App"
                                    value={briefing.titleText}
                                    onChange={this.handleBriefingTitleChanged}
                                />
                                <FieldGroup
                                    id={briefing.uuid}
                                    type="date"
                                    label="Publish Date"
                                    value={briefing.publishDate}
                                    onChange={this.handleBriefingPublishDateChanged}
                                />
                                <FormGroup controlId={briefing.uuid}>
                                    <Col componentClass={ControlLabel} sm={2}>
                                        Content
                                    </Col>
                                    <Col sm={10}>
                                        <FormControl
                                            componentClass="textarea"
                                            placeholder="Today's tip..."
                                            value={briefing.mainText}
                                            onChange={this.handleBriefingContentChanged}
                                        />
                                    </Col>
                                </FormGroup>
                                <FieldGroup
                                    id={briefing.uuid}
                                    type="text"
                                    label="External Link"
                                    placeholder="Enter url to external site"
                                    value={briefing.redirectionUrl}
                                    onChange={this.handleBriefingExternalLinkChanged}
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
            <Grid className='page-content'>
                <Row>
                    <Col md={12} xs={12}>
                        <h3 className='hr-black'>Briefing Manager</h3>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} xs={12}>
                        Manage Your Briefings:
                        <Button className="pull-right btn-primary" onClick={this.handleBriefingUpdateClicked}><Glyphicon glyph="floppy-disk" /> Save Changes</Button>
                        <Button className="pull-right btn-default" onClick={this.handleCreateNewBriefing}>
                            <Glyphicon glyph="plus" /> New Briefing
                        </Button>
                        {
                            this.state.loading ? <BriefingLoader /> : this.state.briefings.map((briefing, i) => {
                                return this.renderSingleBriefing(briefing, i);
                            })
                        }
                    </Col>
                </Row>
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