import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Preview,
  Row,
  Section,
  Text,
  render,
} from "@react-email/components";

interface Props {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export const ContactEmail = ({
  firstName,
  lastName,
  email,
  message,
}: Props) => {
  return (
    <Html>
      <Head />
      <Preview>New Portofolio Email</Preview>
      <Body style={main}>
        <Container>
          <Section style={content}>
            <Row style={{ ...boxInfos, paddingBottom: "0" }}>
              <Column>
                <Heading
                  style={{
                    fontSize: 32,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Hi Moneer,
                </Heading>
                <Heading
                  as="h2"
                  style={{
                    fontSize: 26,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  {firstName} sent you an email.
                </Heading>

                <Text style={paragraph}>
                  <b>Name: </b>
                  {firstName} {lastName}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Email: </b>
                  {email}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Message: </b>
                  {message}
                </Text>
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactEmail;

const main = {
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
  fontSize: 16,
};

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "3px",
  overflow: "hidden",
};

const boxInfos = {
  padding: "20px 40px",
};

export const emailHtml = ({ firstName, lastName, email, message }: Props) => {
  return render(
    <ContactEmail
      firstName={firstName}
      lastName={lastName}
      email={email}
      message={message}
    />,
  );
};
