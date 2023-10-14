#!/usr/bin/env node

import compile from "./compile";

(() => {
  const args = process.argv.slice(2);
  compile(args);
})();
