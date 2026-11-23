---
title: Is Vibe Coding the Future of Software Engineering?
date: 2025-09-05 22:05:43
tags:
lang: en
sourceHash: b932e1dd27d191e9
translatedFrom: zh
translationStatus: reviewed
---

Vibe coding—popularized by AI researcher Andrej Karpathy in 2025—is a style of software development where developers steer large language models (LLMs) in natural language to generate, refine, and debug code, shifting focus from manual typing toward conversational, higher-level problem solving.

**Treating “feature delivery speed” as the primary bottleneck of product development is a misconception.**

The real strength of vibe-coding tools is letting someone spin something up quickly without an engineering team. Plenty of hype says exactly that:

“Someone built a working tech business to a million dollars in revenue using only AI, without hiring a single software engineer.”

It sounds enticing. Let’s take the claim apart carefully.

---

## Prototypes vs. Products

At the prototype stage, vibe coding genuinely shines. It gets an idea onto a screen fast so you can test whether it is worth pursuing. Yet prototypes are disposable by nature.

Even when the direction is right, a prototype cannot simply turn into a product. A prototype optimizes for *cheap and fast*, not *reliable and durable*. It can be rough, buggy, or even crash—none of that matters, because its only job is communicating an idea.

A product is an entirely different beast. It has to **deliver value continuously**:

* Poor experience? Users leave for an alternative.
* Too many bugs? Users churn.
* Outright outages? Nobody pays for it.

In the end, quality is non-negotiable. Retention is the life-or-death metric of any product.

---

## How Successful Products Actually Emerge

Very few winning digital products follow a straight line—they emerge from countless experiments.

Take Amazon: books, then music, video, hardware, cloud. In hindsight it looks inevitable, yet look inside their culture and you find thousands of experiments and iterations.

The crux: **nobody knows in advance which feature or direction will work.** All we can do is keep testing, keep what works, and cut what doesn’t.

---

## The Story of Gmail

Paul Buchheit famously built the first Gmail prototype in just hours—and pulled off a similar feat with AdSense—all written by hand. Yet looking closely at the history, neither came from a neat master plan.

“Over the two and a half years before Gmail launched, we got a lot of things wrong,” Buchheit recalled. “By launch, we had rewritten the frontend about six times and the backend three times. I’d just write code, ship a feature, and watch how people reacted. Usually everyone—myself included—ended up hating it, especially my own ideas, but we learned from it and pivoted fast.”

In other words, they walked down countless dead ends and threw away version after version before breaking through. Nobody knew ahead of time.

---

The exact same dynamic applies not only to individual features, but to entire product lines.

Outside of Search, most of Google’s landmark products began as experiments—Gmail, AdSense, even Workspace. Behind every hit lie a dozen failures, and behind those lie hundreds of quiet attempts that never saw the light of day.

Google Reader, Microsoft Math Solver—all gone. Yet tech companies keep experimenting, because trial and error is the only reliable path to discovering an enduring product.

---

## Validation and Communication

Product development is continuous discovery: first validating an idea, then validating whether a change actually moves growth, revenue, or retention.

The catch is that **validation takes time**.

Leah Tharin shared her experience working on products with tens of millions of users: even at massive traffic, the bottleneck is waiting for experiments to reach statistical significance. Changing homepage copy might yield a signal in hours; modifying a complex workflow deep in the funnel takes weeks or months.

Imagine coding speed jumped 10× overnight—would growth accelerate 10×? Aside from trivial landing-page tweaks, most experiments still wait on real user behavior to settle. Nor can you simply run infinitely many experiments at once without drowning your metrics in noise.

The real bottleneck is not knowing *what* to build. No team nails the right path on day one.

What if the direction *is* clear? In theory you lock scope, sign the contract, and build smoothly. In reality:

* We frequently sprint at full speed in the wrong direction.
* Poor communication doubles the cost through rework.
* We build mountains of low-value features that barely move the needle in hindsight.

Even with twenty years of experience, you rarely know true cost up front because you don’t yet know how well the team will collaborate—and collaboration quality dwarfs scope in determining real cost. Misalignment triggers rework, and rework does not grow linearly; it compounds in reverse.

For example: start with 100 hours of work, add 30% rework per cycle, and after four rounds you are at 285 hours. Speeding up that initial 100 hours barely dents the total. Letting AI rewrite code only postpones the bill—leaky abstractions, missing observability, and fragile integrations always collect their interest eventually.

---

## Coding Speed Was Never the Bottleneck

Vibe coding makes two promises:

1. You get code faster.
2. You don’t need to hire expensive engineers.

If the goal is merely “throw an interface together,” vibe coding is a real shortcut.

But building a product was never about finishing the typing—it is about solving real user problems reliably and at scale. That depends on disciplined experimentation, maintainable systems, sound incentives, and clear command of growth, revenue, and retention. Typing speed was never the constraint.

Those promises sound seductive precisely because they answer the easy question while dodging the hard one: *what problem are we actually supposed to solve?*

So the bottleneck was never “coding too slowly.” It has always been:

* Not knowing which bets are worth making (**the validation bottleneck**).
* Failing to align clearly on what we are building (**the communication bottleneck**).
