import Helmet from 'react-helmet';
import React from 'react';
import Route from 'components/Route';
import { Switch } from 'react-router-dom';

const Head = () => (
	<Helmet
		titleTemplate="%s — openSEA"
		defaultTitle="openSEA"
	/>
);

const MainRoutes = (props) => (
	<div id="app">
		<Head />
		<Switch>
			<Route path="/" exact />
			<Route path="/private" exact authedOnly />
			<Route path="/signin" exact unauthedOnly />
			<Route path="/logout" exact />
		</Switch>
	</div>
);

export default MainRoutes;