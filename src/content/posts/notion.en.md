---
title: Coding Philosophy
date: 2024-10-10 12:49:46
categories: 感想
tags: personal growth
lang: en
sourceHash: c7b38daf63e168a2
translatedFrom: mixed
translationStatus: reviewed
---

# Coding Philosophy

Every line of code we write tells a story. It reflects how we think, how we break down problems, and how deeply we understand the task in front of us. Beyond pure functionality, code embodies a philosophy—a set of principles that guides our decisions and shapes the software we build. This post explores the different stances developers take, from prioritizing elegance and simplicity to embracing pragmatism and speed, and how those trade-offs affect readability, maintainability, schedules, and team dynamics.

Weak engineers are often **sloppy** about their code—a clear symptom of underdeveloped engineering discipline.

What does sloppy code look like? Using different names for variables that mean the exact same thing; inconsistent naming across symmetric operations like CRUD; copy-pasting similar logic instead of extracting abstractions; leaving unusual edge-case logic completely undocumented; unbalanced module boundaries; or punching holes straight through a clean encapsulation (on thoughtful naming, see this [article](https://www.qtmuniao.com/2021/12/12/how-to-write-code-scrutinize-names/)).

**Lifecycle.** The longer a piece of code is meant to live, the cleaner it needs to be. Throwaway scripts can afford shortcuts—and conversely, only clean code earns a long lifespan.

- **Don’t downplay your work**

  Newcomers often assume their contributions matter less—and experienced engineers can feel the same way when stepping into an unfamiliar domain. In practice, many of the freshest ideas come from newcomers: they spot rough edges and room for improvement that veterans with entrenched habits no longer notice.

  Either way, your work carries real value. Even in the worst case where an approach fails, the community learns why that path doesn’t work. (And as a community, it’s on us to stay welcoming to newcomers.)

- **You don’t have to work under constant pressure**

  New frameworks and tools launch every single day, making it easy to fear falling behind the moment you slow down. That fear is misleading. Real rest makes you sharper—many of my best insights surface in the background when I step away from the keyboard.

  Most daily announcements are variations on existing ideas; genuinely revolutionary shifts only happen every few years. On this topic, Rich Hickey’s talk is well worth watching: [Hammock Driven Development](https://www.youtube.com/watch?v=f84n5oFoZBc).

# System Design

Connecting technical innovation with shifts in how teams organize and collaborate offers a powerful lens for understanding why architectures evolve the way they do.

### Technical Innovation and Changing Production Relationships

**The rise of containers and container orchestration:**

- **Context:** Traditional virtual-machine workflows became heavy and inefficient at massive fleet scale.
- **Need:** Large internet companies like Google needed a way for small teams to operate hundreds of thousands of servers reliably.
- **Solution:** Kubernetes made container orchestration practical, dramatically improving resource utilization and operational leverage.

This shift was not merely a technical upgrade—it transformed how engineering and operations teams collaborate at scale, unlocking genuine automation.

### Software Architecture and Organizational Structure

Software architecture mirrors team structure (**Conway’s Law**):

> “Organizations which design systems are constrained to produce designs which are copies of the communication structures of these organizations.”

The deepest value of strong architecture lies not just in technical elegance, but in aligning communication boundaries to elevate software quality and delivery velocity.

### Monolithic vs. Microkernel Debates

**Choices in OS kernel design:**

- **Monolithic kernels:** Built and maintained by large, tightly coordinated engineering teams—feature-rich, yet complex.
- **Microkernels:** Keep only the minimal core inside the kernel and push other capabilities to user-space services.

Behind the technical debate sit different collaboration models: well-resourced organizations can sustain sprawling monolithic cores, while decentralized communities naturally gravitate toward modular extension boundaries.

### Case Study

**IPVS, cgroups, and eBPF:**

- Many of these capabilities began as user-space concerns before steadily migrating into the kernel as performance and observability demands grew.
- That trajectory reflects both relentless performance engineering and the evolving collaboration model of the Linux ecosystem.
