import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'fyq61r33',
    dataset: 'production_gabriela'
  },
  deployment: {
    appId: 'sd5pav4an9olikuwgpsznrj2',
    autoUpdates: true,
  },
})
