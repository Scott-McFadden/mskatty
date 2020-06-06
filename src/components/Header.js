import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import Select, {components } from 'react-select';

const groupStyles = {
    border: `2px dotted red`,
    color: 'white',
    background: "red",
    padding: '5px 0px',
    display: 'flex',
};

const GroupHeading = props => (
    <div style={groupStyles}>
        <components.GroupHeading {...props} />

    </div>
);

class Header extends React.Component {


    constructor(props) {
        super(props);
        this.handleOptionChange = this.handleOptionChange.bind(this);
    }

    handleOptionChange(event)
    {
         let values=[];
         if(event !== null)
             for(var a=0; a<event.length;a++)
                 values.push(event[a].value);

        this.props.publishSearchResults(values);
    }

    selectedOptions = [];

    render() {

        return (
            <div>
                <Navbar bg="danger" expand="lg" activekey="cloth"
                        onSelect={(selectedKey) => {
                            this.NavChange({selectedKey})
                        }}>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Brand href="#home">
                        <img src="/images/logo1.png"
                             width='150'
                             height="50"
                             alt="Ms Katty"/>
                    </Navbar.Brand>
                    {this.props.showSearch &&
                        <Nav.Item style={{minWidth: "250px"}}>

                            <Select
                                    styles={{

                                        groupHeading: base => ({
                                            ...base,
                                            flex: '1 1',
                                            color: 'green',
                                            margin: 0,
                                        }),
                                    }}
                                    closeMenuOnSelect={false}
                                    components={{GroupHeading}}
                                    isMulti
                                    options={this.props.searchOptions}
                                    onChange={this.handleOptionChange}
                            />

                        </Nav.Item>
                    }
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav.Item>
                            <Nav.Link eventKey="cloth">Cloth</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="styles">Styles</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="FAQ">FAQ</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="order">Order</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="contact">Contact Us</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="disclaimer">Disclaimer</Nav.Link>
                        </Nav.Item>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }

    showAboutUs = false;

    NavChange(key) {
        if (key.selectedKey === "contact") {
            this.props.handleChange("contact");
        } else if (key.selectedKey === "cloth") {
            this.props.handleChange("cloth");
        } else if (key.selectedKey === "styles") {
            this.props.handleChange("styles");
        } else if (key.selectedKey === "FAQ") {
            this.props.handleChange("FAQ");
        } else if (key.selectedKey === "order") {
            this.props.handleChange("order");
        } else if (key.selectedKey === "disclaimer") {
            this.props.handleChange("disclaimer");
        }
    }




}

export default Header;