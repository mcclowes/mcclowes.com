import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const recentPosts = [
  {
    title: "The Bar for AI Keeps Shifting",
    excerpt: "During my computer science studies, our introduction to artificial intelligence didn't begin with neural networks or robotics, but with a parade of definitions...",
    slug: "/blog/2025/05/28/shapeshifting-definitions-of-ai",
    date: "May 28, 2025",
    tags: ["tech", "ai"]
  },
  {
    title: "Ownership in product",
    excerpt: "A Product Manager is supposed to be the great connector—the person who brings engineering, design, and business together...",
    slug: "/blog/2025/04/24/the-myth-of-product-ownership",
    date: "April 24, 2025",
    tags: ["product", "teams", "leadership"]
  },
  {
    title: "The Age of Ideas",
    excerpt: "As a teenager, I was all ideas and no follow-through. Every week brought a new concept, a new scheme, a new startup in my head...",
    slug: "/blog/2025/04/22/the-age-of-ideas",
    date: "April 22, 2025",
    tags: ["ai", "product", "tech"]
  }
];

function PostCard({ title, excerpt, slug, date, tags }) {
  return (
    <div className={styles.postCard}>
      <Link to={slug} className={styles.postLink}>
        <h3 className={styles.postTitle}>{title}</h3>
        <p className={styles.postExcerpt}>{excerpt}</p>
        <div className={styles.postMeta}>
          <span className={styles.postDate}>{date}</span>
          <div className={styles.postTags}>
            {tags.map(tag => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function RecentPosts() {
  return (
    <section className={styles.recentPosts}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Recent Writing</h2>
        <div className={styles.postsGrid}>
          {recentPosts.map((post, idx) => (
            <PostCard key={idx} {...post} />
          ))}
        </div>
        <div className={styles.viewAll}>
          <Link to="/blog" className={styles.viewAllLink}>
            View all posts →
          </Link>
        </div>
      </div>
    </section>
  );
}