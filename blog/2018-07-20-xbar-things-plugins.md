---
title: "xbar plugins for Things 3"
authors: mcclowes
tags: [dev, open source, productivity]
---

import GitHubRepoCard from '@site/src/components/GitHubRepoCard';

<GitHubRepoCard repo="matryer/xbar-plugins" />

<!--truncate-->

I've always been frustrated by how productivity apps force you to open them to see what you need to do. When I'm working, I want to see my tasks at a glance without switching contexts or losing focus.

That's why I built xbar plugins for Things 3 - scripts that display your tasks directly in the macOS menu bar, so you can see what's due today or what's in your inbox without ever opening the app.

## The solution

The plugins do a few simple things well:

1. **Display tasks in the menu bar**: See your tasks right in your macOS menu bar, updated every 60 seconds. No need to open Things 3 to check what's due.

2. **Complete tasks quickly**: Mark tasks as complete directly from the menu bar dropdown. Click a task, and it's done.

3. **Quick actions**: Create new todos, log completed tasks, and open Things 3 without leaving your current workflow.

There are two versions: one for your "Today" list and one for your "Inbox". Both work the same way - they use AppleScript to talk to Things 3 and pull your tasks into the menu bar.

## Technical implementation

The plugins are simple bash scripts that use AppleScript to interact with Things 3. They check if Things 3 is running, fetch your tasks, and display them in xbar's menu bar format.

The scripts limit results to 20 todos to keep the menu manageable. If you have more than 20 tasks, you'll see a "View more..." option that opens Things 3 directly.

## Try it out

You can find the plugins in the [xbar-plugins repository](https://github.com/matryer/xbar-plugins):

- [Things 3 Today](https://github.com/matryer/xbar-plugins/blob/aae40dc5daf278d155703560854a749ce5e99c38/Lifestyle/Things/thingstoday.6s.sh) - Shows tasks due today
- [Things 3 Inbox](https://xbarapp.com/docs/plugins/Lifestyle/Things/thingsinbox.6s.sh.html) - Shows tasks in your inbox

Both plugins are available through the [xbar plugin browser](https://xbarapp.com/docs/plugins/Lifestyle/Things/thingsinbox.6s.sh.html), or you can download them directly from GitHub.

---

**Links:**
- [xbar-plugins repository](https://github.com/matryer/xbar-plugins)
- [Things 3 Today plugin](https://github.com/matryer/xbar-plugins/blob/aae40dc5daf278d155703560854a749ce5e99c38/Lifestyle/Things/thingstoday.6s.sh)
- [Things 3 Inbox plugin documentation](https://xbarapp.com/docs/plugins/Lifestyle/Things/thingsinbox.6s.sh.html)









