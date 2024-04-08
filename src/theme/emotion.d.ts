import '@emotion/react'
declare module '@emotion/react' {
  export interface Theme {
    color: {
      primary: { light: string; main: string }
      secondary: { main: string }
      grey: {
        lighter: string
        light: string
        main: string
        dark: string
        darker: string
      }
    }
  }
}
