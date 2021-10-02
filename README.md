# Ground Work

## Notes

- clone repo and work in `dev` branch
- no direct pushes to `dev` branch. all changes will be made through PRs (pull requests)
- all PRs should be directed to `dev` branch
- make sure to pull from destination branch before creating PR
- run `yarn lint` and `yarn build` before creating PR
- branches should be pre-pended by its purpose

```bash
# for chores
chore/<branch-name>

# for features
feature/<branch-name>

# for bugfixes
bugfix/<branch-name>
```

- package import and local imports should be separated

```js
// Package imports
import React from "react";
import { NextSeo, NextSeoProps } from "next-seo";

// Local imports
import { Footer } from "@/components";
```

- always use absolute imports. app is configures to use `@/` which points to `src/` directory

```js
// ex.
import { Footer } from "@/components";
```
