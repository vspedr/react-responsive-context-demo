import React, { Component } from 'react';
import './Home.css';
import { Context as ResponsiveContext } from 'react-responsive';
import { Desktop, Mobile } from './Responsive';
class Home extends Component {
  static async getInitialProps({ req, res, match, history, location, ...ctx }) {
    return { whatever: 'stuff' };
  }

  render() {
    const TestContext = React.createContext();

    return (
      <div className="Home">
        <h1>Demo</h1>
        {/* A plain react context */}
        <TestContext.Provider value="test" >
          <TestContext.Consumer>
            {(values) => {
              console.warn({ values });
              return null;
            }}
          </TestContext.Consumer>
        </TestContext.Provider >

        {/* react-responsive's context. The provider is created in client.js */}
        <ResponsiveContext.Consumer>
          {(values) => {
            console.warn({ values });
            return null;
          }}
        </ResponsiveContext.Consumer>


        <Desktop>
          <p>I should be rendered only on screens above 960px</p>
        </Desktop>
        <Mobile>
          <p>I should be rendered on screens 960px and below</p>
        </Mobile>
      </div>
    );
  }
}

export default Home;
