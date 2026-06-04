---
title: 'Stop abbreviating in your APIs'
authors: mcclowes
tags: [api, design, engineering]
enableComments: true
---

A small plea: stop abbreviating field and method names in your APIs, SDKs, and config.

<!--truncate-->

The names you're shortening are usually already jargon. They're internal terms, half of them cryptic to anyone outside the team that coined them. Abbreviating them takes something that was merely obscure and makes it unreadable.

`org` instead of `organization`, `acct`, `qty`, `usr`, `addr`, `txn`, `cfg`. Each one saves you a few keystrokes once, at write time. It costs every reader a tiny guess, every time, forever. And the people reading your API don't share your context, so the guess is harder for them than it is for you.

Autocomplete fills in the long name for free. Search finds it. A new hire can read it without a glossary. The full word is the cheap option for everyone except the person typing it the first time, and that person has a tab key.

Write the whole word.
