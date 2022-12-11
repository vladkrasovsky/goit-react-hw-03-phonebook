import { Layout } from './Layout';
import { GlobalStyle } from './GlobalStyle';
import { Component } from 'react';

class App extends Component {
  render = () => {
    return (
      <Layout>
        <h2>Phonebook</h2>
        <GlobalStyle />
      </Layout>
    );
  };
}

export default App;
