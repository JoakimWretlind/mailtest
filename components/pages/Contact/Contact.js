import React from 'react';
import emailjs from 'emailjs-com';
import { Section, InsideContainer, MainHeader } from "../sharedStyling"
import {
    LeftSide,
    ContactP,
    CheckP,
    Input,
    Checkbox,
    Form,
    RightSide,
    TextArea,
    SendButton
} from "./Contact.styling";
import { REACT_APP_API } from '../../../apikey';
import { REACT_APP_TEMPLATE } from '../../../apikey';
import { REACT_APP_SERVICEID } from '../../../apikey';

const Contact = React.forwardRef((props, contactRef) => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(REACT_APP_SERVICEID, REACT_APP_TEMPLATE, e.target, REACT_APP_API)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    return (
        <>
            <Section id="contact">
                <InsideContainer ref={contactRef}>
                    <Form onSubmit={sendEmail}>
                        <LeftSide>
                            <MainHeader className="contactHeader">Contact</MainHeader>
                            <ContactP>Name</ContactP>
                            <Input type="text" name="from_name" />
                            <ContactP>Email</ContactP>
                            <Input type="email" name="email" />
                            <ContactP>Verification</ContactP>
                            <Checkbox>
                                <input type="checkbox" />
                                <CheckP>I am friendly</CheckP>
                            </Checkbox>
                        </LeftSide>
                        <RightSide>
                            <ContactP>message</ContactP>
                            <TextArea name="message" ></TextArea>
                            <SendButton type="submit" >Send Message</SendButton>
                        </RightSide>
                    </Form>
                </InsideContainer>
            </Section>
        </>
    )
})

export default Contact