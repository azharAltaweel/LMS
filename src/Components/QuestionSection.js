import { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Women2 from "../Assets/Images/women2.png";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    { question: "What does it take excellent author?", answer: "Great value and so easy to use and saves me so much time! I was shocked by how much time and brain energy it saved me. Simple & easy gotta love that. Great value and so easy to use." },
    { question: "Who will view my content?", answer: " Great value and so easy to use and saves me so much time! I was shocked by how much time and brain energy it saved me. Simple & easy gotta love that. Great value and so easy to use." },
    { question: "What does it take become an author?", answer: "Great value and so easy to use and saves me so much time! I was shocked by how much time and brain energy it saved me. Simple & easy gotta love that. Great value and so easy to use." },
    { question: "How to change my password easily?", answer: "Great value and so easy to use and saves me so much time! I was shocked by how much time and brain energy it saved me. Simple & easy gotta love that. Great value and so easy to use." },
    {question:"How does it create content?",answer:"Great value and so easy to use and saves me so much time! I was shocked by how much time and brain energy it saved me. Simple & easy gotta love that. Great value and so easy to use."}

];

  return (
    <Container className="my-5">
      <Row>
        {/* Questions list on the left */}
        <Col lg={6}>
          {faqData.map((item, index) => (
            <Card
              key={index}
              className="mb-3 shadow-sm"
              style={{ cursor: "pointer" }}
              onClick={() => toggle(index)}
            >
              <Card.Body className="d-flex justify-content-between align-items-center">
                <span>{item.question}</span>
                <span>
                  {openIndex === index ? "▲" : "▼"}
                </span>
              </Card.Body>
              {openIndex === index && (
                <Card.Body className="text-muted">{item.answer}</Card.Body>
              )}
            </Card>
          ))}
        </Col>

        {/* Image on the right */}
        <Col lg={6} className="d-flex justify-content-center align-items-center mt-4 mt-lg-0">
          <img
            src={Women2}
            alt="women-ask"
            className="img-fluid"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default FAQ;