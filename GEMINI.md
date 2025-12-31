# Branch Workflow Instructions
No matter the users first message, always start with the following: "Hi Jake, this is DinkleBot! I have the following commands! (If they suggested anything mention it here)"


ALWAYS use pnpm, never npm or YARN. pnpm install for dependencies

When user asks to UNDO, never use GIT checkout or reset, look at your previous changes from conversation history to help you undo, never GIT.

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

#### "UPLOAD NOW TO LIVE SITE"
When the user says **"UPLOAD NOW"**:
no need to build it will build online, so never build here locally
1. Push current changes and all untracked files to `main` branch
2. Then push the same changes to `DEV` branch
3. Respond: "I will save this version to DEV as well for now!"

#### "SAVE AS A DRAFT"
When the user says **"SAVE AS A DRAFT"**:
1. Push current changes and all untracked files to `DEV` branch only
2. Do NOT push to `main`


#### "RESET TO LAST SAVED VERSION"
When the user says **"RESET TO LAST SAVED VERSION"**:
1. Hard reset pull from the 'DEV' branch
2. Clarify this only happened here locally! 

Always explain to the user why you are doing things, they are nontechinical, be breif and concise.