# Round Robin

[![npm package](https://img.shields.io/badge/npm%20i-@xituru/round--robin-brightgreen)](https://www.npmjs.com/package/@xituru/round-robin)
[![version number](https://img.shields.io/npm/v/@xituru/round-robin?color=green&label=version)](https://github.com/xituru/round-robin/releases)
[![Release & Publish](https://github.com/xituru/round-robin/actions/workflows/release.yml/badge.svg)](https://github.com/xituru/round-robin/actions/workflows/release.yml)
[![License](https://img.shields.io/github/license/xituru/round-robin)](https://github.com/xituru/round-robin/blob/main/LICENSE)

Round robin match scheduler

- [x] No limitation in numbers
- [x] Each contestant meets every other participant

## Installation

#### NPM

```bash
$ npm install @xituru/round-robin
```

#### Yarn

```bash
$ yarn add @xituru/round-robin
```

#### Browser via CDN

```html
<script src="https://unpkg.com/@xituru/round-robin"></script>
```

## Usage

#### Node.js

```js
const { RoundRobin } = require('@xituru/round-robin')

const schedule = RoundRobin(['P1', 'P2', 'P3', 'P4'])
```

#### ES6

```js
import { RoundRobin } from '@xituru/round-robin'

const schedule = RoundRobin(['P1', 'P2', 'P3', 'P4'])
```

#### TS

```ts
import { RoundRobin } from '@xituru/round-robin'

const schedule: [string, string][] = RoundRobin<string>(['P1', 'P2', 'P3', 'P4'])
```

#### Browser

Install using [CDN](#browser-via-cdn)

```html
<script>
  const schedule = window.RoundRobin(['P1', 'P2', 'P3', 'P4'])
</script>
```
