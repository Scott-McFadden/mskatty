import React from 'react';
import { Button} from 'react-bootstrap';
import { FaTimes } from "react-icons/all";

class SearchCriteriaEntry extends React.Component
{
    render()
    {
        return <Button variant="light" size="sm" >{this.props.name}<FaTimes onClick={this.SeClose}/></Button>
    }

    SeClose() {
        this.props.handleClose(this.props.name);
    }
}

export default SearchCriteriaEntry;