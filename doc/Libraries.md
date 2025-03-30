# My App

This Project is based on https://github.com/QuentinWatt/React-for-beginners-tutorial-series/blob/master/src/Components/Navigation.js
That Course is from 2020 and the technologies listed here have changed considerably


## Yarn

### Yarn vs NPM
In this I will be using Yarn to manage my packages. You may be tempted to use NPM instead of Yarn, however there are a few differences you'll need to keep in mind. Yarn commands tend to be shorter, and will have less output in the command line.

Here are some Yarn commands I will be running in the next lecture, and their NPM equivalent.

### Installing new packages:

Yarn:  `yarn add [package_name]` e.g. `yarn add tailwindcss`

NPM: `npm install [package_name]` e.g. `npm install tailwindcss`

Running scripts:

Yarn: `yarn [script_name]` e.g. `yarn build:css`

NPM: `npm run [script_name]` e.g. `npm run build:css` 

## Tailwind

Tailwind is a CSS Framework. It works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.

    `npm install tailwindcss @tailwindcss/cli`  

    `npx @tailwindcss/cli -i ./src/css/my-css.css -o ./src/css/tailwind.css --watch`

### References
- [Set up Tailwind](https://tailwindcss.com/docs/installation/using-vite)

## Font Awesome

Need to get icons in your web project quickly? Here’s the fastest and easiest way to use Font Awesome in your web-based projects

        npm i --save @fortawesome/fontawesome-svg-core
        npm i --save @fortawesome/free-solid-svg-icons
        npm i --save @fortawesome/free-regular-svg-icons
        npm i --save @fortawesome/free-brands-svg-icons
        npm i --save @fortawesome/react-fontawesome@latest

### References
- [Set Up Fontawesome with React](https://docs.fontawesome.com/web/use-with/react)


## React Spring

Never got round it. Something to explore in the future

### References
- [React Spring](https://www.react-spring.dev/docs/getting-started)
