# Portfolio - Jake Schroder

This is a portfolio site made to display who I am, what I've worked on, and a bit of my creative
design side. Developed using [ReactJS](https://reactjs.org/), [NGINX](https://www.nginx.com/), [Docker](https://www.docker.com), and [MUI](https://mui.com/). If you like it, feel free to adapt it
for your own portfolio.

## Demo

Live demo at https://jake-schroder.com

## Requirements

Make, Docker Compose, [reCAPTCHA v2 API key](https://www.google.com/recaptcha/about/)

## Personalization

- Swap out Profile photo and project image files in /public/images
- Swap out resume and logo files in /public
- Edit social links in /src/components/SocialButtons.js and /src/components/Footer.js
- Edit project cards in /src/containers/ProjectBody.js

```javascript
const projectData = [
  {
    name: "Packrat",
    gitPage: "https://github.com/JakeSchroder/EverythingEverywhere",
    link: "http://www.packrat.shop",
    text: "ReactJS, NodeJS, ExpressJS, MongoDB, Python",
    img: "/images/packrat-card.png",
  },
  {
    name: "Portfolio Site",
    gitPage: "https://github.com/JakeSchroder/portfolio-jake",
    link: "https://jake-schroder.com",
    text: "ReactJS, NGINX",
    img: "/images/portfolio-card.png",
  },
];
```

- Put reCAPTCHA v2 API key in

```html
<Reaptcha sitekey="Your reCAPTCHA v2 API key" onVerify="{onVerify}" />
```

## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd portfolio-jake
```

Install dependencies

```bash
  make build-dev
```

Start the server

```bash
  make start-dev
```

Open in brower at http://localhost:3000

Stop the server

```bash
 make down-dev
```

## Acknowledgements

- [react-scroll](https://github.com/fisshy/react-scroll)
- [react-pdf](https://github.com/wojtekmaj/react-pdf)
- [react-hook-form](https://react-hook-form.com/)
- [reaptcha](https://github.com/sarneeh/reaptcha)
- [Animista](https://animista.net/)
- [Simple Icons](https://simpleicons.org/)
- [readme.so](https://readme.so/)
- [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
- [Awesome README](https://github.com/matiassingers/awesome-readme)
- [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)
