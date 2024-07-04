import type { Meta, StoryObj } from '@storybook/react'
import { DayCell } from '../components/atoms/DayCell'
import React from 'react'

const day = {
  date: new Date(),
  holiday: null,
  isOtherMonth: false,
  isToday: true,
  isWeekend: false,
  value: null
}
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta = {
  title: 'Atoms/DayCell',
  component: DayCell,
  decorators: [
    Story => (
      <div
        style={{
          width: '800px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Story />
      </div>
    )
  ],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { dayData: day }
} satisfies Meta<typeof DayCell>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    dayData: day
  }
}

export const AllInOne: Story = {
  args: {
    dayData: {
      date: new Date(),
      holiday: 'Ascension',
      isOtherMonth: true,
      isToday: true,
      isWeekend: true,
      value: null
    }
  }
}

export const Worked: Story = {
  args: {
    dayData: { ...day, value: 1 }
  }
}
export const HalfWorked: Story = {
  args: {
    dayData: { ...day, value: 0.5 }
  }
}
export const Holiday: Story = {
  args: {
    dayData: { ...day, holiday: 'Ascension' }
  }
}
export const RestDay: Story = {
  args: {
    dayData: { ...day, value: 0 }
  }
}

export const OtherMonth: Story = {
  args: {
    dayData: { ...day, isOtherMonth: true }
  }
}
