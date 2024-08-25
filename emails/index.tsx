import {
    Body,
    Button,
    Container,
    Column,
    Head,
    Heading,
    Html,
    Img,
    Preview,
    Row,
    Section,
    Text,
} from "@react-email/components";
import * as React from "react";

interface EmailProps {
    userFirstName?: string;
    businessName?: string;
    date: string;
    durtaion: number;
    meetingTime: string;
    meetingURL: string;
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
    ? `https://${process.env.NEXT_PUBLIC_BASE_URL}`
    : "";

export const Email = ({
    userFirstName,
    businessName,
    date,
    durtaion,
    meetingTime,
    meetingURL
}: EmailProps) => {
    return (
        <Html>
            <Head />
            <Preview>Meetingo Update</Preview>
            <Body style={main}>
                <Container>
                    <Section style={logo}>
                        <Img src={`${baseUrl}/static/yelp-logo.png`} />
                    </Section>

                    <Section style={content}>
                        <Row>
                            <Img
                                style={image}
                                width={620}
                                src={`${baseUrl}/static/yelp-header.png`}
                            />
                        </Row>

                        <Row style={{ ...boxInfos, paddingBottom: "0" }}>
                            <Column>
                                <Heading
                                    style={{
                                        fontSize: 32,
                                        fontWeight: "bold",
                                        textAlign: "center",
                                    }}
                                >
                                    Hi {userFirstName},
                                </Heading>
                                <Heading
                                    as="h2"
                                    style={{
                                        fontSize: 26,
                                        fontWeight: "bold",
                                        textAlign: "center",
                                    }}
                                >
                                    Your meeting has been scheduled with {businessName}!
                                </Heading>

                                <Text style={paragraph}>
                                    <b>Date: </b>
                                    {date}
                                </Text>

                                <Text style={{ ...paragraph, marginTop: -5 }}>
                                    <b>Time: </b>
                                    {meetingTime}
                                </Text>

                                <Text style={{ ...paragraph, marginTop: -5 }}>
                                    <b>Duration: </b>
                                    {durtaion} Min
                                </Text>

                                <Text style={{ ...paragraph, marginTop: -5 }}>
                                    <b>Meeting Link: </b>
                                    {meetingURL}
                                </Text>

                                <Text style={paragraph}>
                                    If this was you, there's nothing else you need to do.
                                </Text>
                                <Text style={{ ...paragraph, marginTop: -5 }}>
                                    If this wasn't you or if you have additional questions, please
                                    see our support page.
                                </Text>
                            </Column>
                        </Row>
                        <Row style={{ ...boxInfos, paddingTop: "0" }}>
                            <Column style={containerButton} colSpan={2}>
                                <Button style={button}>Click to Join Meeting!</Button>
                            </Column>
                        </Row>
                    </Section>

                    <Text
                        style={{
                            textAlign: "center",
                            fontSize: 12,
                            color: "rgb(0,0,0, 0.7)",
                        }}
                    >
                        © 2024 | Meetingo | meetingo.io
                    </Text>
                </Container>
            </Body>
        </Html>
    );
};

Email.PreviewProps = {
    userFirstName: "Alan",
    date: '2 May, 2024',
    businessName: 'WebTech',
    meetingTime: '07:00 AM',
    meetingURL: 'https://meet.google.com/abjdg7',
    durtaion: 10

} as EmailProps;

export default Email;

const main = {
    backgroundColor: "#fff",
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
    fontSize: 16,
};

const logo = {
    padding: "30px 20px",
};

const containerButton = {
    display: "flex",
    justifyContent: "center",
    width: "100%",
};

const button = {
    backgroundColor: "#e00707",
    borderRadius: 3,
    color: "#FFF",
    fontWeight: "bold",
    border: "1px solid rgb(0,0,0, 0.1)",
    cursor: "pointer",
    padding: "12px 30px",
};

const content = {
    border: "1px solid rgb(0,0,0, 0.1)",
    borderRadius: "3px",
    overflow: "hidden",
};

const image = {
    maxWidth: "100%",
};

const boxInfos = {
    padding: "20px",
};

const containerImageFooter = {
    padding: "45px 0 0 0",
};
