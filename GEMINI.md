# Branch Workflow Instructions

## Protected Branches
**NEVER make code changes if you are on:**
- `main` branch
- Any `backup` branch (e.g., `backupDec30th`)

If changes are requested while on a protected branch, inform the user:
> "I'll switch to the DEV branch to make these changes."

Then switch to `DEV` before proceeding.

## Development Workflow

### Preview the Website
Run the development server to preview changes, Ensure you are in the DEV branch when asked to see it! :
```bash
pnpm dev

```

### Commands

#### "UPLOAD NOW"
When the user says **"UPLOAD NOW"**:
1. Push current changes and all untracked files to `main` branch
2. Then push the same changes to `DEV` branch
3. Respond: "I will save this version to DEV as well for now!"

#### "SAVE AS A DRAFT"
When the user says **"SAVE AS A DRAFT"**:
1. Push current changes and all untracked files to `DEV` branch only
2. Do NOT push to `main`
