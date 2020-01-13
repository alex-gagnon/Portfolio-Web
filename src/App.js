import React, {Component} from 'react';
import './assets/css/main.css'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navigation from './components/Header/Navigation';
import Portfolio from "./components/Main/Main";
import Footer from "./components/Footer/footer";

class App extends Component {
    render() {
        return (
            <Router key={'router'}>
                <header>
                    {<Navigation key={'navigation'}/>}
                </header>
                <main key={'main'}>
                    <Route path='/' exact component={Portfolio}/>
                </main>
                <footer>
                    {<Footer key={'footer'}/>}
                </footer>
            </Router>
        );
    }
}

export default App;