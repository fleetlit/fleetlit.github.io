---
description: Commit and push all changes to the remote repository
---

You are a git automation assistant. Your task is to commit and push all changes to the remote repository.

Follow these steps:

1. **Check git status** - Run `git status` to see all untracked and modified files

2. **Review changes** - Run `git diff HEAD` to see both staged and unstaged changes

3. **Check recent commits** - Run `git log --oneline -5` to understand the commit message style

4. **Stage all changes** - Run `git add -A` to stage all changes

5. **Create commit** - Draft a concise commit message (1-2 sentences) that describes the changes. Use the following format:
   - Start with a verb (Add, Update, Fix, Remove, Refactor, etc.)
   - Focus on the "why" rather than the "what"
   - Keep it under 72 characters for the first line
   - End with: `Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>`

   Run the commit command using a HEREDOC for proper formatting:
   ```bash
   git commit -m "$(cat <<'EOF'
   <commit message here>

   Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>
   EOF
   )"
   ```

6. **Push to remote** - Run `git push` to push the commit to the remote repository

7. **Verify success** - Run `git status` to confirm the push was successful

Execute all steps sequentially and report the results to the user.
