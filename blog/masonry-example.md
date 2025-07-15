---
title: "Masonry Layout Example"
authors: mcclowes
tags: [example, design]
---

import Masonry from '@site/src/components/Masonry';

This is an example of how to use the new Masonry component for visual diary posts.

<!--truncate-->

## Using the Masonry Component

For visual diary posts with multiple images of varying sizes, you can now use the Masonry component instead of the Carousel:

```jsx
import Masonry from '@site/src/components/Masonry';

<Masonry 
  images={[
    "/img/posts/example/image1.jpg",
    "/img/posts/example/image2.jpg",
    "/img/posts/example/image3.jpg",
  ]}
/>
```

## Example Gallery

<Masonry 
  images={[
    "/img/posts/lcc/elvis1.jpg",
    "/img/posts/lcc/elvis2.jpg",
    "/img/posts/lcc/elvis3.jpg",
    "/img/posts/lcc/elvis4.jpg",
    "/img/posts/lcc/elvis5.jpg",
    "/img/posts/lcc/elvis6.jpg",
  ]}
/>

The masonry layout automatically arranges images in an optimal grid, perfect for visual diaries and photo collections. 