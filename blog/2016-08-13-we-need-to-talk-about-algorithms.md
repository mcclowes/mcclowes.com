---
slug: we-need-to-talk-about-algorithms
title: 'We need to talk about algorithms'
description: 'Any system that ensures you get to see higher quality content sounds great — but are content algorithms all they are cracked up to be?'
authors: mcclowes
tags: [algorithms, social-media, personalisation, usability]
enableComments: true
---

Any system that ensures you get to see higher quality content — and content you're actually interested in — is pretty appealing, right? These days the word algorithm is bandied about a lot, as if they offer the holy grail of content personalisation, but are they all they're cracked up to be?

<!--truncate-->

## What are these 'algorithms'?

Algorithms are sets of instructions which, in the context of news and social media, automate choosing what is 'good' or 'relevant'. With the internet filled with more and more data every second, the ability to make decisions like these automatically is really important.

Here's a really simple example of an algorithm that might decide what order to present posts on a social network:

```
1) Score all posts, where:
    Post score = Number of likes / How long ago it was posted
2) Order posts by score, with the highest score first.
```

The instructions above mean that posts that get lots of likes in a short amount of time appear at the top of the list, and posts that don't get many likes disappear into obscurity. It's a crude algorithm, but it sort of works.

Algorithms can be far more complicated than that example, and it really all depends on how much data you have to work with. They usually use a combination of explicit and implicit data to make these decisions — information told directly by users, or gathered by observing user behaviour respectively.

The explicitly given data is usually used as the starting point of an algorithm — like when you first make an account and you're asked questions about what your interests are. Implicit data accrues as users engage with a platform, gathering information about what users like and interact with on an ongoing basis.

## Why are they used?

The goal of these algorithms is to ensure users get to see the good stuff, and they definitely have their advantages. Intuitively, users who see better content are more likely to keep using a service, so it makes sense that companies would want to use them.

But they're not perfect…

## Algorithms are too good

A key issue with content personalisation is that algorithms specialise and adapt to how users respond really well. Too well. With lots of data at their disposal and increasingly complex calculations, they're able to predict what users want to see very accurately.

But accuracy isn't always a good thing.

Crucially, users often don't behave how they wish they behaved. Although I'm as prone to watching click-bait videos as much as the next person, I generally want to surround myself with useful, constructive content — content that, unfortunately, is typically less eye-catching. If a user's behaviour doesn't match their actual goals, personalisation might not be a good thing.

Part of overcoming this is finding the right balance in the importance of explicit vs. implicit data.

## Algorithms aren't good enough

Although algorithms have got more and more sophisticated over time, they're still not perfect.

There are often not enough data points to make sense of content. Content evaluation benefits from network effects — the more people engage with content and platforms, the easier it is to evaluate content. If no one engages with content, it becomes much harder to differentiate between any two posts.

For example, Twitter has relatively low levels of engagement and very high quantities of content. How do you choose which tweet should be higher in a news feed when neither have any likes or re-tweets? Not so obvious.

More fundamentally, there's the problem of choosing the correct metrics. When trying to evaluate engagement, the metrics need to be appropriate, and ideally as sophisticated as possible.

A click-bait video might have a million views, but if all those viewers actually stopped watching 10 seconds in, that view count might be pretty misleading.

Choices of metric are ever shifting — YouTube recently decided that the number of views a video has isn't as important as watch time. Metrics are also controversial; Facebook video counts a view as any time someone watched ten seconds of a video, whereas YouTube counts a view at the 30 second mark.

Algorithms also inherently slow change. Algorithms are, by their nature, responsive; because they change based on behaviour, they form a feedback loop. This can lead to changes in user behaviour not being represented in what the user sees.

## Chronology works pretty well

As appealing as the possibilities algorithms present are, chronological lists of information are still really appealing. Firstly, users understand why they're seeing the information they're looking at in the order they are. That three day old post that, for some reason, seems to keep lingering around the top of your newsfeed? Not an issue with a chronological feed. So even if you have to skip, chronological feeds aren't redundant just yet.

Combined with the fact that people don't like missing content, chronological feeds make for a reassuring user experience.

However, with a purely chronological feed, content creators find that users simply don't see what they're posting due to the huge amount of content being churned out on Twitter, which also means they duplicate their posts throughout the day making the situation even worse.

## The situation is improving

Approaches are getting more sophisticated. Platforms are finding better ways of giving users more control over what they see. Most recently, Facebook modified their algorithms to ensure that clickbait articles are de-prioritised within their users' newsfeeds.

But we're not there yet.

## Further reading

- [The 10 algorithms that dominate our world](https://medium.com/@_marcosotos/the-10-algorithms-that-dominate-our-world-e36ddb15f6a4)
- [Reddit's comment sorting system](https://medium.com/hacking-and-gonzo/how-reddit-ranking-algorithms-work-ef111e33d0d9)
