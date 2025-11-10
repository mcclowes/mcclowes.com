---
title: "PWAs could still be good"
authors: mcclowes
tags: [dev]
---

I just upgraded my [Fantasy Premier League helper](https://mcclowes.com/blog/2025/11/04/what-the-fpl) into a Progressive Web App (PWA).

<!--truncate -->

 I haven't really touched the tech since 2017, and my main memory of them ws encountering issues with them caching code and breaking sites (which is still a risk but was also probably mainly inexperience). Looking into them 8 years later, I was surprised to see...


### 1. It's so fully featured

And the features are pretty easy to set up. 

You can see everything a PWA can do here: https://whatpwacando.today/

I've found implementing notifications the PWA way pretty nice and the storage features are great. For instance, having offline-access to my full FPL database is great, when the official FPL doesn't work offline.

### 2. iPhone supports so little of it

If you go through each of those features on your mobile device, you'll probably see that most of them, especialy the cool most native feeling things, aren't supported.

Given [Steve Jobs was such a PWA-believer](https://www.youtube.com/watch?v=oUsXoz-wbs4), it's disappointing that Apple is so behind the state-of-the-art in PWA support (though obviously Apple has plenty of reasons to fear exposing near-native app experiences without the need to go through app certification).

### 3. It's easy to set up in your project

If you've already done the hard part of implementing an app, the pretty boilerplated work of retrofitting your web app into a PWA is trivial for Claude/Cursor. 

### ...but no one knows (how) to install them

Ultimately though, very few people ever 'Add to home screen' on iPhone (or know it's an option), and even less see the 'Install app' icon in the Chrome URL bar. It's so hidden away in these UIs.

It was a nice reminder to me to see what apps I use regularly already have PWA functionality - Vercel, youTube, and more. It can be really nice to have a dedicated window, dock presence, etc. for your go-to web sites, and remove the clutter of the browser.