# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-11-09
### ✨ Added
* First stable version of the `TvPagination` component.
* Automatic calculation of total pages (`totalItems` + `pageSize`).
* Dynamic range with `siblingCount` and `boundaryCount`.
* Conditional left/right ellipsis rendering.
* Optional buttons: first/last (`showFirstLast`) and previous/next (`showPrevNext`).
* Navigation icon support (`showIcons`).
* Customizable styles for active and inactive pages (`activeStyle`, `inactiveStyle`).
* Propagation of `buttonProps` to each internal `TvButton`.
* `page-label` slot to customize each page’s label.
* Controlled API through `v-model` (syncs `modelValue`).
* Emission of `update:modelValue` and `change` events only on actual page changes.
* Invalid range protection (min/max normalization in watcher and composable).
* Global disabled state (`disabled`).
* Configurable accessible label (`ariaLabel`) and `aria-current` on active page.
* Built as ES/CJS library with types (`vite-plugin-dts`).
* Automatic injection of compiled SCSS styles (via `vite-plugin-css-injected-by-js`).
* Prepared for SSR environments (no direct DOM access).

[1.0.0]: https://github.com/TODOvue/tv-pagination/pull/1/files
