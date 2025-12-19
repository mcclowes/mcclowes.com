const { test } = require('node:test');
const assert = require('node:assert/strict');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');

const Modal = require('..').default;

test('Modal renders nothing when closed', () => {
  const markup = renderToStaticMarkup(
    React.createElement(Modal, { isOpen: false, onClose: () => {} }, 'Content')
  );

  assert.strictEqual(markup, '');
});

test('Modal renders content when open', () => {
  const markup = renderToStaticMarkup(
    React.createElement(Modal, { isOpen: true, onClose: () => {} }, 'Test Content')
  );

  assert.ok(markup.includes('Test Content'));
  assert.ok(markup.includes('role="dialog"'));
  assert.ok(markup.includes('aria-modal="true"'));
});

test('Modal includes close button with aria-label', () => {
  const markup = renderToStaticMarkup(
    React.createElement(Modal, { isOpen: true, onClose: () => {} }, 'Content')
  );

  assert.ok(markup.includes('aria-label="Close dialog"'));
  assert.ok(markup.includes('×'));
});

test('Modal uses custom ariaLabel when provided', () => {
  const markup = renderToStaticMarkup(
    React.createElement(
      Modal,
      { isOpen: true, onClose: () => {}, ariaLabel: 'Custom Dialog' },
      'Content'
    )
  );

  assert.ok(markup.includes('aria-label="Custom Dialog"'));
});

test('Modal has default aria-label when not provided', () => {
  const markup = renderToStaticMarkup(
    React.createElement(Modal, { isOpen: true, onClose: () => {} }, 'Content')
  );

  assert.ok(markup.includes('aria-label="Dialog"'));
});
