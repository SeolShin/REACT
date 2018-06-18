import React, { Component } from 'react';
import './App.css';
import CardList from './containers/CardList';
import SearchBox from './containers/SearchBox';
import 'tachyons'
import Scroll from './containers/Scroll';
import ErrorBoundry from './containers/ErrorBoundry'

import { fList } from './fList';

class App extends Component {

    constructor() {
        super()
        this.state = {
            fList: [],
            searchfield: ``
        }
    } //constructor

    onSearchChange = (event) => {

        this.setState({
            searchfield: event.target.value
        })

    } //onSearchChange

    componentDidMount() {
        console.log(this.props.store);
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => {
                return response.json();
            })
            .then(photos => this.setState({
                fList: photos
            }));
    }

    render() {
        const {
            fList,
            searchfield
        } = this.state;

        const filteredRobots = fList.filter(fList => {
            return fList.title.toLowerCase().includes(searchfield.toLowerCase())
        }) //filteredTarget //filter

        return !fList.length ?
            <
            h1 > Loading < /h1> :
            ( <
                div className = 'tc' >
                <
                h1 className = 'f1' > CollectFlowers < /h1> <
                SearchBox searchChange = {
                    this.onSearchChange
                }
                />  <
                Scroll >
                <ErrorBoundry >
                <
                CardList fList = {
                    filteredRobots
                }
                />  
             </ErrorBoundry > 
             < /
                Scroll > < /
                div >
            )
    } //render
}; //class

export default App;