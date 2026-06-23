# Anvay Docs Content

This repository stores the public Anvay documentation content and Tina Cloud schema.

Documentation entries live in `content/docs/*.mdx`. Runtime rendering happens in
`anvay-ui`; this repository is the Tina Cloud-backed content source.

## Local Tina commands

```bash
cp .env.example .env
npm install
npm run cms:build
```

Use the Tina Cloud project values from the `anvay-docs` project:

- `NEXT_PUBLIC_TINA_CLIENT_ID`
- `TINA_TOKEN`
- `TINA_BRANCH`
