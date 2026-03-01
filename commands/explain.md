# Explain Code

Explain the selected or specified code as if the user will need to describe it to someone else. The goal is genuine understanding — not just "what it does" but "how it works and why it was written this way."

## Step 1 — Identify What to Explain
If the user has highlighted code or referenced a file, use that. If it's unclear, ask: "Which file or section would you like me to explain?"

## Step 2 — Start With the Big Picture
Before diving into lines, answer:
- What is the overall purpose of this code? What problem does it solve?
- Where does it fit in the project? What calls it, and what does it produce?
- What would break if this code didn't exist?

## Step 3 — Walk Through It Section by Section
Go through the code in logical chunks (not necessarily line by line). For each section:
- State what it does in plain English
- Explain any non-obvious decisions (why this approach vs another)
- Define any terms, patterns, or syntax that may be unfamiliar

If there are language-specific features being used (e.g., destructuring, async/await, generics, closures), explain them in context — not abstractly.

## Step 4 — Highlight What's Important to Remember
Point out:
- The most critical lines — the ones where the real logic lives
- Any gotchas or subtle behavior the code relies on
- Any assumptions the code makes about its inputs or environment

## Step 5 — Give It a Name
At the end, ask the user to summarize what the code does in one or two sentences in their own words. This isn't a test — it helps lock in understanding and reveals anything that's still unclear.

If their summary is missing something important, gently correct it and re-explain that part.

## Step 6 — Offer to Go Deeper
Ask: "Is there any part of this you'd like me to go deeper on, or anything that still feels unclear?"
