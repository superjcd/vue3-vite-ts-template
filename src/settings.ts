import type { Settings } from '#/global'

const globalSettings: Settings.all = {
  app: {
    theme: 'light'
  },
  api: {
    timeout: 5000,
    successfullCodes: [200, 201]
  }
}

export default globalSettings
