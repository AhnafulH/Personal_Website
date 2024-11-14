import React from 'react';
import {
    Tailwind,
    Button,
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text,
} from "@react-email/components";

type ContactFormEmailProps = {
    message: string;
    senderEmail: string;
    senderName: string;
};

const emailTemplate = ({ message, senderEmail, senderName }: ContactFormEmailProps) => {
    return (
        <Html>
            <Head />
            <Preview>{senderName} sent you a new message from your portfolio site</Preview>
            <Tailwind>
                <Body className="bg-gray-100 text-black">
                    <Container>
                        <Section className="bg-white border-black my-10 px-10 py-4 rounded-md">
                            <Heading className="leading-tight">
                                You received a message from : {senderName}
                            </Heading>
                            <Text>{message}</Text>
                            <Hr />
                            <Text>The sender's email is: {senderEmail}</Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default emailTemplate;
