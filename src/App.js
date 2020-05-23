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
        this.IsSelected = this.IsSelected.bind(this);

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
        this.collectSelectOptions();
        this.forceUpdate();

    }

    selectSwatches(isNew) {

        if (!this.swatches || this.swatches.length ===0 ) {
            this.selectedSwatches=[];
        }
        else if (this.props.searchCriteria.length === 0  )
        {
            this.selectedSwatches =_.cloneDeep(this.swatches);
        }
        else {
            if (isNew)
                this.selectedSwatches=this.swatches.filter((i) => {
                    return this.IsSelected(i);
                } );
            else
                this.selectedSwatches=this.props.selectedSwatches.filter(this.IsSelected);
        }
    }

    IsSelected(item) {
        for (var a = 0; a < item.cat.length; a++)
            for (var b = 0; b < this.props.searchCriteria.length; b++)
                if (item.cat[a] === this.props.searchCriteria[b]) {
                    return true;
                }
        return false;

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.searchCriteria !== this.props.searchCriteria)
        {
            this.selectSwatches(true);
            this.forceUpdate();
        }

    }

    collectSelectOptions() {
        let notFound = false;
        for (var a = 0; a < this.swatches.length; a++) {
            for (var b = 0; b < this.swatches[a].cat.length; b++) {
                notFound = true;
                for (var c = 0; c < this.selectOptions.length &&  notFound; c++) {
                    if (this.selectOptions[c] === this.swatches[a].cat[b])
                        notFound = false;
                }
                if (notFound) {
                    this.selectOptions.push(this.swatches[a].cat[b]);
                }

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
                        searchOptions={this.selectOptions}
                        publishSearchResults={this.publishSearchResults}
                        showSearch={this.IsSet("cloth")}
                    />
                    <Container fluid>
                        {  this.IsSet("FAQ") && <FaqBoard   /> }
                        {  this.IsSet("cloth") && <ColorsBoard
                            searchOptions={this.props.searchCriteria}
                            swatches={this.selectedSwatches}
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
        console.log("values", values, this.props);
        this.props.addSearchCriteria(values);
        this.selectSwatches(true);
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
    return {

        selectedSwatches: state.searchCriteriaReducer.selectedSwatches ,
        displayPanel: state.searchCriteriaReducer.displayPanel,
        oldDisplayPanel: state.searchCriteriaReducer.oldDisplayPanel,
        searchCriteria: state.searchCriteriaReducer.searchCriteria ,
    };


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
