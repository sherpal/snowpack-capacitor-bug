# Snowpack Capacitor Bug

This is a demonstration of a bug which happens when trying to use the [Geolocation plugin](https://capacitorjs.com/docs/apis/geolocation) of Capacitor together with [Snowpack](https://www.snowpack.dev/).

## Install things

First issue `npm install` to install all dependencies.

## Description

When issuing `npx snowpack dev` (or the alias here `npm run dev`), the following error will happen:

```
[23:17:36] [snowpack] Cannot find module ''../common/web-6a8c5dde.js'' from '/Users/adoeraene/Documents/snowpack-capacitor/node_modules/@capacitor/geolocation/dist/esm/index.js'
```

The error is not there (and everything works!) when building the application via `npx snowpack build` (or the alias here `npm run build`). You can issue the command, and start a server inside `build` directory, and you'll see in the console that your location is printed (given that you enable geolocation for the website).

## Further notes

The problem does also not appear if the project is a [webpack](https://webpack.js.org/) project instead.
