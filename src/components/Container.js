import container from 'mixins/container';
import { createElement } from 'react';
import styled from 'styled-components';

const Container = styled(({ component = 'div', ...props }) => createElement(component, { ...props }))`${container}`;

export default Container;