import { defineConfig } from 'tinacms'

const branch =
  process.env.TINA_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  'main'

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || null,
  token: process.env.TINA_TOKEN || null,
  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: 'media',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
        name: 'doc',
        label: 'Docs',
        path: 'content/docs',
        format: 'mdx',
        ui: {
          router: ({ document }) => {
            const slug = document._sys.filename === 'index' ? '' : document._sys.filename
            return `/docs/${slug}`
          },
        },
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'string',
            name: 'description',
            label: 'Description',
            ui: {
              component: 'textarea',
            },
          },
          {
            type: 'string',
            name: 'slug',
            label: 'Slug',
            required: true,
          },
          {
            type: 'string',
            name: 'group',
            label: 'Navigation Group',
            required: true,
          },
          {
            type: 'number',
            name: 'order',
            label: 'Navigation Order',
          },
          {
            type: 'string',
            name: 'sourceLabel',
            label: 'Imported Source Label',
          },
          {
            type: 'string',
            name: 'editUrl',
            label: 'External Edit URL',
          },
          {
            type: 'string',
            name: 'body',
            label: 'Body',
            isBody: true,
            ui: {
              component: 'textarea',
            },
          },
        ],
      },
    ],
  },
})
