# @folpe/cralendar

![NPM Version](https://img.shields.io/npm/v/%40folpe%2Fcralendar)
![NPM License](https://img.shields.io/npm/l/%40folpe%2Fcralendar)

[![🚀 Release](https://github.com/folpe/cralendar/actions/workflows/release.yml/badge.svg)](https://github.com/folpe/cralendar/actions/workflows/release.yml)

Cralendar is a React component that provides a simple and efficient way to manage CRA (Compte Rendu Activité) with an easy-to-use calendar interface.

## Table of Contents

- [@folpe/cralendar](#folpecralendar)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Props](#props)
  - [Contributing](#contributing)
  - [License](#license)

## Installation

To install Cralendar, make sure you have npm installed on your machine, then run:

```bash
npm install --save @folpe/cralendar
```

## Usage

Here’s a basic example of how to use the Cralendar component:

```tsx
import React from 'react'
import { Calendar } from '@folpe/cralendar'

const App = () => {
  const handleCalendarChange = (data) => {
    console.log('Calendar data:', data)
  }

  return (
    <div>
      <Calendar onCalendarChange={handleCalendarChange} />
    </div>
  )
}

export default App
```

## Props

The Cralendar component accepts the following props:

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

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `date` | `Date` | `new Date()` | The initial date to display |
| `weekStartsOn` | `number` | `1` | The day of the week to start on (0 = Sunday, 1 = Monday, etc.) |
| `displayBoosterActions` | `boolean` | `true` | Whether to display booster actions |
| `displayWeekDays` | `boolean` | `true` | Whether to display week days |
| `displayPrevNext` | `boolean` | `true` | Whether to display previous and next month navigation |
| `holidays` | `Holidays` | `{}` | An object containing holiday information |
| `onCalendarChange` | `function` | Required | Callback function called when calendar data changes |

## Contributing

We welcome contributions to Cralendar! Here’s how you can help:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please make sure to update tests as appropriate.

## License

Cralendar is licensed under the MIT License.
See the LICENSE file for details.
Show your ❤️ and support by giving a ⭐. Any suggestions are welcome!
