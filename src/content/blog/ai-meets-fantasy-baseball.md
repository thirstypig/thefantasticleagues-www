---
title: "AI Meets Fantasy Baseball"
description: "Everyone's slapping AI on their product. We actually built something useful — and it knows about your league, not just baseball in general."
date: 2026-04-21
author: "Jimmy Chang"
tags: ["AI", "product"]
---

Let's get the obvious out of the way: yes, everyone has AI now. Your toaster probably has AI. The difference between a gimmick and a useful tool comes down to one thing — does it know the context?

Generic fantasy advice is everywhere. "Start Mookie Betts." Thanks, genius. But what about in an NL-only keeper league where Betts costs $42 and you're $12 over budget in WHIP? That's where context matters.

That's what we built.

## The Problem with Generic AI

Most fantasy "AI" tools are just wrappers around the same projections everyone uses. They'll tell you that Freddie Freeman is good. Groundbreaking. They'll suggest you trade for a pitcher because your ERA is high. Revelatory.

They don't know that your league is NL-only, which means the player pool is half the size and every Dodger is overvalued. They don't know that you already spent $45 on pitching and have $12 left for four roster spots. They don't know that the guy you're trading with always overpays for closers.

Context isn't a nice-to-have. It's the whole game.

## What League-Context AI Actually Looks Like

We feed our AI real data from your league. Not hypothetical scenarios — actual rosters, actual auction prices, actual category standings. Here's what it does with it:

**Draft Reports.** After your auction draft, the AI grades every team's draft based on projected value versus what they paid. In our league's 2026 draft, one manager paid $38 for Walker Buehler coming off an inconsistent 2025. The AI flagged it as a C+ pick — not because Buehler is bad, but because $38 for a pitcher with his recent track record left that manager short on hitting budget. The AI saw the ripple effect that a human might miss in the moment.

**Weekly Team Insights.** Every Monday, each manager gets a personalized report card. Not just "your ERA is bad" — but "your ERA is 4.68, which ranks 8th in an 8-team league. Your best-performing pitcher is Michael Soroka (0.90 ERA), but Walker Buehler (9.45 ERA) and Dustin May (15.95 ERA) are dragging the category. Consider streaming a starter from the waiver wire."

That's the difference between data and insight.

**Trade Analysis.** When someone proposes a trade, the AI evaluates both sides using each team's specific needs. If Team A is flush in home runs but starving for steals, trading a power bat for a speed guy might look lopsided on paper but actually helps both teams. The AI sees the category landscape.

**Post-Trade and Post-Waiver Analysis.** After every trade is processed, the AI writes a short analysis explaining who won and why — based on the actual standings, not abstract player rankings. Managers love arguing about these.

## The League Digest: Your Monday Morning Read

This is the feature that surprised me most. The AI writes a weekly league recap — we call it the League Digest — that covers power rankings, hot and cold teams, category movers, and a "Trade of the Week" poll.

It's not a generic newsletter. It references actual managers by team name, actual stats from the past week, and actual standings movement. It knows that the Dodger Dawgs jumped two spots because Clayton Kershaw's replacement went 7 scoreless innings. It knows that the Skunk Dogs are fading because their steals leader just hit the IL.

Managers in our league started checking the digest every Monday before they even looked at the standings. Some of them argue about their grades in the group chat. Mission accomplished.

## What the AI Doesn't Do

Honesty time: the AI is not perfect, and we don't pretend it is.

It doesn't predict injuries. It doesn't know about clubhouse chemistry. It occasionally overvalues name recognition — it will rate a Mookie Betts roster spot higher than a breakout rookie even if the rookie has been better this season. We're constantly tuning the prompts to reduce these biases.

Every AI-generated piece of content is labeled. You always know when you're reading AI versus human analysis. We think transparency matters.

We also don't use AI for roster decisions. It won't auto-set your lineup or make waiver claims for you. Fantasy baseball is a game, and the decisions are the fun part. The AI is there to inform your decisions, not make them for you.

## The Tech Behind It

We use two AI providers: Google Gemini 2.5 Flash as our primary model and Anthropic Claude as a fallback. Both are excellent at structured analysis when you give them good data.

The key insight was prompt engineering with league context. Instead of asking "Is this a good trade?", we ask "Given that Team A is ranked 2nd in HR but 7th in SB, and Team B is ranked 1st in SB but 6th in HR, evaluate this trade in terms of category impact for both teams, considering their current roto point totals."

Same AI. Wildly different output.

## Not a Gimmick

We were skeptical about AI in fantasy sports. Most implementations out there are just ChatGPT with a baseball prompt taped to the front. What changed our minds was seeing the League Digest land in our league chat and watching managers actually engage with it.

It's not replacing the human element of fantasy baseball. It's enhancing it. More informed trades, more interesting debates, more reasons to check your league on a Monday morning.

That's not a gimmick. That's a feature.

---

*Jimmy Chang is a Senior Product Manager who watched his league's commissioner manually write a weekly recap for 15 years and thought, "there has to be a better way." There was.*
