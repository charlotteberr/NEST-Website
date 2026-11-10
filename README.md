# Branching Logic — NEST Website

Next.js + Tailwind site for the NEST Summer Fellowship project.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static export to out/
```

- Each page lives in `app/<page>/page.tsx`, and all the text on a page is written in that file.
- The Pages menu and footer show on every page, so their text is in `components/Nav.tsx` and `components/Footer.tsx`.
- Add a page: create `app/<name>/page.tsx`, then add a link to it in `components/Nav.tsx` (and the home page's Explore cards in `app/page.tsx` if you want).
- Theme colors (`forest`, `moss`, `sage`, `mint`, `ink`) are in `app/globals.css`.
- `<Placeholder>` boxes mark content still to be written.
