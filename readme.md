# World of Warcraft TypeScript data

The purpose of this package is not to include everything required for wow, but to provide everything I typically include in my own custom guild fansites. If there is something easy enough to add I might consider additional PRs, but you are probably best of forking your own version if you like what i've done here.

## Installation

This assumes using NextJS with TypeScript, other solutions may need other steps.

1. Add the package: `npm i @davidcraig/wowdata`

2. Add to NextJS Compiler

`.next.config.js`
```.next.config.js
const nextConfig = {
    ...
    // Add this
    transpilePackages: ['@davidcraig/wowdata'],
}

module.exports = nextConfig
```

`tsconfig.json`
```tsconfig.json
{
  "compilerOptions": {
    ...
    "paths": {
      "@davidcraig/wowdata/classes/*": [
        "node_modules/@davidcraig/wowdata/src/data/classes/*"
      ]
    }
}
```