import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import HomePage from './components/4-pages/home-page.component';
import AboutPage from './components/4-pages/about-page.component';
import CategoryPage from './components/4-pages/category-page.component';
import ContactPage from './components/4-pages/contact-page.component';
import FullPhotoPage from './components/4-pages/full-photo-page.component';
import LandingPage from './components/4-pages/landing-page.component';

import './sass/main.css'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuIsOpen: false,
      isPhone: window.innerWidth < 850,
    };
  }

  toggleMenu = () => {
    this.setState({
      menuIsOpen: !this.state.menuIsOpen,
    });
  };

  render() {
    const { menuIsOpen, isPhone } = this.state;

    return (
      <Switch>
        <Route
          exact
          path='/'
          render={(rp) => (
            <LandingPage
              menuOpen={menuIsOpen}
              toggleMenu={this.toggleMenu}
              {...rp}
            />
          )}
        />
        <Route
          exact
          path='/home'
          render={(rp) => (
            <HomePage
              menuOpen={menuIsOpen}
              toggleMenu={this.toggleMenu}
              {...rp}
            />
          )}
        />
        <Route
          exact
          path='/about'
          render={(rp) => (
            <AboutPage
              menuOpen={menuIsOpen}
              isPhone={isPhone}
              toggleMenu={this.toggleMenu}
              {...rp}
            />
          )}
        />
        <Route exact path='/contact' render={(rp) => <ContactPage toggleMenu={this.toggleMenu} menuOpen={menuIsOpen} isPhone={isPhone} {...rp} />} />
        <Route
          exact
          path='/:catID'
          render={(rp) => (
            <CategoryPage
              menuOpen={menuIsOpen}
              toggleMenu={this.toggleMenu}
              {...rp}
            />
          )}
        />
        <Route
          exact
          path='/:catID/:photoID'
          render={(rp) => <FullPhotoPage {...rp} />}
        />
      </Switch>
    );
  }
}

export default App;
