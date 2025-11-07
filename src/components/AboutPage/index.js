import React from 'react';
import Layout from '@theme/Layout';
import { usePageTracking } from '@site/src/hooks/usePostHog';

export default function AboutPage() {
  // Track about page visits
  usePageTracking('About Page', {
    page_type: 'about',
    timestamp: new Date().toISOString(),
  });

  return (
    <Layout
      title="About me"
      description="I'm a product director with over a decade of experience building tools that work with the grain of people and systems."
    >
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div className="markdown">
              <img src="/img/posts/tiles/tiles.png" alt="Tiles" />

              <p>
                I'm a product director with over a decade of experience building tools that work
                with the grain of people and systems. My background spans engineering, design, and
                strategy—shaping software that solves real problems, and quietly endures.
              </p>

              <p>
                I've led product in startups and scale-ups across SaaS and fintech, founded my own
                venture, and helped teams align on what matters. I think in systems, care about
                craft, and trust intuition sharpened by data.
              </p>

              <p>
                Outside of work, I write essays, compose music, and sketch. I'm interested in the
                emotional texture of tools, the aesthetics of decision-making, and how creative
                practice can inform the structures we build. This site is a place to explore that
                intersection.
              </p>

              <p>
                <a href="https://cv.mcclowes.com/">/cv</a>
                <br />
                <a href="mailto:contact@mcclowes.com">/contact</a>
                <br />
                <a href="https://linktr.ee/mcclowes">/links</a>
              </p>

              <h2>Philosophy of Practice</h2>

              <p>I make things by feel.</p>

              <p>
                Whether I'm designing a product, writing a sentence, sketching a shape, or composing
                a sound, I start with instinct—something unresolved, a pull. I test, adjust, rework.
                Not chasing elegance, just trying to find what works—what lands, what moves, what
                matters.
              </p>

              <p>
                I think a lot about experience—not in the UX sense, but in the felt sense.
                <br />
                What does it feel like to use this? To read this? To be inside this?
              </p>

              <p>
                Play and practice are central to how I work. I'm not interested in perfection or
                polish for its own sake. I'd rather make, break, remake—see what happens, then make
                again. I trust the hand, the ear, the eye. I trust iteration more than theory.
              </p>

              <p>
                Sometimes the work is useful. Sometimes it's just interesting. That's fine with me.
              </p>

              <p>
                This site is a record of things I've made—essays, sketches, systems, sounds.
                <br />
                Some finished. Most not. It's all part of the same practice: doing the thing,
                noticing what happens, doing it again.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
