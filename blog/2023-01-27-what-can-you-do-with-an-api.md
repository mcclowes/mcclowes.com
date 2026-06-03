---
title: "Documenting what you can do with an API"
authors: mcclowes
tags: [ai, product]
enableComments: true
---

Documenting how an API works is easy. Documenting what you can do with it is the hard part, and it's the part that actually matters.

<!--truncate-->

The "how" is mechanical. List the endpoints, their parameters, and what they return. Add sample code. Keep it accurate and up to date. Most reference docs stop here, and most are a chore to read because of it. They tell you every lever the machine has and nothing about why you'd pull one.

The "what" is harder because it starts from the developer's problem, not your endpoint list. Someone integrating your API doesn't want to know that `POST /transactions` exists. They want to automate their month-end close, or reconcile a bank feed, or surface a cash-flow forecast. The job comes first, and the endpoints are just how you get there.

Writing that kind of documentation means doing work the reference can't. You have to know the problems people bring to your API, walk through solving one end to end, and break the hard concepts into pieces someone can hold in their head. Sample code does a lot of heavy lifting here, as long as it's real, runnable, and covers the cases people actually hit. A snippet someone can paste and adapt is worth a page of prose.

At Codat, our APIs move financial data between accounting systems, banks, and the tools businesses run on. The reference tells you the shape of that data. The tutorials tell you how to turn it into something a business cares about, like automating bookkeeping or chasing late invoices. The second kind is harder to write and far more useful to read.

If you only have time to do one well, do the "what". People can usually reverse-engineer the "how" from a good example, but they rarely reverse-engineer the point of the thing.
