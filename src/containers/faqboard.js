import React from 'react';
import {Accordion, Card, Button, Container} from 'react-bootstrap';
import axios from 'axios';
import ReactMarkdown from "react-markdown";

class FaqBoard extends React.Component
{
    questionList = [];

    async componentDidMount() {
        let response = await axios.get("/data/faq.json");
        console.log(response.data);
        this.questionList = response.data.faqs;
        this.forceUpdate();
    }
    render(){
        if (this.questionList.length === 0 )
            return (<div ></div>);


        return (
          <Container fluid  >
            <h1>FAQ</h1>
            <Accordion>
                {this.displayQuestions()}
            </Accordion>
          </Container>
        );


    }

    displayQuestions()
    {
        let qout = [];

        for(var i=0; i< this.questionList.length; i++ )
        {

            let c = (<Card key={"faq"+i}>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey={i}>
                        {this.questionList[i].question}
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={i}>
                    <Card.Body>
                        <ReactMarkdown source={this.questionList[i].answer.join("\n")} />
                    </Card.Body>
                </Accordion.Collapse>
            </Card>);

            qout.push(c);
        }

        return qout;
    }
}

export default FaqBoard