---
title: "The use of genetic AI in the balancing of competitive multiplayer games"
authors: mcclowes
tags: [blog]
---

![Screenshot of the game in progress](/img/posts/sigil/sigil.png)

<!--truncate-->

import PDFViewer from '@site/src/components/PDFViewer';

## Abstract

### Context/Background

In the increasingly profitable competitive multiplayer games industry, ensuring
products are fun, challenging and fair can be key to a games success. Traditionally, measuring and improv-
ing the balance of games has been costly in terms of both time and money, requiring many man-hours and
large teams. Automated approaches to the process could improve game quality whilst offering ongoing
time and money savings - a huge advantage to an ever-growing pool of game developers.

### Aims

This project aims to highlight the potential for improving gameplay balance within multiplayer
competitive games by automating the highlighting of potential balance issues. More specifically, the
project explores how imbalances can be highlighted with data gathered by playing Artificial Intelligence
agents against one another iteratively.

### Method

This project tests the proposed approach on a two-player card game typical of the competitive
multiplayer genre, developed for the purposes of this research. A Genetic Algorithm-improved Artificial
Intelligence was developed to play this game. Through pitching pools of the AI against one another and
recording metricised data about that gameplay, the information needed to analyse in-game cards was gath-
ered. This data was used to draw conclusions about the games mechanics, enabling accurate manual game
design changes.

### Results

Gathered data presents clear issues with the initial in-game tools, allowing adjustment of the
mechanics accordingly. Over several rounds of this balancing process, a quantifiably more balanced ver-
sion of the game had been achieved.

### Conclusions

The success of the balancing process suggests that the proposed new approach to game
balancing is viable. The clarity with which test data highlighted issues, combined with the speed in which
this data was gathered, make the technique particularly effective.


[See the code on GitHub](https://github.com/mcclowes/knights-and-crosses/tree/master)


<PDFViewer 
  src="/pdf/genetic-ai-dissertation.pdf"
  title="Genetic AI Dissertation PDF"
  height="700px"
  showDownload={true}
/>
