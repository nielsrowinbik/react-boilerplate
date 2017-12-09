import Container from 'components/Container';
import Main from 'components/Main';
import { observer } from 'mobx-react';
import React from 'react';

const Home = observer(({ OrganisationsStore, SnackbarStore }) => (
	<Main>
		<Container>
			<h1>Home</h1>
		</Container>
	</Main>
));

export default Home;