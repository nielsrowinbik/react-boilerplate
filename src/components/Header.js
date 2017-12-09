import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

const Title = styled((props) => <Link to="/" {...props}>React</Link>)`
	color: white;
	text-decoration: none;
	font-size: 1.25em;
	font-weight: 300;

	& > strong { font-weight: 400 }
`;

const Header = styled(({ ...props }) => (
	<header {...props}>
		<Title />
	</header>
))`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	height: 64px;
	display: flex;
	flex-wrap: nowrap;
	align-items: center;
	background-color: darkorange;
	padding: 0 12px;
`;

export default Header;