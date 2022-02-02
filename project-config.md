# POKEDEX

# Mission

This project was developed so that I can apply the knowledge acquired from React. 



# ⛏️ Technologies and Install

## - <strong>React</strong>

‼️ <i> install with CRA (create-react-app) and template Typescript. </i>

<code>yarn create react-app pokedex --template typescript</code>

<hr>

## - <strong>ESlint</strong> by Airbnb

‼️ <i>For standardize the code</i>

<code>npx eslint --init</code>

    Answers for Eslint install:
    - To check syntax, find problems, and enforce code style.
    - Javascript modules (import/export)
    - React
    - Yes, Typescript
    - Browser
    - Use a popular style guide, Airbnb
    - JSON
    - Yes

<hr>

## - <strong>Prettier</strong>

‼️ <i>For auto format code.</i>

<code>
yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
</code>

//

<code>
yarn add eslint-config-airbnb-typescript -D
</code>

<hr>

## - <strong> Conventional Commits </strong>

‼️ <i>standardize the commits, link <a href="https://www.conventionalcommits.org/en/v1.0.0/">here</a> and install lint <a href="https://github.com/conventional-changelog/commitlint"> here </a></i>

<code>npm install --save-dev @commitlint/config-conventional @commitlint/cli
</code>

//

<code>
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js
</code>

<hr>

## - <strong> Husky </strong>

‼️ <i> Force standardization </i>

<code> yarn add husky </code>

and, prepare... (link <a href="https://github.com/typicode/husky">here</a>)

<code> npm set-script prepare "husky install" </code>

//

<code> yarn prepare </code>

//

<code> yarn husky add .husky/commit-msg 'yarn commitlint --edit $1' </code>

// 

commit default :
<code> git commit -m "..." --no-verify </code>

example commit :
<code> type(scope?): subject </code>

    Types:
        - build
        - chore
        - ci
        - docs
        - feat
        - fix
        - perf
        - refactor
        - revert
        - style
        - test

<hr>

## - <strong> Lint Staged </strong>

‼️ <i> More infos <a href="https://github.com/okonet/lint-staged">here</a> </i>

<code> yarn add -D lint-staged </code>

<hr>

## - <strong> Styled Components </strong>

‼️ <i> Styled for components </i>

<code>yarn add styled-components</code>

//

<code>yarn add @types/styled-components -D</code>

<hr>

## - <strong> Storybook </strong>

<code> npx sb init </code>