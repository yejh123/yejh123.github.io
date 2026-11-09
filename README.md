# yejh123.github.io

Source of [Jingheng Ye's homepage](https://yejh123.github.io), a single-page Jekyll site served by GitHub Pages.

## Structure

```
index.md                 Bio and research interests
_config.yml              Site identity and profile links
_data/                   Sections and their entries (news, publications, ...)
_layouts/home.html       Page layout
_includes/               Masthead, profile, section templates, SVG icons
_sass/, assets/          Styles and the masthead script
files/cv.pdf             CV
images/                  Avatar and favicon
docs/skills/             Maintenance procedures
```

## Local preview

With Ruby 3.3 installed:

```sh
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000. See [docs/skills/preview-site](docs/skills/preview-site/SKILL.md) for the full check.

## Updating content

Most changes are edits to one YAML file under `_data/`. [docs/skills/update-content](docs/skills/update-content/SKILL.md) lists where everything lives.

## Deployment

GitHub Pages builds `master` on every push. A GitHub Actions workflow also builds the site and checks internal links, anchors, and images.

## Credits and license

The site started from [academicpages](https://github.com/academicpages/academicpages.github.io), which is based on [Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes) by Michael Rose, together with the layout of [AcadHomepage](https://github.com/RayeRen/acad-homepage.github.io). The code is under the MIT License in [LICENSE](LICENSE). Icons come from [Font Awesome Free](https://fontawesome.com/license/free) under CC BY 4.0. The text, photo, and CV are © Jingheng Ye.
