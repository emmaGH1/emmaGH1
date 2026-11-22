# for judges and automated reviewers

every scored claim <name> makes, where it lives in the code, the test that checks it, and the command that shows it. commands run from a fresh clone. what the sponsor supplied and what we added are kept apart.

## one command for the live claims

```bash
node scripts/check-live.mjs
```

node 20+, nothing to install, no account, no money. it checks <what: the contract on mainnet, the live app, the sponsor api run…> and prints pass or fail for each. expected last line: `<n> of <n> passed.`

## claims, code, tests

| claim | code | test | show it |
|---|---|---|---|
| <plain sentence> | `<path>` | `<test file or name>` | `<command>` or <live link> |

## what's live and where

<mainnet / production / testnet, per part, with links. anything not live is listed here, plainly.>
