import React from 'react';
import { trackExternalLinkClick } from '@site/src/utils/posthog';

export default function TrackedLink({ 
  href, 
  children, 
  className, 
  source = 'unknown',
  ...props 
}) {
  const handleClick = (e) => {
    // Check if it's an external link
    if (href && (href.startsWith('http') || href.startsWith('mailto:'))) {
      const linkText = typeof children === 'string' ? children : 'Link';
      trackExternalLinkClick(href, linkText, source);
    }
  };

  return (
    <a 
      href={href} 
      className={className}
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  );
}
