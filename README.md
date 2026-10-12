# Branching Logic — NEST Website

Next.js + Tailwind site for the NEST Summer Fellowship project.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static export to out/
```

- Pages live in `app/<page>/page.tsx`; the dropdown and home cards read from `lib/pages.ts`.
- Add a page: create `app/<name>/page.tsx` and add an entry to `lib/pages.ts`.
- Theme colors (`forest`, `moss`, `sage`, `mint`, `ink`) are in `app/globals.css`.
- `<Placeholder>` boxes mark content still to be written.
