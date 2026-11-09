# AGENTS

## Goal

This repository is Jingheng Ye's academic homepage, a single-page Jekyll site that GitHub Pages builds from `master`.

- Respond in Chinese, even when the user writes in English.
- Procedures live in skills under `docs/skills/`, so follow the skill a section names.

## Layout

- `index.md` holds the bio, and `_config.yml` holds the site identity and profile links.
- `_data/` holds the homepage sections and their entries, and `_includes/sections/` renders one section per template.
- `_layouts/home.html`, `_includes/`, `_sass/`, and `assets/` make up the theme.
- `files/cv.pdf` and `images/` hold the CV, avatar, and favicon.

## Workflow

- Change homepage content with the `update-content` skill.
- Preview and verify every change with the `preview-site` skill before committing.
- CI builds the site and checks internal links on every push, and GitHub Pages deploys `master`.

## Code Style

Write correct, readable code that the next maintainer can change safely.

- Keep content in `_data/`, `index.md`, and `_config.yml`, and keep templates free of content.
- Prefer native HTML, CSS, and browser APIs over libraries, polyfills, and build steps.
- Use only plugins that GitHub Pages supports, at the versions the `github-pages` gem pins.
- Keep templates, styles, and scripts focused, and remove duplication and dead code.
- Use intent-revealing names, and name classes as `block__element`.
- Put a value in `_sass/_variables.scss` only when several rules share it.
- Treat the rendered page as the spec, and compare screenshots before and after any style change.

## Annotation Style

Comments tell a reader the intent and the constraints, in plain and consistent language.

- Use one term per concept across code, comments, and docs, such as section, profile, and overflow list.
- Keep comments to one or two lines that state a constraint, not the syntax.
- Open a template or data file with a comment only when its inputs or rules are not obvious.
- Leave details that change often at the code that owns them: dates, counts, versions, and URLs.

## Git

- Write an imperative subject line and explain why in the body.
- Do not add AI co-author lines to commits.
