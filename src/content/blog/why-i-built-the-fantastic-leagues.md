---
title: "Why We Built a Modern Fantasy Baseball Platform"
description: "The story behind building The Fantastic Leagues — born from years in a keeper league, a product manager's instinct, and the power of AI-assisted development."
date: 2026-04-14
author: "Jimmy Chang"
tags: ["fantasy baseball", "product"]
heroImage: "https://images.unsplash.com/photo-1529768167801-9173d94c2a42?w=1200&q=80"
heroAlt: "Baseball on the pitching mound at a major league ballpark"
heroCredit: "Photo by Tim Gouw on Unsplash"
---

> **TL;DR** — Every fantasy baseball platform we tried felt stuck in 2012. Yahoo, ESPN, and Fantrax all left serious leagues duct-taping spreadsheets to group chats. As a Senior Product Manager with 20+ years in a keeper league, I knew exactly what was missing. AI-assisted development made it possible to actually build it — without a dev team.

## Twenty Years of Fantasy Baseball, Zero Good Platforms

I've been part of a fantasy baseball league — off and on — for over two decades. Eight managers, NL-only, auction draft, rotisserie scoring.

The kind of league with its own traditions, inside jokes, and a shared Google Sheet that somehow holds everything together.

For most of those years, we used a combination of platforms to get by. **Yahoo for the draft. FanGraphs for standings. Spreadsheets for keeper tracking.** Group texts for trash talk. Email for commissioner announcements.

It worked. Sort of.

But it never felt like it was *built for us*.

## The Saturday Morning That Started Everything

Last season, I watched our commissioner spend a Saturday morning cross-referencing auction results from Yahoo with custom keeper rules in a spreadsheet.

Then he manually entered values into FanGraphs to track category standings. The same tedious work he'd been doing for over a decade.

I'm a Senior Product Manager by trade. I've spent my career identifying **problems worth solving** and figuring out the right way to solve them.

This felt like one of those problems — a gap that nobody was filling because the incumbents had gotten comfortable.

## Why Yahoo, ESPN, and Fantrax Aren't Enough

Yahoo's auction draft still feels like it was designed in 2009.

ESPN's commissioner tools are buried under six menus. Fantrax has features but makes everything feel like filing taxes.

And none of them talk to each other.

> The tools hadn't improved in years. The platforms had stopped innovating. But the need for something better was obvious to anyone running a serious league.

If you're managing a keeper league with custom rules, historical data, and managers who have opinions about everything — **none of these platforms were built for you.**

## How a Product Manager Learned to Vibe Code

Here's the part that would have sounded crazy two years ago: I didn't hire a development team.

I learned to build it myself — with AI.

[Claude Code](https://claude.ai/claude-code) made it possible for someone with a product mindset but no traditional engineering background to actually ship software. Not toy projects — **real, production-grade applications** with databases, authentication, real-time features, and API integrations.

That's what "vibe coding" means to me.

It's not about writing every line by hand. It's about knowing *what* to build, *why* to build it, and letting AI handle the *how*.

## Why Domain Knowledge Beats Coding Knowledge

The product instinct matters more than the syntax.

Knowing that auction drafts need a **spending pace indicator** — that insight comes from 20 years in a keeper league, not from a coding bootcamp.

Knowing that commissioners need an audit log — that comes from watching disputes unfold in group chats, not from reading a requirements document.

The barrier between "I know exactly what this should be" and "it exists now" has collapsed.

That's the unlock.

## The Auction Engine: Built Because Nobody Else Would

We didn't start with a business plan or a pitch deck. We started with the problems I knew by heart.

The first thing we built was the [auction engine](/#features). Not because it's the most complex feature, but because it's **the most neglected** on every other platform.

Every online auction I've done has felt clunky: slow bid updates, no spending pace indicator, no way to see if you're getting value or overpaying.

We wanted something that felt alive — real-time bids, AI-powered value overlays, and a spending pace tracker that tells you if you're about to go broke chasing Mookie Betts.

## Real-Time Standings That Actually Reflect Reality

We connected directly to the MLB Stats API.

When Michael Soroka throws 7 scoreless innings for the Diamondbacks, your category standings update that night — not 24 hours later.

Your league's roto points reflect *reality*, not yesterday's reality.

That sounds basic. But try getting that from Yahoo.

## Commissioner Tools for Real Commissioners

Keeper prep workflows that don't require a spreadsheet.

Financial tracking that every manager can see. An audit log that timestamps every roster move.

**The tools a commissioner actually uses** — not the tools a product manager at Yahoo imagined they might use.

## Adding AI That Knows Your League

About six months in, we connected the platform to Google Gemini and Anthropic Claude. Not as a gimmick — as a genuine analysis tool.

We fed it real league data: rosters, auction prices, category standings, player projections.

And we asked it to do what our commissioner had been doing in his head for years — evaluate trades, grade draft picks, write a weekly league recap.

## Why Context Is the Whole Game

Most fantasy "AI" tools are just ChatGPT with a baseball prompt.

They'll tell you Freddie Freeman is good. Groundbreaking.

Our AI knows your league is NL-only, which means the **Dodgers' depth creates a scarcity premium**. It knows your team spent $42 on pitching and is ranked 7th in WHIP. It knows the manager you're trading with always overpays for closers.

> Same AI. Wildly different output. Context is the difference between generic advice and league-context intelligence.

## The Monday Morning Digest Nobody Asked For

League-mates started checking the [AI insights](/#features) tab every Monday morning.

The weekly digest became a thing — team grades, hot and cold streaks, category movers, and a "Trade of the Week" poll that gets managers arguing.

The AI had opinions. And they were informed ones — because it had context that generic tools don't.

Managers were arguing about their grades in the group chat by Tuesday.

Mission accomplished.

## What's Next: Building in the Open

We're building The Fantastic Leagues in the open because we believe the best products come from **real users solving real problems**.

Every feature exists because someone in our league needed it, or because a pain point had been ignored for too long.

If you run a serious fantasy baseball league and you're tired of duct-taping three platforms together, we built this for you.

[Come draft with us.](/discover)

---

*Jimmy Chang is a Senior Product Manager and fantasy baseball enthusiast who discovered that AI-assisted development is the ultimate power-up for product people with strong opinions about auction drafts.*
