import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'gabriela-dima-cfo',

  projectId: 'fyq61r33',
  dataset: 'production_gabriela',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
