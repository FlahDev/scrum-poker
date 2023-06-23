import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Field } from './component'

export default {
  title: 'Field',
  component: Field
} as ComponentMeta<typeof Field>

//👇 We create a “template” of how args map to rendering
const Story: ComponentStory<typeof Field> = (args) => <Field {...args} />

export const PrimaryField = Story.bind({})
export const SecondaryField = Story.bind({})

PrimaryField.args = {}

SecondaryField.args = {}
