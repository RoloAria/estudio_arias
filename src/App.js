import React, { Component, Fragment } from 'react';
import Layout from './hoc/Layout/Layout';
import './App.css';
import Section from './components/Section/Section';
import Carousel from './components/Carousel/Carousel';
import { Route } from 'react-router-dom';
import Footer from './components/Footer/Footer'

class App extends Component {
  state = {
    activeSection: 1
  }

  render() {
    return (
      <div className="App">
        <Layout>
          <Fragment>
            <Carousel />
            <Route path='/' component={Section} />
          </Fragment>
        </Layout>
        <Footer/>
      </div>
    );
  }
}

export default App;
