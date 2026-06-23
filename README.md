# Anvay Docs Content

This repository stores the public Anvay documentation content and Tina Cloud schema.

Documentation entries live in `content/docs/*.mdx`. Runtime rendering happens in
`anvay-ui`; this repository is the Tina Cloud-backed content source.

## Why Tina Cloud

Tina Cloud keeps documentation text outside `anvay-ui` and `anvay` while still
giving us Git-backed version history. The UI repo owns rendering, route chrome,
and the Tina Content API query; this repo owns public documentation content and
the Tina schema.

The public docs route in `anvay-ui` fetches this content from Tina Cloud on the
server. It does not depend on the Anvay backend being reachable.

## Publishing flow

1. Update or curate docs in this repository under `content/docs/*.mdx`.
2. Commit and push to `main`.
3. Tina Cloud indexes the branch.
4. `anvay-ui` serves the updated docs from Tina Cloud at `/docs`.

For a bulk refresh from backend docs:

```bash
cd ../anvay-ui
npm run docs:seed-tina
```

Review the generated files in `.tina-seed/docs/`, then copy the curated output
into this repository's `content/docs/`. The seed output is intentionally ignored
in `anvay-ui` so generated docs text is not committed there.

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

Use the Tina **Content (Readonly)** token for `TINA_TOKEN`. Do not use the
Search token for runtime docs fetching.

`npm run cms:build` uses a larger Node heap because Tina's local admin build can
exceed the default heap limit.

## Safety notes

- Do not commit `.env`.
- Do not commit `public/admin/`.
- Do not commit `tina/__generated__/`; Tina-generated clients can embed the
  read token.
