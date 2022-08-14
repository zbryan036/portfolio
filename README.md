# Developer Portfolio
## Usage
/style is for development only, and on deployment all styles will be in /assets.

For deployment, `npm run postcss-build`. This will process all postcss code into /assets/css/style.min.css. Change stylesheet links to point to this file.

For development, stylesheet links should point to /style/unpacked.css. Run `npm run postcss-dev` from the terminal to monitor changes to /style/style.css and update unpacked.css. Edit style.css using postcss syntax for the plugins listed below.

## Technologies
[jquery](https://github.com/jquery/jquery)

[fontawesome icons](https://fontawesome.com)

[postcss](https://github.com/postcss/postcss)
 - [postcss-cli](https://github.com/postcss/postcss-cli)
 - [autoprefixer](https://github.com/postcss/autoprefixer)
 - [postcss-short](https://github.com/csstools/postcss-short)
 - [precss](https://github.com/csstools/precss)
 - [rucksack](https://github.com/madeleineostoja/rucksack)
 - [postcss-if-media](https://github.com/arccoza/postcss-if-media)
 - [node-css-mqpacker](https://github.com/hail2u/node-css-mqpacker)