import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Welcome', module)
	.addWithJSX(
		'Our new storybook of components',
		() => <h1>Welcome to our storybook</h1>
	)
