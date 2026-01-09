---
title: 'React Composition: A Vindication'
authors: mcclowes
tags: [react, programming, dev, patterns]
enableComments: true
---

Composition has always been my favourite pattern in React. For years, I pushed for it on every team I worked with. And for years, I got pushback.

<!--truncate-->

## The pattern that made sense

When I first encountered composition in React, something clicked. Instead of building monolithic components with props like `isEditing`, `shouldRenderButton`, `showHeader`, and `variant`, you build small, flexible pieces that slot together.

```jsx
// The prop hell approach
<Card
  isEditing={true}
  shouldRenderButton={user.canEdit}
  showHeader={!compact}
  variant="primary"
  headerVariant="large"
/>

// The composition approach
<Card>
  <Card.Header size="large" />
  <Card.Body>
    <EditableContent />
  </Card.Body>
  <Card.Actions>
    {user.canEdit && <EditButton />}
  </Card.Actions>
</Card>
```

The second version is longer, but it's also more readable. You can see the structure. You can reason about what's happening. You can change one piece without touching the others.

## The pushback

Every time I proposed this pattern, I'd hear the same objections:

**"It's too verbose."** Yes, it's more lines of code. But it's also more explicit. The intent is visible in the structure.

**"It's harder to enforce consistency."** True, if you're relying on a single component to guarantee layout. But composition gives you building blocks that can be combined in ways you didn't anticipate.

**"It's confusing."** This was the hardest one. People were used to components as black boxes. You pass props, you get output. Composition asks you to think about structure differently.

I understood the concerns. In the early days of React, composition felt like swimming upstream. The ecosystem was full of kitchen-sink components. The tooling wasn't there. The mental model was still forming.

## What changed

Two things matured that made composition not just viable, but obvious: Context and Providers.

React's Context API went from experimental to essential. Suddenly, you could share state across a tree of composed components without prop drilling. The pieces could communicate.

```jsx
<CardProvider>
  <Card>
    <Card.Header />
    <Card.Body>
      <CardContent /> {/* Can access card state via context */}
    </Card.Body>
  </Card>
</CardProvider>
```

Providers gave composed components a way to coordinate. Local state for ephemeral UI concerns. Global state for synchronised data. The pattern had infrastructure.

Compound components, render props, and headless UI libraries all built on these foundations. What felt like a niche preference became the standard approach for serious component libraries.

## Vindication

Fernando Rojo's recent talk ["Composition Is All You Need"](https://youtu.be/4KvbVq3Eg5w?si=8t9QfyL622F_a_4k) at React Universe Conf articulates this beautifully. He walks through how real-world applications like Slack's composer become unmaintainable when built with conditional rendering and boolean props. The alternative—small, composable pieces—isn't just prettier. It's more scalable, more testable, and more AI-friendly for pair programming.

It's validating to see the pattern I've been advocating for become mainstream. Not because I was right (though that's nice), but because it means the teams I work with now get it. The conversation has shifted from "why composition?" to "how do we compose this?"

Sometimes the best patterns just need time for the ecosystem to catch up.
