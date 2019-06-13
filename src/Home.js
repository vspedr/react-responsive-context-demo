import React, { Component } from 'react';
import './Home.css';
import MediaQuery, { Context as ResponsiveContext } from 'react-responsive';
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
              return (
                <div>
                  <h1>Plain React context</h1>
                  <pre>{JSON.stringify(values, null, 2)}</pre>
                </div>
              );
            }}
          </TestContext.Consumer>
        </TestContext.Provider >

        {/* react-responsive's context. The provider is created in client.js */}
        <ResponsiveContext.Consumer>
          {(values) => {
            console.warn({ values });
            return (
              <div>
                <h1>react-responsive context</h1>
                <pre>{JSON.stringify(values, null, 2)}</pre>
              </div>
            );
          }}
        </ResponsiveContext.Consumer>


        <Desktop>
          <p>I should be rendered only on screens above 960px</p>
        </Desktop>
        <Mobile>
          <p>I should be rendered on screens 960px and below</p>
        </Mobile>

        <MediaQuery values={{width: 500}} minWidth={600} >
          I should not be rendered
        </MediaQuery>
        <MediaQuery values={{width: 700}} minWidth={600} >
          I should be rendered
        </MediaQuery>
      </div>
    );
  }
}

export default Home;
