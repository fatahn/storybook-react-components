import React from 'react'
import { storiesOf } from '@storybook/react'

import { Button } from './Button.js'

storiesOf('Button', module).add('with background', () => (
	<Button bg="grey">Hello World!</Button>
)).add('with background 2', () => (
	<Button bg="green">Hello World!</Button>
))
