# Ground Work

## Notes

- clone repo and work in `dev` branch
- no direct pushes to `dev` branch. all changes will be made through PRs (pull requests)
- all PRs should be directed to `dev` branch
- branches should be pre-pended by its purpose

```
    # for chores
    chore/<branch-name>

    # for features
    feature/<branch-name>

    # for bugfixes
    bugfix/<branch-name>
```

- package import and local imports should be separated

```
    # Package imports
    import React from "react";
    import { NextSeo, NextSeoProps } from "next-seo";

    # Local imports
    import { Footer } from "@/components";
```

- always use absolute imports. app is configures to use `@/` which points to `src/` directory

```
    # ex.
    import { Footer } from "@/components";
```
