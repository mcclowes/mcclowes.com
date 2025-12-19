const { test } = require('node:test');
const assert = require('node:assert/strict');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');

const Carousel = require('..').default;

test('Carousel renders with correct number of images', () => {
  const images = ['/img1.jpg', '/img2.jpg', '/img3.jpg'];
  const markup = renderToStaticMarkup(React.createElement(Carousel, { images }));

  const imgCount = (markup.match(/<img/g) || []).length;
  assert.strictEqual(imgCount, 3);
});

test('Carousel uses default alt text when altTexts not provided', () => {
  const images = ['/img1.jpg', '/img2.jpg'];
  const markup = renderToStaticMarkup(React.createElement(Carousel, { images }));

  assert.ok(markup.includes('alt="Image 1 of 2"'));
  assert.ok(markup.includes('alt="Image 2 of 2"'));
});

test('Carousel uses custom alt texts when provided', () => {
  const images = ['/img1.jpg', '/img2.jpg'];
  const altTexts = ['First image', 'Second image'];
  const markup = renderToStaticMarkup(React.createElement(Carousel, { images, altTexts }));

  assert.ok(markup.includes('alt="First image"'));
  assert.ok(markup.includes('alt="Second image"'));
});

test('Carousel has accessibility attributes', () => {
  const images = ['/img1.jpg'];
  const markup = renderToStaticMarkup(React.createElement(Carousel, { images }));

  assert.ok(markup.includes('role="region"'));
  assert.ok(markup.includes('aria-roledescription="carousel"'));
  assert.ok(markup.includes('role="group"'));
});

test('Carousel uses custom ariaLabel when provided', () => {
  const images = ['/img1.jpg'];
  const markup = renderToStaticMarkup(
    React.createElement(Carousel, { images, ariaLabel: 'Photo gallery' })
  );

  assert.ok(markup.includes('aria-label="Photo gallery"'));
});

test('Carousel uses default ariaLabel', () => {
  const images = ['/img1.jpg'];
  const markup = renderToStaticMarkup(React.createElement(Carousel, { images }));

  assert.ok(markup.includes('aria-label="Image carousel"'));
});

test('Carousel renders with empty images array', () => {
  const markup = renderToStaticMarkup(React.createElement(Carousel, { images: [] }));

  const imgCount = (markup.match(/<img/g) || []).length;
  assert.strictEqual(imgCount, 0);
});
