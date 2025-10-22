const { test } = require('node:test');
const assert = require('node:assert/strict');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');

const { ColorGrid, createOpacityGrid } = require('..');

test('createOpacityGrid returns an array filled with zeros', () => {
  const grid = createOpacityGrid(3);

  assert.strictEqual(grid.length, 9);
  assert.ok(grid.every((value) => value === 0));
});

test('ColorGrid renders the expected number of squares', () => {
  const markup = renderToStaticMarkup(React.createElement(ColorGrid, { size: 4 }));
  const occurrences = (markup.match(/data-testid="color-grid-square"/g) || []).length;

  assert.strictEqual(occurrences, 16);
  assert.ok(/grid-template-columns:repeat\(4,\s?50px\)/.test(markup));
});

test('ColorGrid defaults to a 9x9 grid when size is not provided', () => {
  const markup = renderToStaticMarkup(React.createElement(ColorGrid));
  const occurrences = (markup.match(/data-testid="color-grid-square"/g) || []).length;

  assert.strictEqual(occurrences, 81);
});
