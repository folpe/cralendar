import type { Meta, StoryObj } from '@storybook/react'
import { Cralendar } from '../components/organisms/Cralendar'
import { holidays } from './assets/holidays'
import { fn } from '@storybook/test'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Organisms/Cralendar',
  component: Cralendar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    onCalendarChange: fn()
  }
} satisfies Meta<typeof Cralendar>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {}
export const ByDate: Story = {
  args: {
    date: new Date('2024-12-12')
  }
}

export const startsOnSunday: Story = {
  args: {
    weekStartsOn: 0
  }
}

export const CalendarHolidays: Story = {
  args: {
    holidays: holidays
  }
}
