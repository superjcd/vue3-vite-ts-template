declare namespace Settings {
  interface app {
    theme?: '' | 'dark' | 'light'
  }
  interface api {
    timeout: number
    successfullCodes: Array<number>
  }
  interface all {
    app: app
    api: api
  }
}

export { Settings }
