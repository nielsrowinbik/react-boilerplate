import * as OfflinePluginRuntime from 'offline-plugin/runtime';
import App from './app';
import { injectGlobal } from 'styled-components';
import React from 'react';
import ReactDOM from 'react-dom';

injectGlobal`
	html, body {
		margin: 0;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	body {
		overflow-y: scroll;
	}

	*,
	*:before,
	*:after {
		box-sizing: border-box;
	}

	#app {
		min-height: 100vh;
	}

	a {
		color: inherit;
		text-decoration: none;
	}
`;

OfflinePluginRuntime.install();

ReactDOM.render(<App />, document.body);