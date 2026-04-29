# Deployment Notes

## Hosting Model

This project is designed as a static site.

That means it can run with:

- HTML
- CSS
- JavaScript
- Browser assets

It does not require:

- A backend server
- A database
- A VM
- Docker
- Proxmox
- Portainer

## Deployment Flow

Local project files move into Git commits, then into the GitHub repository, then into GitHub Pages or Cloudflare Pages.

## Why Static Hosting Works

The browser does the work. The hosting provider only needs to serve the static files.

## Planned Hosting Options

### GitHub Pages

Best for the first deployment because it is built into GitHub.

### Cloudflare Pages

Best later when using a custom domain or subdomain.

Example future subdomain:

doom.stayz3ro.dev

## Lessons Learned

- Static sites are ideal for frontend-only experiments.
- Not every web project needs a VM or backend.
- GitHub can be used for both version control and deployment.
- Clean documentation makes a small project more valuable for a portfolio.
