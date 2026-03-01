# Brainstorm — Define Before You Build

A guided conversation to clarify what you're actually trying to build and why — before any planning, architecture, or code begins. Use this when starting something new, when a project feels directionless, or when you're not sure what you actually want.

The output is a clear **vision brief**: a written statement of the problem, the desired outcome, the constraints, and the options worth considering. This brief feeds directly into `/plan` when you're ready to build.

---

## What to do

Work through the following phases in order. Ask one question at a time. Wait for the answer before moving to the next question. Do not rush toward a solution — the goal of this phase is understanding, not building.

---

### Phase 1 — The Problem

Ask:
> "What problem are you trying to solve? Describe it in your own words — don't worry about how to solve it yet."

Listen for:
- Who has the problem (just you? a team? a household?)
- What currently happens without the solution
- What friction or pain point is driving this

If the answer is vague, ask one clarifying follow-up:
> "What does the problem look like on a bad day? Walk me through a specific example."

---

### Phase 2 — The Desired Outcome

Ask:
> "What does success look like? If this works exactly as you hope — what is different about your life or workflow six months from now?"

Listen for:
- Concrete, observable changes (not "it'll be better")
- Whether the goal is about saving time, reducing stress, learning something, or something else
- Whether there's a specific trigger that would make someone say "this worked"

If the answer is vague, ask:
> "How would you know, six months from now, that this was worth building?"

---

### Phase 3 — Constraints

Ask:
> "What are the constraints? Think about time, money, technical complexity, dependencies on other people or systems."

Also ask:
> "Is there anything this solution absolutely cannot do or touch?"

These define the box you're designing inside. Don't skip this — constraints often eliminate half the options immediately.

---

### Phase 4 — What You've Already Thought About

Ask:
> "Have you already thought about how you'd build this? What approaches came to mind, even if you weren't sure about them?"

This surfaces assumptions early. If the user already has a direction, explore why they chose it and whether it still holds given what's been said in Phases 1–3.

---

### Phase 5 — Options

Based on everything gathered, present 2–3 distinct approaches. For each one:

- **Name it** (something memorable, not just "Option A")
- **Describe it** in one sentence
- **State the tradeoff**: what it does well, what it sacrifices
- **Identify the risk**: what could go wrong or where it might fail

Do not recommend yet. Present the options neutrally first.

---

### Phase 6 — Recommendation

After presenting options, give a clear recommendation:

> "Based on what you've described, I'd recommend [option] because [reason tied directly to the problem and constraints stated above]. The main thing to watch is [specific risk]."

Be direct. Don't hedge. If the answer is genuinely unclear, say what additional information would resolve it.

---

### Phase 7 — Vision Brief

Produce a written summary in this format:

```
## Vision Brief — [Project Name]

### The Problem
[1–2 sentences. What is broken or missing, and for whom.]

### The Desired Outcome
[1–2 sentences. What is concretely different when this works.]

### Constraints
[Bullet list. Hard limits that shape the solution.]

### Options Considered
[Brief name + one-sentence description for each option explored.]

### Recommended Direction
[The chosen approach and the core reason for choosing it.]

### Open Questions
[Anything still unresolved that will need a decision before building starts.]
```

---

### After the brief

Ask:
> "Does this brief capture what you're after? Anything to add, change, or cut?"

Once confirmed, offer:
> "This brief is ready to feed into `/plan`. Want to start planning the build now, or do you need to sit with this first?"
