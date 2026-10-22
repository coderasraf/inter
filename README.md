# Lines & Current Jewellery Store

A static, responsive storefront build for Lines & Current, a minimalist jewellery brand, covering the homepage, a collection listing page, and a product detail page.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![Bootstrap](https://img.shields.io/badge/Bootstrap-4-7952B3?logo=bootstrap&logoColor=white) ![jQuery](https://img.shields.io/badge/jQuery-0769AD?logo=jquery&logoColor=white)

## Overview

Built in 2020 as a front-end page build for an online jewellery shop (necklaces, earrings, rings, bracelets). The repository name is `inter`, but the site itself is branded "Lines & Current". Pages use sample products and are intended for integration into an e-commerce platform.

## Features

- Announcement bar (free shipping threshold) and currency switcher (EUR / USD)
- Shop mega menu with categories (Necklaces, Earrings, Rings, Bracelets, Accessories) and "By Material" links
- Off-canvas mobile navigation
- Homepage hero, brand story, category tiles, collection highlight, and inspiration sections
- Product carousel built with Owl Carousel
- Collection listing page ("Liquid Love") with sort control and product grid
- Product detail page with jQuery exZoom gallery, price, material option, and Overview / Details / Info tabs written in vanilla JavaScript
- WebP images and custom Apercu font

## Tech Stack

- HTML5, CSS3
- Bootstrap 4
- jQuery, Owl Carousel, exZoom
- Vanilla JavaScript (tabs, mobile menu)
- Font Awesome

## Getting Started

No build step or package manager is required.

```bash
git clone https://github.com/coderasraf/inter.git
cd inter
```

Open `index.html` in your browser, or serve the folder with a static server such as the VS Code Live Server extension.

## Project Structure

```text
inter/
├── index.html             # Homepage
├── product-listing.html   # Collection page
├── product-details.html   # Product detail page
├── assets/
│   ├── css/               # default.css, style.css, tabs.css, responsive.css
│   ├── js/main.js         # Mobile menu, carousels
│   ├── fonts/             # Apercu
│   └── img/               # WebP images
└── vendors/               # Bootstrap, Owl Carousel, exZoom, Font Awesome
```

## Author

Built by **Ashraf Siddik**, Shopify developer & CRO specialist.
- Website: [ashraf-siddik.com](https://ashraf-siddik.com)
- GitHub: [@coderasraf](https://github.com/coderasraf)
