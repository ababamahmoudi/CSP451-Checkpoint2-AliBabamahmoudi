# Collaboration Workflow Report

## Repository Setup
- Forked the provided template repository.  
- Cloned the forked repository to local machine.  
- Added the upstream remote to keep track of changes from the original repository.  

## Branching Strategy
Created three feature branches to simulate a team workflow:

1. **`feature/html-structure`** – Implemented the HTML structure of the web application.  
2. **`feature/css-styling`** – Added CSS styling to improve the UI.  
3. **`feature/js-logic`** – Implemented JavaScript functionality for interactivity.

- Each branch was developed independently to mimic multiple developers working simultaneously.  
- Each branch had at least **3 commits**, included **50+ lines of functional code**, and contained **appropriate comments**.  
- Documentation files were updated where relevant.

## Pull Requests (PRs)
- Created a PR for each branch against `main`.  
- Each PR included:
  - A **descriptive title** following the project template.  
  - Completed PR checklist.  
  - Screenshots for UI changes (where applicable).  
  - Links to related issues.  

- **Code Review Simulation**:
  - Added at least **2 review comments per PR**.  
  - Requested changes on at least one PR.  
  - Approved and merged all PRs using **squash and merge** to maintain a clean commit history.

## Conflict Resolution
- Created an intentional conflict by modifying the same file in multiple branches.  
- When merging, a conflict appeared in `index.html`.  
- **Resolution Process**:
  - Opened the file and resolved conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`).  
  - Combined changes manually to preserve functionality from both branches.  
  - Committed the resolved version with a descriptive message.  
  - Screenshot of the conflict and resolution steps saved for documentation.  

- **Conflict Prevention Methods**:
  - Regularly pull latest changes from `main`.  
  - Communicate and coordinate branch work to avoid editing the same lines.  
  - Keep branches small and focused to minimize overlapping changes.

## Summary
This workflow simulates a 3-person team:
- Each developer worked on a separate feature branch.  
- PRs ensured code review and feedback.  
- Merge conflicts were handled systematically and documented.  
- Squash merges kept the `main` branch history clean and readable.  

This structured approach demonstrates effective collaboration, conflict management, and proper use of GitHub workflows in a team environment.
