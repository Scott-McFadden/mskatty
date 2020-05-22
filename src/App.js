import React from 'react';
import {  Container} from 'react-bootstrap';
import {connect } from 'react-redux';

import Header from './components/Header'
import FaqBoard from "./containers/faqboard";
import AboutUsModel from "./components/AboutUsModal";
import DisclaimerBoard from "./containers/disclaimerboard";
import ColorsBoard from "./containers/ColorsBoard";
import * as searchCriteriaActions from "./redux/actions/searchCriteriaActions";
import PropTypes from 'prop-types';
import axios from "axios";
import _ from "lodash";


class App extends React.Component {

    constructor(props)
    {
        super(props);
        this.handleDisplayNavChange = this.handleDisplayNavChange.bind(this);
        this.handleAboutUsClose = this.handleAboutUsClose.bind(this);
        this.publishSearchResults = this.publishSearchResults.bind(this);
        this.removeSearchCriteria = this.removeSearchCriteria.bind(this);

        //this.state = {};
    }


    swatches = [];
    selectedSwatches = [];
    selectedCats = [];
    selectOptions = [];

    async componentDidMount() {
        let response = await axios.get("/data/swatches.json");
        console.log(response.data);
        this.swatches = response.data.swatches || [];

        this.selectSwatches(true);
        this.selectOptions = this.collectSelectOptions();
        this.forceUpdate();

    }

    selectSwatches(isNew) {

        if (!this.swatches || this.swatches.length ===0 ) {
            this.props.setSelectedSwatches([]);
        }
        else if (this.selectedCats.length === 0  )
        {
            if (this.swatches)
            this.props.setSelectedSwatches(_.cloneDeep(this.swatches));
        }
        else {
            if (isNew)
                this.props.setSelectedSwatches(this.swatches.filter(item => this.IsSelected(item)));
            else
                this.props.setSelectedSwatches(this.props.selectedSwatches.filter(item => this.IsSelected(item)));
        }
    }

    IsSelected(item) {
        for (var a = 0; a < item.cat.length; a++)
            for (var b = 0; b < this.selectedCats.length; b++)
                if (item.cat[a] === this.selectedCats[b]) {
                    return true;
                }
        return false;

    }

    collectSelectOptions() {
        let found = false;
        for (var a = 0; a < this.swatches; a++) {
            for (var b = 0; b < this.swatches[a].cat.length; a++) {
                found = true;
                for (var c = 0; c < this.selectOptions.length && !found; a++) {
                    if (this.selectOptions[c] === this.swatches[a].cat[b])
                        found = false;
                }
                if (found)
                    this.selectOptions.push(this.swatches[a].cat[b]);
            }
        }

    }

    removeSearchCriteria(name){
        this.props.removeSearchCriteria(name);
    }

    render(){
        return (

            <div className="App">

                    <Header
                        handleChange={this.handleDisplayNavChange}
                        searchOptions={this.searchOptions}
                        publishSearchResults={this.publishSearchResults}
                        showSearch={this.IsSet("cloth")}
                    />
                    <Container fluid>
                        {  this.IsSet("FAQ") && <FaqBoard   /> }
                        {  this.IsSet("cloth") && <ColorsBoard
                            searchOptions={this.props.searchCriteria}
                            swatches={this.props.selectedSwatches}
                            handleSearchCriteriaFilterRemove={this.removeSearchCriteria}
                        />}
                        {  this.IsSet("styles") && <div>styles</div>}
                        {  this.IsSet("order") && <div>order</div>}
                        {  this.IsSet("disclaimer") && <DisclaimerBoard />}
                        <AboutUsModel
                            show={this.IsSet('contact')}
                            handleClose={this.handleAboutUsClose}/>

                    </Container>

            </div>
        );
    }

     handleDisplayNavChange(key)
    {
        console.log("props before navchange", this.props);
        this.props.setDisplayPanel(key) ;
       //console.log("key:", key, this.props.oldDisplayPanel, this.props.displayPanel);
        console.log("props after navchange", this.props);

    }

    handleAboutUsClose() {
         this.props.setDisplayPanel(this.props.oldDisplayPanel) ;
    };

    IsSet(key)
    {
        let ret = false;
        if (key === this.props.displayPanel)
            ret = true;

        return ret;
    }

    publishSearchResults(values)
    {
        console.log("values", values);
        this.props.addSearchCriteria(values);
        //this.setState({searchCriteria: values })
    }


}

App.propTypes = {

    selectedSwatches: PropTypes.array.isRequired,
    displayPanel: PropTypes.string.isRequired,
    oldDisplayPanel: PropTypes.string.isRequired,
    addSearchCriteria: PropTypes.func.isRequired,
    removeSearchCriteria: PropTypes.func.isRequired,
    setSelectedSwatches: PropTypes.func.isRequired,
    searchCriteria: PropTypes.array.isRequired,
    setDisplayPanel: PropTypes.func.isRequired
};

function mapStateToProps(state)
{
    const mystate =
      {

        selectedSwatches: state.searchCriteriaReducer.selectedSwatches ,
        displayPanel: state.searchCriteriaReducer.displayPanel,
        oldDisplayPanel: state.searchCriteriaReducer.oldDisplayPanel,
        searchCriteria: state.searchCriteriaReducer.searchCriteria ,
    };

    return mystate;
}

function mapDispatchToProps(dispatch){
    return {
        addSearchCriteria: item => dispatch(searchCriteriaActions.addSearchCriteria(item)),
        removeSearchCriteria: item => dispatch(searchCriteriaActions.removeSearchCriteria(item)),
        setSelectedSwatches: item => dispatch(searchCriteriaActions.setSelectedSwatches(item)),
        setDisplayPanel: key => dispatch(searchCriteriaActions.setDisplayPanel(key))
    }
}

export default connect(mapStateToProps, mapDispatchToProps ) (App);
