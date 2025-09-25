See how in both `tsdown-dist` and `vite-dist` the code is not minified as expected.

The `const one = this.el1?.getBoundingClientRect().height ?? 0;` line gets minified incorrectly as `let e=(this.el1?.getBoundingClientRect()).height??0;` which means if `this.el1` is null or undefined, it will throw an error instead of returning 0.
