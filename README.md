# @folpe/cralendar

![NPM Version](https://img.shields.io/npm/v/%40folpe%2Fcralendar)
![NPM License](https://img.shields.io/npm/l/%40folpe%2Fcralendar)

[![🚀 Release](https://github.com/folpe/cralendar/actions/workflows/release.yml/badge.svg)](https://github.com/folpe/cralendar/actions/workflows/release.yml)

A simple calendar to manage CRA (Compte Rendu Activité)

## Installation

To install and use this component, you can install it via npm. Make sure you have npm installed on your machine.

```bash
npm install --save @folpe/cralendar
```

## Usage

```tsx
import React from 'react'
import { Calendar } from '@folpe/cralendar'

const App = () => {
  return (
    <div>
      <Calendar />
    </div>
  )
}
```

## Documentation

Coming soon

Props to use

```tsx
type CralendarProps = {
  date?: Date
  weekStartsOn?: number
  displayBoosterActions?: boolean
  displayWeekDays?: boolean
  displayPrevNext?: boolean
  holidays?: Holidays
  onCalendarChange: (data: ExportedData) => void
}
```

## Contribute

Show your ❤️ and support by giving a ⭐. Any suggestions are welcome!

## License

Licensed under MIT
