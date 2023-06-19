---
slug: mailto-links
title: "Creating mailto: links that actually work"
description: "A comprehensive guide to creating mailto: links that work across all email clients."
authors: mcclowes
tags: [ai, product]
---

*mailto:* provides a way of creating hyperlinks in websites that will tell your computer to open the default mail client and create a new email without the user having to copy and paste the email address. You can even pre-fill the message subject and content.

<!--truncate-->

A simple mailto: hyperlink looks something like this:

```
<a href="mailto:example@email.com">Email me</a>
```

You can read the full RFC documentation [here](https://tools.ietf.org/html/rfc2368).


Pretty useful. And it seems simple at first. But differing implementations across email clients can make it a deceptively difficult to create a mailto: link that works everywhere.

You might have a link opening fine in Mail on a Mac, only to realise that the links no longer work for Outlook on a PC. And then you turn to Stack Overflow where you decide you should probably be using semi-colons, not commas, but no one can really agree. Then you promptly just give up.

Even the Wikipedia page for mailto: gives instructions that won't work by default on Outlook (which requires its users to actively turn on commas separation of email addresses).

## Getting it right

Here is an example of a complex, robust, href link:

```
mailto:example@email.com%3B%20other@email.com?cc=another@email.com%3B%20someother@email.com&bcc=mother@email.com%3B%20brother@email.com&subject=Your%20email%20subject&body=Content%20of%20your%20email
```

[Try it out!](https://codepen.io/mcclowes/pen/MZaREd)

Notice, we're not using the actual characters for commas, semi-colons, whitespace, ampersands…

## Structure

That mess just above is a bit hard to read(!), so let's break it down.

```
mailto:[to][%3B%20to][?header=value][&amp;header=value]
```

### To

Sets the recipient(s) of the email. Separate multiple email addresses with %3B. This is the encoded character for a semi-colon.

There is also a 'to' header, which gives you an alternative way of setting email address to include in the to field of your email. Don't use it, Outlook seems to ignore it or treat it as a cc.

```
mailto:example@email.com
mailto:example@email.com%3B%20other@email.com
```

### Headers

Headers allow you pre-fill other content of the email:

- cc
- bcc
- subject
- body

#### cc

Email addresses to cc into the email. Separate multiple email addresses with `%3B%20`.
```
mailto:example@email.com?cc=other@email.com
mailto:example@email.com?cc=other@email.com%3B%20another@email.com
```

#### bcc

Email addresses to bcc into the email. Separate multiple email addresses with `%3B%20`.

```
mailto:example@email.com?bcc=other@email.com
mailto:example@email.com?bcc=other@email.com%3B%20another@email.com
```

#### subject

Sets the subject field of the email. Replace whitespace with `%20`.

```
mailto:example@email.com?subject=Complex%20mailto%20link
```

#### body

Sets the body of the email. Replace whitespace with `%20`.

```
mailto:example@email.com?body=Content%20of%20your%20email
```

---

## TL;DR

Follow this example:

```
mailto:example@email.com%3B%20other@email.com?cc=another@email.com%3B%20someother@email.com&bcc=mother@email.com%3B%20brother@email.com&subject=Your%20email%20subject&body=Content%20of%20your%20email
```

- Separate email address with `%3B%20`
- Separate headers with `&amp;`
- Replace all spaces with `%20`
- Do not use the `to=` header