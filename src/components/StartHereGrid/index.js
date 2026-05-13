import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.scss';

const sections = [
  {
    title: 'Product thinking',
    blurb: 'Frameworks and ideas from a decade of building products.',
    entries: [
      {
        title: 'The 5Ds of product management',
        href: '/blog/2023/01/15/the-5ds-of-product',
        dek: 'Every PM should have an angle. Here are five.',
        year: '2023',
        kind: 'Framework',
      },
      {
        title: 'Build MLPs, not MVPs',
        href: '/blog/2023/01/07/mlps',
        dek: 'Why "minimum viable" often isn’t.',
        year: '2023',
        kind: 'Essay',
      },
      {
        title: 'Hiring for product: what actually matters',
        href: '/blog/2025/01/08/hiring-for-product',
        dek: 'Most PM hiring is broken. Here’s how to fix it.',
        year: '2025',
        kind: 'Essay',
      },
      {
        title: 'The art of fast decision-making',
        href: '/blog/fast-decision-making',
        dek: 'Being able to reverse course matters more than being right.',
        year: '2024',
        kind: 'Essay',
      },
      {
        title: 'Opinionated autonomy',
        href: '/blog/2023/10/19/opinionated-autonomy',
        dek: 'The balance between direction and independence.',
        year: '2023',
        kind: 'Essay',
      },
      {
        title: 'The myth of product ownership',
        href: '/blog/2024/04/24/the-myth-of-product-ownership',
        dek: 'What ownership actually means in practice.',
        year: '2024',
        kind: 'Essay',
      },
    ],
  },
  {
    title: 'AI and the future',
    blurb: 'Thinking about where technology is heading.',
    entries: [
      {
        title: 'The new generalist',
        href: '/blog/2024/01/25/the-new-generalist',
        dek: 'AI amplifies people who can move between domains.',
        year: '2024',
        kind: 'Essay',
      },
      {
        title: 'AI is not a hammer',
        href: '/blog/2025/02/21/perfect-ai',
        dek: 'The tools we build shape how we think.',
        year: '2025',
        kind: 'Essay',
      },
      {
        title: 'Imperfect AI is perfect',
        href: '/blog/2025/03/29/imperfect-ai-is-perfect',
        dek: 'Why we might not want AI to be flawless.',
        year: '2025',
        kind: 'Essay',
      },
      {
        title: 'Apple’s organisational disadvantage in the age of AI',
        href: '/blog/2024/12/28/organisational-advantage-in-the-age-of-ai',
        dek: 'Why organisational strengths become liabilities.',
        year: '2024',
        kind: 'Essay',
      },
      {
        title: 'The age of ideas',
        href: '/blog/2025/04/22/the-age-of-ideas',
        dek: 'Execution advantage is shrinking. Ideas matter more.',
        year: '2025',
        kind: 'Essay',
      },
    ],
  },
  {
    title: 'Technical projects',
    blurb: 'Languages and tools I’ve built.',
    entries: [
      {
        title: 'Lea',
        href: '/projects/lea',
        dek: 'A pipe-oriented functional programming language.',
        kind: 'Language',
      },
      {
        title: 'Vague',
        href: '/projects/vague',
        dek: 'A constraint-based language for realistic data generation.',
        kind: 'Language',
      },
      {
        title: 'OMG',
        href: '/projects/omg',
        dek: 'A human-first language for API specifications.',
        kind: 'Language',
      },
      {
        title: 'Docusaurus plugins',
        href: '/projects/intro#documentation-tooling',
        dek: 'Cookie consent, glossary, status banners, and more.',
        kind: 'Tools',
      },
      {
        title: 'Code frontmatter: an index for AI?',
        href: '/blog/2026/01/06/code-frontmatter',
        dek: 'Structured metadata for AI-assisted coding.',
        year: '2026',
        kind: 'Essay',
      },
      {
        title: 'Reinventing Codat’s docs and developer experience',
        href: '/blog/2023/10/05/reinventing-codat-docs-devex',
        dek: 'A talk on reimagining documentation.',
        year: '2023',
        kind: 'Talk',
      },
      {
        title: 'Creating CVs from Markdown',
        href: '/blog/2020/01/15/cv-maker',
        dek: 'My approach to portable, versioned résumés.',
        year: '2020',
        kind: 'Project',
      },
    ],
  },
  {
    title: 'Creative work',
    blurb: 'Poetry, music, and visual art.',
    entries: [
      {
        title: 'Poetry competition runner up',
        href: '/blog/2025/08/02/poetry-competition-runner-up',
        dek: 'Recent recognition.',
        year: '2025',
        kind: 'Note',
      },
      {
        title: 'Ode to Heather Christle',
        href: '/blog/2025/09/01/heather-christle',
        dek: 'A poem.',
        year: '2025',
        kind: 'Poem',
      },
      {
        title: 'Rough recordings',
        href: '/blog/2022/01/10/rough-recordings',
        dek: 'Songs from isolation.',
        year: '2022',
        kind: 'Music',
      },
      {
        title: 'Paintings',
        href: '/blog/2025/11/12/paintings-november-25',
        dek: 'Recent visual work.',
        year: '2025',
        kind: 'Art',
      },
    ],
  },
  {
    title: 'Essays and reflections',
    blurb: 'On work, creativity, and life.',
    entries: [
      {
        title: '10% more learning',
        href: '/blog/2024/07/21/learning-vs-doing',
        dek: 'Why slowing down to learn helps you move faster.',
        year: '2024',
        kind: 'Essay',
      },
      {
        title: 'Progress doesn’t always feel like progress',
        href: '/blog/2023/04/21/compounding-progress',
        dek: 'Why growth is hard to see.',
        year: '2023',
        kind: 'Essay',
      },
      {
        title: '5 reasons to keep a notebook',
        href: '/blog/2017/03/14/notebooks',
        dek: 'The enduring value of handwritten notes.',
        year: '2017',
        kind: 'Essay',
      },
      {
        title: 'Deleting social media',
        href: '/blog/2025/01/11/social-media',
        dek: 'Why I left Facebook, Twitter, and Instagram.',
        year: '2025',
        kind: 'Essay',
      },
    ],
  },
];

const romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];

export default function StartHereGrid() {
  const total = sections.reduce((sum, s) => sum + s.entries.length, 0);

  return (
    <div className={styles.wrapper}>
      <header className={styles.hero}>
        <p className={styles.eyebrow}>A curated reading path</p>
        <h1 className={styles.heroTitle}>Start here.</h1>
        <p className={styles.lede}>
          With 160+ posts on this site, here are{' '}
          <span className={styles.ledeAccent}>{total} entries</span> across{' '}
          <span className={styles.ledeAccent}>{sections.length} themes</span> — a place to begin.
        </p>
      </header>

      {sections.map((section, sIdx) => (
        <section key={section.title} className={styles.section}>
          <div className={styles.sectionHead}>
            <span className={styles.sectionMark} aria-hidden="true">
              § {romanNumerals[sIdx]}
            </span>
            <h2 className={styles.sectionTitle}>{section.title}</h2>
            <span className={styles.sectionCount} aria-hidden="true">
              {section.entries.length} entries
            </span>
          </div>
          <p className={styles.sectionBlurb}>{section.blurb}</p>

          <ul className={styles.grid}>
            {section.entries.map((entry) => (
              <li key={entry.href} className={styles.card}>
                <Link to={entry.href} className={styles.cardLink}>
                  {(entry.year || entry.kind) && (
                    <div className={styles.cardMeta} aria-hidden="true">
                      {entry.year && <span>{entry.year}</span>}
                      {entry.year && entry.kind && <span className={styles.metaDot}>·</span>}
                      {entry.kind && <span>{entry.kind}</span>}
                    </div>
                  )}
                  <h3 className={styles.cardTitle}>{entry.title}</h3>
                  <p className={styles.cardDek}>{entry.dek}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <footer className={styles.footer}>
        <span className={styles.footerRule} aria-hidden="true" />
        <p>
          Want the full archive? Browse the <Link to="/blog">blog</Link> or explore the{' '}
          <Link to="/projects/intro">projects</Link>.
        </p>
      </footer>
    </div>
  );
}
