import React from 'react';
import {Row, } from 'react-bootstrap';
import SwatchItem from "../components/SwatchItem";
import SearchCriteriaEntry from "../components/SearchCriteriaEntry";

class ColorsBoard extends React.Component {

    constructor(props){
        super(props);
        this.removeFromSearchList = this.removeFromSearchList.bind(this);
    }
    render() {
        return (
            <div>
                <h1>Swatches, Colors and Patterns</h1>
                <Row>{this.displaySearchCriteria()}</Row>
                <div className="container-fluid row">
                    {this.displaySwatches()}
                </div>
            </div>
        );
    }

    displaySearchCriteria(){
        let ret = [];
        if (this.props.searchOptions === undefined)
            return ret;
        for(var a=0; a<this.props.searchOptions.length; a++)
        {
            ret.push(<SearchCriteriaEntry key={this.props.searchOptions}
                name={this.props.searchOptions[a]}
                handleClose={this.removeFromSearchList} />)
        }

        return ret;
    }

    removeFromSearchList(name) {
        console.log("need to remove name filter");
        this.props.handleSearchCriteriaFilterRemove(name);
    }

    displaySwatches() {

        let ret = [];

        if (!this.props.swatches)
            return (<div>Nothing Selected...</div>);


        for (var a = 0; a < this.props.swatches.length; a++) {
            ret.push(<SwatchItem key={"si-" + a.toString()} item={this.props.swatches[a]} selected={this.props.searchOptions}/>);
        }

        return ret;
    }
}

export default ColorsBoard;