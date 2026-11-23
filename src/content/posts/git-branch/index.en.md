---
title: "Understanding Git Branches & History: merge, rebase, and cherry-pick"
date: 2025-11-23 16:01:51
lang: en
sourceHash: c29b4d279d014b63
translatedFrom: mixed
translationStatus: reviewed
---

Git is a distributed version control system for tracking changes across source code and data, used by nearly 95% of developers worldwide as their primary VCS.

Its core building blocks are **Repositories**, **Commits**, and **Branches**. A repository stores the entire history of a project; each commit captures a snapshot of the repository with a unique SHA hash; and branches let multiple lines of work evolve in parallel.

1. **Repository**: Holds the complete history of a project. Every local clone is a full-fledged repository capable of working completely offline.
2. **Commit**: An immutable snapshot of repository state identified by a cryptographic hash (commit ID).
3. **Branch**: A lightweight, movable pointer to a specific commit inside the commit DAG, isolating parallel workstreams cleanly.

## A Brief History: Why Branching Is Git’s Soul

Earlier centralized systems like CVS and Subversion made branching and merging slow and painful.

In 2005, after the commercial BitKeeper dispute forced the Linux kernel team to move on, Linus Torvalds built the first prototype of Git in roughly ten days with clear design goals:

- Nearly zero-cost branching and blazing-fast merging;
- Immutable, content-addressed history backed by a DAG and cryptographic integrity;
- Fully distributed replicas with no single central bottleneck.

That architecture shaped modern engineering culture: branch freely, experiment cheaply, merge cleanly, and throw away dead ends without fear. Under Junio Hamano’s long-term stewardship—and the rise of GitHub, GitLab, and Pull Requests since 2008—Git evolved from a kernel tool into a universal workflow (now gradually adding SHA-256 and stronger signing).

## Core Philosophy

- Branches are cheap sandboxes for experimentation.
- Commit history is a *narrative*, not a raw dump: teams should agree upfront whether they value faithful historical topology (`merge`) or a tidy linear story (`rebase`).
- Version control is for collaboration, debugging, and rollbacks—good commit messages explain *why*, not merely *what*.

## Mental Model Under the Hood

- Commits are immutable content-addressed nodes forming a **DAG** (Directed Acyclic Graph); branches are just movable pointers to commits.
- Three local areas explain almost every Git command: the **working tree**, the **staging area (index)**, and **`HEAD`**.
- Because commits are immutable, `rebase` and `amend` always create *new* commits with new SHAs and move branch pointers—which is why rewriting shared history causes pain.
- `git reflog` is your local safety net for recovering commits after accidental resets or rebases.

### Choosing a Branching Strategy

- **Trunk-based development (recommended for modern CI/CD)**: Short-lived branches (hours to days) merged frequently into `main` behind feature flags. Minimal merge conflicts and fast delivery, backed by strong automated tests.
- **GitHub Flow**: `main` + short-lived feature branches + PR + CI → merge (squash or merge commit). Clean and ideal for fast-moving web services.
- **Gitflow**: Long-lived `develop`, `release`, and `hotfix` lines—useful when maintaining multiple strict production release trains, though heavy for continuous deployment.

## History Operations: `merge` vs. `rebase` vs. `cherry-pick`

Every Git history command simply manipulates the **DAG** differently: `merge` changes topology, `rebase` rewrites nodes, and `cherry-pick` copies a single diff.

### `merge`: Preserve True History with a Merge Commit

`merge` creates a new commit with two parents, faithfully recording where branches diverged and rejoined without altering existing SHAs:

```
A---B---C (main)
     \
      D---E (feature)
```

After `merge`:

```
A---B---C-------M
     \         /
      D---E---
```

Resolve conflicts → `git add .` → `git commit`. Ideal for shared branches, auditability, and long-running release/hotfix branches.

### `rebase`: Replay Commits onto a New Base

`rebase` replays each commit from your feature branch onto the tip of the target branch, creating brand-new commits (`D'`, `E'`) while leaving the originals orphaned for garbage collection:

```
A---B---C (main)
     \
      D---E (feature)
```

After rebasing onto `main`:

```
A---B---C---D'---E'
```

Resolve conflicts → `git add .` → `git rebase --continue` (or `git rebase --skip`). Best for tidying up local feature branches before opening a PR.

### `git pull` vs. `git pull --rebase`

- `git pull` = `fetch` + `merge`, often littering history with noise like `Merge branch 'origin/main' into ...`.
- `git pull --rebase` = `fetch` + `rebase`, replaying your unpushed local commits neatly on top of upstream.

### Keeping a Local Feature Branch Up to Date

```
git checkout feature-a
git fetch origin
git rebase origin/master
# resolve conflicts -> git add -> git rebase --continue
```

This resolves conflicts early and keeps your PR diff crystal clear for reviewers. **Never rebase shared public branches (`main`/`master`)**, as rewriting shared SHAs breaks teammates’ local histories and risks overwriting work via force pushes.

## `cherry-pick`: Apply One Commit’s Diff as a Patch

> `cherry-pick` copies the diff of a specific commit onto your current `HEAD` as a brand-new commit with a new SHA.

It neither merges branches nor preserves parent pointers. Its classic use case is **backporting bug fixes** from `main` to stable release branches (commonly tagged `needs backport` or `needs cherry-pick` in open-source repos) or applying targeted cross-version hotfixes.

## Quick Summary

- **`merge`** — modifies DAG topology; optimizes for **historical truth**.
- **`rebase`** — rewrites DAG nodes; optimizes for **linear clarity**.
- **`cherry-pick`** — copies an individual diff; optimizes for **surgical backports**.

None of the three is universally “better”—pick the one that fits your team’s history policy and the job at hand.
