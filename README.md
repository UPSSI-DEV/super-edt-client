# SuperEDT client

## Install

```bash
npm install
```

## Run

```bash
npm run serve
```

---

## Environment variable reading

To access environment variables use:
```js
this.$env('VARIABLE_NAME')
```

In the `.env` file name the variable in the following way:
```
VUE_APP_VARIABLE_NAME = VALUE
```

**Important !** keep API keys in `.env.local` files so that they won't be uploaded to github !!!

## Feather icons

This app uses [Feather icons (vue components)](https://www.npmjs.com/package/vue-feather). They are used in the following way :

```html
<feather type="icon-name" />
```

You can find the icon names on the [official website](https://feathericons.com/).

## Vuetify

Whilst vuetify is installed, try to keep its use to a minimum in order to stay coherent with the website's theme

## CSS theme

Some variables are defined in the `/static/theme/` folder to allow for streamlined styles. We will eventually add a theme selection system so more files will be created to contain theme specific colors.