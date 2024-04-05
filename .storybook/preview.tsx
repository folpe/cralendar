import { Global, ThemeProvider, css } from '@emotion/react'
import type { Preview } from '@storybook/react'
import React from 'react'
import { theme } from '../src/theme/theme'

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Global
          styles={css`
            @font-face {
              font-family: 'Raleway-Font';
              src: url('../src/assets/fonts/Raleway-VariableFont_wght.ttf')
                format(truetype) tech(variations);
            }
            * {
              font-family: 'Raleway-Font';
            }
          `}
        />
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
