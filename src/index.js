import React from "react";
import ReactDOM from "react-dom";

import { of } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { CardProfile } from './Card';
import { profiles } from './Profiles';

import "./styles.css";

export class App extends React.Component {

  constructor() {
    super();
    this.state = {
      profiles: profiles
    }
  }

  componentDidMount() {
    const self = this;

    const element = document.querySelector('ar-input');
    element.addEventListener('ar.change', (e) => {
      of(e.detail.value)
        .pipe(
          debounceTime(700),
          distinctUntilChanged()
        )
        .subscribe(text => {
          self.setState({
            profiles: profiles.filter(profile => {
              return profile.name.toLowerCase().includes(text.toLowerCase()) 
            })
          })
        })
    })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <ar-input placeholder="Search Name"></ar-input>
          { this.state.profiles.map((profile, index) => {
              return (
                <div className="col-md-3" key={index}>
                  <CardProfile { ...profile }/>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }

}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
