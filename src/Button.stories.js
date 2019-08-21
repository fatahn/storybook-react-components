import React from 'react'
import { storiesOf } from '@storybook/react'

import { Button } from './Button.js'

storiesOf('Button', module)
	.addWithJSX('with background', () => (
		<Button bg="grey">Hello World!</Button>))
	.addWithJSX('with background 2', () => (
		<Button bg="green">Hello World!</Button>
	))
