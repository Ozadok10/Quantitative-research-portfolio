# Quantitative Research Portfolio — GitHub Pages site (draft)

A clean static website (no build framework) for two research projects.

## Before publishing
1. Name, email, and LinkedIn have been added to `config.js`. Add an optional phone number, live Tableau Public dashboard URLs, and GitHub repository URLs when available.
2. Review all research descriptions and published README limitations.
3. In GitHub, create a third repository (`quantitative-research-portfolio`), upload these files at the repository root, then Settings → Pages → Deploy from branch → main / (root).
4. Open the published site, test both project buttons and contact links on desktop and mobile.

Links to research repositories and Tableau dashboards intentionally remain disabled until their actual public URLs are supplied. They are not invented.

## Research publication status
The intraday research package has 8/9 selected scripts tested against originals, 28/28 CSV exact matches, with one missing R04 input. The Treasury source archive has a passing SQLite integrity check and additional numerical checks. Research repositories are not automatically publicly reproducible until missing inputs, source licensing, and clean installation checks are resolved or documented.

The site uses remote Google Fonts, with system fonts as fallback. No analytics, tracking, server code, or external JavaScript frameworks.
