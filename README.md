# jest-v26-codelab

Learning jestjs v26.x.x testing framework by examples

## Environment

`node`: `v14.16.0`

## How to run test only changed

`--onlyChanged`

Alias: -o. Attempts to identify which tests to run based on which files have changed in the current repository. Only works if you're running tests in a git/hg repository at the moment and requires a static dependency graph (ie. no dynamic requires).

```bash
npm t -- -o
```
