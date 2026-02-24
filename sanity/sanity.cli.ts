import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'h94lawqm',
    dataset: 'production',
  },
  studioHost: 'sanitycms-portfolio-sharvani', 
  deployment: {
    autoUpdates: true,
  },
})
