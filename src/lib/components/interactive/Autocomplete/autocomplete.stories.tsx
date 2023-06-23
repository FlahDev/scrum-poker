import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Autocomplete } from './component'

export default {
  title: 'Autocomplete',
  component: Autocomplete
} as ComponentMeta<typeof Autocomplete>

//👇 We create a “template” of how args map to rendering
const Story: ComponentStory<typeof Autocomplete> = (args) => (
  <Autocomplete {...args} />
)

export const PrimaryAutocomplete = Story.bind({})
export const SecondaryAutocomplete = Story.bind({})

PrimaryAutocomplete.args = {}

SecondaryAutocomplete.args = {}
