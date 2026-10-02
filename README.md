# Chao Liang — Personal Website

Source code for [Chao Liang's personal website](https://void0123210.github.io/chaoliang/), built with Jekyll and hosted on GitHub Pages.

## Site structure

- `_pages/about.md` — concise homepage and overview
- `_pages/cv.md` — curriculum vitae
- `_pages/research.md` — research interests and projects
- `_publications/` — publication records
- `_pages/writings.html` and `_writings/` — essays, travel notes, and reflections
- `images/writings/` — images used by writing entries

Original personal materials are kept locally in `personal material/` and are excluded from Git. Only web-ready images that are actually used by the site should be placed under `images/`.

## Local preview

From PowerShell in the repository root, run:

```powershell
.\scripts\serve-local.ps1
```

Then open <http://127.0.0.1:4000/chaoliang/>. Changes to Markdown, HTML, and styles are rebuilt automatically. Restart the preview after changing `_config.yml`.

## Publishing

Review the local preview, commit the intended changes, and push the `master` branch to GitHub. GitHub Pages will rebuild the public site from the repository.

## Credits and license

The site is based on the [Academic Pages](https://academicpages.github.io/) Jekyll template and retains its MIT license; see `LICENSE`.
