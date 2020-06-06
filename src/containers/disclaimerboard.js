import React from 'react';
import { Container} from 'react-bootstrap';
import axios from 'axios';
import ReactMarkdown from "react-markdown";

class DisclaimerBoard extends React.Component
{
    message = "";

    async componentDidMount() {
        let response = await axios.get("/data/disclaimer.json");
        console.log(response.data);
        this.message = response.data.disclaimer.join("\n") || "";
        this.forceUpdate();
    }
    render(){



        return (
          <Container fluid  >
            <h1>DISCLAIMER</h1>
              <ReactMarkdown source={this.message}  escapeHtml={false}/>
          </Container>
        );
    }


}

export default DisclaimerBoard