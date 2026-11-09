---
name: update-content
description: Add or edit homepage content such as the bio, news, publications, experience, honors, profile links, CV, or photo. Use when the user wants to change what the homepage says.
---

# Update content

Where each kind of content lives:

| Content | File |
| --- | --- |
| Bio and research interests | `index.md` |
| News | `_data/news.yml` |
| Publications | `_data/publications.yml` |
| Experience | `_data/experience.yml` |
| Honors and awards | `_data/honors.yml` |
| Name, description, location, profile links | `_config.yml` |
| Section order, headings, nav labels | `_data/sections.yml` |
| CV | `files/cv.pdf` |
| Photo | `images/profile.jpg` |

## Steps

1. Edit the file above, keeping entries newest first.
2. Quote dates such as `"2024.10"`, since YAML reads an unquoted `2024.10` as the number 2024.1.
3. For a publication, write `authors` as plain text. The site author's name is bolded automatically, and `*` marks equal contribution.
4. Add `code: owner/repo` to a publication to show its GitHub star badge.
5. Write experience `details` in inline Markdown, so links work there.
6. Replace the CV or photo in place under the same file name, so links never change. Keep the photo square, about 400 px.
7. Preview the result with the `preview-site` skill.

## New profile link

1. Add an entry under `author.links` in `_config.yml` with `label`, `icon`, and `url`.
2. Make sure `icon` names a file in `_includes/icons/`.
3. For a new icon, copy the path from the Font Awesome Free SVGs into a file shaped like the existing ones.

## New section

1. Add an entry with `id`, `title`, and `nav_title` to `_data/sections.yml`.
2. Create `_includes/sections/<id>.html` and a data file for its entries.
