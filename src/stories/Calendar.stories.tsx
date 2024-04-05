import type { Meta, StoryObj } from '@storybook/react'
import { Calendar } from '../components/organisms/Calendar'
import { addMonths } from 'date-fns'
import { holidays } from './assets/holidays'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Organisms/Calendar',
  component: Calendar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof Calendar>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {}
export const Previous: Story = {
  args: {
    date: addMonths(new Date(), 1),
  },
}

export const startsOn: Story = {
  args: {
    weekStartsOn: 1,
  },
}

export const CalendarHolidays: Story = {
  args: {
    holidays: holidays,
  },
}
