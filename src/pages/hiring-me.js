import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { usePageTracking } from '@site/src/hooks/usePostHog';

import styles from './hiring-me.module.scss';

const greens = [
  {
    title: 'Strategy, design, and code in one head',
    body: "I've shipped as an engineer, a designer, and a product director. You get someone who can sit with the team, sketch the flow, and reason about the trade-offs without three hand-offs in between.",
  },
  {
    title: 'Intuition led, data backed',
    body: 'I move on instinct early and use data to check my work — not the other way around. That makes me fast in the fog and willing to commit before everything is provable.',
  },
  {
    title: 'I think in systems',
    body: "I'm drawn to the structure underneath the surface — how incentives, tools, and people actually interact. I'd rather fix the system that keeps producing the bug than fix the bug ten times.",
  },
  {
    title: 'Comfortable with ambiguity',
    body: "Zero-to-one, messy mandates, undefined problems — that's where I do my best work. I can turn a vague pull into a direction the team can act on.",
  },
  {
    title: 'Craft as a default, not a phase',
    body: "I care how things feel to use, read, and live inside. Polish isn't a final sprint for me; it's how I work the whole way through.",
  },
];

const reds = [
  {
    title: 'I get bored of steady state',
    body: "Pure operational maintenance — keeping a stable thing stable — drains me. I'm most valuable when something needs building, fixing, or rethinking.",
  },
  {
    title: 'I commit before it feels safe',
    body: "Moving on intuition means I'll sometimes be confidently wrong. I reverse fast when the data disagrees, but if you need every call pre-justified, we'll grind.",
  },
  {
    title: 'I care about craft, sometimes past the deadline',
    body: "Left unchecked I'll over-invest in how something feels. I need a counterweight — a deadline, a partner — to tell me when good enough is genuinely enough.",
  },
  {
    title: 'Generalist, not a deep specialist',
    body: "My edge is moving between domains. If you need the single deepest expert in one narrow field, that probably isn't me — and I'll tell you so.",
  },
  {
    title: 'I push on the why',
    body: "I'll question a mandate before I execute it. That's an asset when the why is shaky and friction when you just need the thing done, no questions asked.",
  },
];

const blueprint = [
  {
    k: 'How I make decisions',
    v: 'Feel first, then test. I form a quick opinion, hold it loosely, and let evidence move me. Reversible decisions I make fast; one-way doors I slow down for.',
  },
  {
    k: 'How I like to work',
    v: 'Make, break, remake. Short loops, real artifacts, frequent contact with reality. I trust iteration more than theory and prototypes more than decks.',
  },
  {
    k: 'What I need from you',
    v: 'A real problem worth solving, the autonomy to find the route, and someone honest enough to tell me when I am wrong. Direction over instruction.',
  },
  {
    k: 'Where I add the most',
    v: 'Ambiguous, early, cross-functional work — aligning a team on what matters, then building the thing that proves it. Zero-to-one and one-to-rethought.',
  },
  {
    k: 'Where I add the least',
    v: 'Highly defined, single-discipline roles with little room to question scope. I will do it, but you are not getting my best leverage.',
  },
  {
    k: 'How to get the best from me',
    v: 'Bring me in early, give me the why, and trust the intuition you hired. Push back hard — I respect it and I will return the favour.',
  },
];

export default function HiringMe() {
  usePageTracking('Hiring Me', {
    page_type: 'hiring',
    timestamp: new Date().toISOString(),
  });

  return (
    <Layout
      title="Hiring me"
      description="An honest blueprint for working with me — the pros, the cons, and how I actually operate. Read this before we talk."
    >
      <main className={styles.page}>
        <div className="container">
          <header className={styles.hero}>
            <p className={styles.kicker}>A user manual</p>
            <h1 className={styles.title}>Hiring me</h1>
            <p className={styles.lede}>
              This page is deliberately a little out of the way. It is the honest version — the
              reasons to hire me, the reasons you might not, and how I actually operate once you do.
              Read it before we talk and we will both save time.
            </p>
          </header>

          <section className={styles.ledger} aria-label="Pros and cons">
            <div className={`${styles.column} ${styles.pros}`}>
              <h2 className={styles.columnHead}>Reasons to</h2>
              <ul className={styles.cards}>
                {greens.map((item) => (
                  <li key={item.title} className={styles.card}>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`${styles.column} ${styles.cons}`}>
              <h2 className={styles.columnHead}>Reasons not to</h2>
              <ul className={styles.cards}>
                {reds.map((item) => (
                  <li key={item.title} className={styles.card}>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className={styles.blueprint} aria-label="Blueprint">
            <div className={styles.blueprintHead}>
              <h2 className={styles.title}>The blueprint</h2>
              <p className={styles.lede}>
                If we work together, here is the operating manual. None of it is a surprise once you
                have read it.
              </p>
            </div>
            <dl className={styles.specs}>
              {blueprint.map((row) => (
                <div key={row.k} className={styles.spec}>
                  <dt>{row.k}</dt>
                  <dd>{row.v}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className={styles.cta}>
            <p>Still here? That is a good sign.</p>
            <div className={styles.ctaLinks}>
              <Link className={styles.ctaPrimary} to="mailto:contact@mcclowes.com">
                Get in touch
              </Link>
              <Link className={styles.ctaSecondary} to="https://cv.mcclowes.com/">
                Read the CV
              </Link>
              <Link className={styles.ctaSecondary} to="/about-me">
                More about me
              </Link>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
