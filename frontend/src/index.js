import React from "react";
import ReactDOM from 'react-dom';

import {ApolloProvider} from 'react-apollo'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import client from './utils/client';

ReactDOM.render(
    <ApolloProvider client={ client }>
      <App />
    </ApolloProvider>,
    document.getElementById('root')
)

registerServiceWorker();

// import React from "react";
// import ReactDOM from "react-dom";
// import ApolloClient from "apollo-client";
// import {ApolloProvider, ApolloConsumer, withApollo} from "react-apollo";
// import {createHttpLink} from "apollo-link-http";
// import {InMemoryCache} from "apollo-cache-inmemory";

// import "./index.css";
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// const client = new ApolloClient({
//   link: createHttpLink({uri: "http://localhost:8000/graphql"}),
//   cache: new InMemoryCache()
// });

// const NavigatorContainer = () => (
//   <ApolloConsumer>
//     {apolloClient => {
//       console.log(apolloClient);
//       return <App />;
//     }}
//   </ApolloConsumer>
// );

// ReactDOM.render(
//   <ApolloProvider client={client}>
//     <NavigatorContainer />
//   </ApolloProvider>,
//   document.getElementById("root")
// );

// ReactDOM.render(<App />, document.getElementById('root'));

