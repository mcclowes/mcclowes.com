---
title: "What the FPL!?"
authors: mcclowes
tags: [dev, fantasy football, fpl]
---

I've been working on a revamped version of my [Fantasy Premier League](https://fantasy.premierleague.com/) helper tool, **What the FPL!?** I initially built the [first version back in 2019](/blog/2019/01/15/what-the-fpl), and this version is a complete rebuild with a much more solid technical foundation. The original version used a simpler predicted points algorithm, but this rebuild takes a more sophisticated approach.

<!--truncate-->

The project is a serverless data pipeline that mirrors the Fantasy Premier League public API into a Supabase Postgres database. It's built with Next.js App Router and runs on Vercel, where scheduled GitHub Actions workflows invoke the collection routines through API routes. The collected data is stored as immutable snapshots, so I can analyze historical trends and make better decisions about my team.

![What the FPL!? dashboard showing player data](/img/posts/wtf/wtf1.png)

The architecture is straightforward: GitHub Actions hits a cron endpoint every hour, which triggers the data collector. The collector fetches fresh data from the FPL API, writes snapshots, and updates master tables. Everything is tracked in Supabase with job history, so I can see what's happening and when.

![Player statistics and gameweek information](/img/posts/wtf/wtf2.png)

The dashboard gives me a clean view of players, teams, and gameweek data. I can filter by position, team, status, and see historical trends through the snapshot system. But the real power of the tool comes from its team optimization features.

## Team optimization with custom metrics

What the FPL!? helps you optimize your team using my own custom metrics, including **expectation-weighted fitness**. This metric goes beyond simple point totals by weighting player performance against their expected output based on their position and upcoming fixture difficulty. It gives you a clearer picture of which players are truly outperforming their cost and situation.

The optimization engine uses a genetic algorithm to find a (probably) optimal team composition within your budget constraints. It starts with a population of random team configurations, then evolves them over multiple generations by:

1. **Evaluating fitness**: Each team is scored using the custom metrics, including expectation-weighted fitness
2. **Selecting parents**: The best-performing teams are selected to breed the next generation
3. **Crossover**: Combining successful team configurations to create new combinations
4. **Mutation**: Introducing random changes to explore new possibilities
5. **Iteration**: Repeating this process until the algorithm converges on optimal solutions

This approach lets you explore thousands of team combinations automatically, finding lineups you might never have considered manually. You can specify constraints like budget, required players, and formation preferences, and the algorithm will find the best team that meets those requirements.

![Historical data and player snapshots](/img/posts/wtf/wtf3.png)

The whole thing is open source and available on GitHub, with a full REST API for querying current and historical data. It's been a fun project to rebuild with modern tooling, and it's already helping me make better picks this season.

If you're curious about the original 2019 version, you can read about it [here](/blog/2019/01/15/what-the-fpl).

