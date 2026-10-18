# Labels

This file defines the team issue labels.
The team set has exactly 11 labels.

## Stage labels

| Label | Color | Meaning |
| --- | --- | --- |
| `stage:ready` | `#1D76DB` | Specced and approved to build. Blocked-by links set the order. A ready issue with open blockers is built after the blockers land. No `stage:ready` means backlog. |
| `stage:in-progress` | `#FBCA04` | Actively being implemented. |
| `stage:review` | `#8250DF` | In code review. |
| `stage:awaiting-staging` | `#0B6E4F` | Reviewed and passed. The staging PR is open and not merged. |
| `stage:awaiting-promotion` | `#0E8A16` | Merged into staging. Not yet on the default branch. |
| `stage:awaiting-acceptance` | `#5319E7` | Findings delivered on the issue. Waiting for the owner to read them. |

## Status and flag labels

| Label | Color | Meaning |
| --- | --- | --- |
| `blocked` | `#B60205` | Cannot proceed. Waiting on a dependency or an answer. |
| `needs-decision` | `#D93F0B` | A person must decide. The decision is an open question or a judgement call. |
| `owner-action` | `#5319E7` | The deliverable is an action only the owner can take outside the repository. |
| `security` | `#B60205` | Security hardening and research. |

## Review labels

| Label | Color | Meaning |
| --- | --- | --- |
| `review:none` | `#EDEDED` | No review requested on this issue or PR. |

## Not in the team set

The GitHub default labels are not part of the team set:

- `bug`
- `documentation`
- `duplicate`
- `enhancement`
- `good first issue`
- `help wanted`
- `invalid`
- `question`
- `wontfix`

Do not use a label for the issue kind.
Use the native GitHub issue type for the issue kind: Bug, Feature, Task, Chore, Docs, or Audit.
