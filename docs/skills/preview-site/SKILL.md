---
name: preview-site
description: Build and preview the homepage locally, check its links, and compare screenshots. Use before committing any change.
---

# Preview the site

## Setup

1. Install the Ruby version in `.ruby-version`, for example with `brew install ruby@3.3`, and put it first on `PATH`.
2. Run `bundle install`.

## Steps

1. Run `bundle exec jekyll serve` and open http://localhost:4000.
2. Check desktop, tablet, and phone widths, such as 1440, 900, and 390 px.
3. On narrow screens, open the masthead overflow list and follow a section link.
4. Run `bundle exec jekyll build` and then `bundle exec htmlproofer _site --disable-external`.
5. After a style change, screenshot the page before and after at each width and compare them. The look should change only where intended.
