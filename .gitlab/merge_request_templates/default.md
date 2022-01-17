## Pull request checklist

_Put an `x` in the boxes that apply. You can also fill these out after creating
the MR. If you're unsure about any of them, don't hesitate to ask. We're here to
help! This is simply a reminder of what we are going to look for before merging
your code._

- [ ] Tests (`npm run test`) for the changes have been added (for bug fixes /
      features)
- [ ] Docs have been reviewed and added / updated if needed (for bug fixes /
      features)
- [ ] Lint (`npm run lint`) has passed locally and any fixes were made for
      failures
- [ ] Any dependent changes have been merged and published in downstream modules
- [ ] The changes has been tested from review app

## Pull request type

_Please do not submit updates to dependencies unless it fixes an issue._

_Please try to limit your pull request to one type, submit multiple pull
requests if needed._

Please check the type of change your MR introduces:

- [ ] Bugfix
- [ ] Feature
- [ ] Code style update (formatting, renaming)
- [ ] Refactoring (no functional changes, no api changes)
- [ ] Build related changes
- [ ] Documentation content changes
- [ ] Other (please describe):

## What is the current behavior?

_Please describe the current behavior that you are modifying, or link to a
relevant issue. If possible, provide a screenshot (a picture tells a thousand
words)_

- Sentry Issue Number: N/A
- ClickUp task ID: N/A

## What is the new behavior?

_Please describe the behavior or changes that are being added by this MR. If
possible, provide a screenshot (a picture tells a thousand words)_

-
-
-

## Does this introduce a breaking change?

- [ ] Yes
- [ ] No

_If this introduces a breaking change, please describe the impact and migration
path for existing applications below._

## Related PRs

_List related PRs against other branches (if any):_

| branch              | MR       |
| ------------------- | -------- |
| other_pr_production | [link]() |
| other_pr_master     | [link]() |

## Other information

_Any other information that is important to this MR such as screenshots of how
the component looks before and after the change._
