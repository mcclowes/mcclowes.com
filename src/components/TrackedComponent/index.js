import React from 'react';
import { trackComponentInteraction } from '@site/src/utils/posthog';

export default function TrackedComponent({
  componentName,
  action,
  children,
  onClick,
  className,
  ...props
}) {
  const handleClick = (e) => {
    // Track the interaction
    trackComponentInteraction(componentName, action, {
      element: e.target.tagName,
      className: className,
    });

    // Call the original onClick if provided
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <div className={className} onClick={handleClick} {...props}>
      {children}
    </div>
  );
}
