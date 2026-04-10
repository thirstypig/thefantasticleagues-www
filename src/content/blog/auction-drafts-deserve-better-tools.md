---
title: "Auction Drafts Deserve Better Tools"
description: "Snake drafts are fine. Auction drafts are art. So why does every platform treat them like an afterthought?"
date: 2026-04-28
author: "Jimmy Chang"
tags: ["drafts", "product"]
---

I'll die on this hill: auction drafts are the superior fantasy baseball format. Snake drafts are fine — like a sedan is fine. It gets you there. But auction drafts are the manual transmission sports car that rewards skill, strategy, and the occasional reckless gamble.

And yet, every major fantasy platform treats auction like an afterthought. A bolt-on feature that clearly got half the development time of the snake draft. We got tired of it, so we built something better.

## Why Auction Is Better (Yes, I'm Biased)

In a snake draft, your draft position determines 80% of your outcome. Pick first? Congratulations, you get the best player. Pick eighth? Good luck building around the 8th and 9th best players.

In an auction, everyone starts with $260. Every player is available to every manager. The question isn't "who falls to me?" — it's "how much am I willing to pay, and can I read the room?"

It's a game within the game. And in our NL-only league, it gets intense. The Dodgers alone have 5-6 players worth serious money. When someone nominates Mookie Betts, the entire dynamic of the draft shifts. Do you chase the star and blow your budget? Or do you let someone else overpay and pick up value later?

The strategy is deeper, the stakes feel higher, and no two drafts play out the same way. That's why our league has been doing auction for 23 years and nobody has ever suggested switching to snake.

## What's Wrong with Current Auction Tools

If you've done an online auction draft on Yahoo or ESPN, you know the pain. Here's my shortlist:

**No spending pace visibility.** You're 15 rounds in, you've spent $180, and you have 8 roster spots left. Is that good or bad? No idea, because the platform doesn't show you a spending pace indicator. You're doing mental math while trying to decide if Dustin May is worth $14.

**No value overlay.** How much is this player actually worth? Not what you feel like they're worth — what do the projections say? Current platforms don't show projected values alongside the bidding. You're bidding blind.

**Clunky nomination flow.** The nomination timer is too short. Or too long. The bid increments are annoying. The UI refreshes at the wrong time. You miss a player because you were scrolling. Classic.

**No post-draft analysis.** The draft ends, and that's it. No grades, no "you overpaid by $12 on Walker Buehler" feedback. You have to manually cross-reference your draft with projections to figure out if you drafted well. Nobody does this.

## What We Built

Our auction engine was the first feature we built, and it's still the one we're proudest of. Here's what makes it different:

**Real-time spending pace.** A live indicator shows each manager how their spending compares to where they should be at this point in the draft. Spent 70% of your budget with 60% of your roster filled? You'll see a warning. Ahead of pace with value picks? The indicator goes green. It's like a GPS for your budget.

**Value overlay.** Every player in the nomination queue shows their projected dollar value based on FanGraphs projections adjusted for your league's settings (NL-only, roster size, category scoring). When someone nominates a player, you instantly see if the current bid is above or below value.

**AI bid advice.** This one surprised even me. During the draft, the AI analyzes your current roster, remaining budget, category needs, and the player being nominated — then suggests a max bid. It's not a hard rule, it's a recommendation. And it's been remarkably accurate.

In our 2026 draft, the AI told me to bid up to $22 on Andy Pages. I got him for $3. The AI told me to stop at $35 on Walker Buehler. Someone else paid $38. Pages has been one of my best players. Buehler has a 9.45 ERA. The AI knew.

**Draft report.** After the last player is sold, the AI generates a comprehensive draft report. Every team gets a grade based on projected value versus actual spend. The report highlights steals (players bought well below value), overpays (we've all been there), and position-group analysis. It's the thing everyone screenshots and shares in the group chat.

**Sounds and visuals.** This sounds small, but it matters. When you win a player, there's a visual flourish and a sound effect. When someone goes all-in on their budget, the room knows. Auction drafts are supposed to be exciting — the UI should reflect that.

## The Numbers Game

Auction drafts generate a ridiculous amount of data, and we capture all of it. Every bid, every nomination, every timer tick. After 23 years, I can tell you exactly how much every player went for in every draft. I can tell you which managers consistently overpay for closers (looking at you, Diamond Kings). I can tell you the average price of a Dodger in our league over the last decade.

That data feeds the AI. That data feeds the keeper prep. That data is what makes the platform smarter over time.

## Snake Drafts Too (We're Not Monsters)

Look, we built a snake draft too. It's got auto-pick, pause/resume, an "On the Clock" indicator, and a clean draft board. It works great.

But between you and me? Auction is where it's at.

If you're running a league that's still doing snake because "auction is too complicated," I'd challenge you to try it once. Your league will never go back. And when they don't, we've got the tools to make it the best draft night of the year.

---

*Jimmy Chang once paid $47 for a pitcher who was placed on the IL three days later. He has been obsessing over auction draft tools ever since, presumably as therapy.*
