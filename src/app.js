import * as stores from './stores';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider, observer } from 'mobx-react';
import Header from 'components/Header';
import Home from 'routes';
import React from 'react';

const App = () => (
	<Provider {...stores}>
		<BrowserRouter>
			<div id="app">
				<Header />
				<Switch>
					<Route path="/" exact component={Home} />
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>
);

export default observer(App);