import React from 'react';
import withPageLayout from '../../components/page-container/withPageLayout';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import QRCode from "react-qr-code";

//Example preloaded url to test with: 
//http://localhost:3000/qr?firstName=Hayden&lastName=Wade&phoneNumber=920-360-9269&email=htwade51@gmail.com&url=www.haydenwade.com
class QrContact extends React.Component {
    state = {
        isFirstLoadWithBookmarkUrl: false,
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        title: "",
        url: "",
        qrValue: "BEGIN:VCARD\n\rVERSION:3.0\n\rFN:Jane Smith\n\rEMAIL;TYPE=HOME,INTERNET:jane@abc.com\n\rTEL;type=HOME;type=pref:+1 (980) 333-7777\n\rURL:www.cakes.com\n\rTITLE:CEO, Cakes LLC\n\rEND:VCARD"
    }
    componentDidMount() {
        const queryAsObj = Object.fromEntries(new URLSearchParams(window.location.search));
        if(Object.keys(queryAsObj).length > 0){
            this.setState({...queryAsObj,isFirstLoadWithBookmarkUrl:true}, this.generateVCard);
        }
    }
    handleChange = (e) => {
        const newState = {
            ...this.state
        };
        newState[e.target.attributes.name.value] = e.target.value;
        this.setState(newState);
    }
    generateVCard = () => {
        let vcard = `BEGIN:VCARD VERSION:3.0\n\r`;
        if (this.state.firstName !== "") {
            vcard += `FN:${this.state.firstName} ${this.state.lastName}\n\r`
        }
        if (this.state.email) {
            vcard += `EMAIL;TYPE=HOME,INTERNET:${this.state.email}\n\r`
        }
        if (this.state.url) {
            vcard += `URL;TYPE=HOME:${this.state.url}\n\r`
        }
        if (this.state.phoneNumber) {
            vcard += `TEL;type=MOBILE;type=pref:+1 ${this.state.phoneNumber}\n\r`;
        }
        if (this.state.title) {
            vcard += `TITLE:${this.state.title}\n\r`
        }

        vcard += `END:VCARD`;

        this.setState({ qrValue: vcard });
        this.setState({isFirstLoadWithBookmarkUrl:false});
        if(!this.state.isFirstLoadWithBookmarkUrl){
            const temp = Object.assign({},this.state);
            delete temp.qrValue;
            delete temp.isFirstLoadWithBookmarkUrl;
            window.location.search='?' + Object.keys(temp).map(key=>key + '=' + temp[key]).filter(x=>x[x.length - 1] !== '=').join('&');
        }
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col md={12} xs={12}>
                        <h1 className='hr-black'>Share Your Contact Information via QR Code</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} xs={12} className='qr-contact-code'>
                        <QRCode value={this.state.qrValue} />
                    </Col>
                    <Col md={6} xs={12}>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>First name</Form.Label>
                                <Form.Control type="text" autocomplete="given-name" placeholder="Jane" onChange={this.handleChange} value={this.state.firstName} name="firstName" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control type="text" autocomplete="family-name" placeholder="Smith" onChange={this.handleChange} value={this.state.lastName} name="lastName" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" autocomplete="email" placeholder="jane@abc.com" onChange={this.handleChange} value={this.state.email} name="email" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Phone number</Form.Label>
                                <Form.Control type="tel" autocomplete="tel" placeholder="980-333-7777" onChange={this.handleChange} value={this.state.phoneNumber} name="phoneNumber" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Website</Form.Label>
                                <Form.Control type="url" autocomplete="url" placeholder="www.cakes.com" onChange={this.handleChange} value={this.state.url} name="url" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Title/Company</Form.Label>
                                <Form.Control type="text" autocomplete="organization-title" placeholder="CEO, Cake LLC" onChange={this.handleChange} value={this.state.title} name="title" />
                            </Form.Group>
                            <Button variant="primary" onClick={this.generateVCard}>
                                Generate
                            </Button>
                        </Form>
                        <p>After generating your QR code you can bookmark it for later so it is ready when you need it (no need to retype everything in again). Or simply screenshot this page.</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default withPageLayout(QrContact);