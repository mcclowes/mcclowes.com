---
title: Privacy Policy
---

# Privacy Policy

**Last updated:** January 17, 2025

This privacy policy describes how mcclowes.com collects, uses, and stores data when you visit this website.

## Overview

This site respects your privacy. We collect minimal data to improve the site experience and understand how visitors interact with our content. You have full control over which cookies and tracking methods you consent to.

## What Data We Collect

### Essential Data (Always Active)

**Cookie Preferences**
- **What**: Your cookie consent choices
- **How**: Stored in browser localStorage as `mcclowes-cookie-consent`
- **Purpose**: Remember your privacy preferences
- **Retention**: Persists until you clear browser data or reset preferences
- **Can be disabled**: No (required for the site to function)

### Analytics Data (Optional)

**PostHog Analytics**
- **What**: Page views, events, web vitals (CLS, INP, FCP, LCP, TTFB), optional session recordings
- **How**: First-party cookies (`ph_*`) and localStorage (`ph_*`)
- **Data stored**:
  - Distinct ID and session ID (in cookies)
  - Analytics data, feature flags, session information (in localStorage)
- **Purpose**: Understand visitor behavior, measure site performance, and improve content quality
- **Retention**: As per PostHog's retention policies
- **Tracking scope**: This site only (first-party, not tracked across other websites)
- **Privacy features**:
  - Respects Do Not Track browser settings
  - Uses first-party tracking only
  - No cross-site tracking
- **Can be disabled**: Yes (reject analytics cookies)

**Vercel Web Analytics**
- **What**: Page views, geolocation (country, state, city), device type, browser, OS
- **How**: Cookieless edge-based tracking (no cookies or localStorage)
- **Data stored**: Anonymous aggregated metrics only
- **Purpose**: Monitor site performance and understand visitor patterns
- **Retention**: 24 hours (data is automatically discarded)
- **Privacy features**:
  - No cookies
  - No tracking across sites or sessions
  - Cannot reconstruct individual browsing sessions
  - Cannot identify individual users
  - GDPR compliant by design
- **Can be disabled**: No (cookieless and privacy-preserving by default)

### Functional Data (Optional)

**Giscus Comments**
- **What**: GitHub authentication token for comments
- **How**: Encrypted token stored in browser localStorage
- **Purpose**: Enable you to post comments using your GitHub account
- **Retention**: Until you revoke authorization or clear browser data
- **Third-party**: Comments are stored in GitHub Discussions (see [GitHub's Privacy Policy](https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement))
- **Privacy features**:
  - No cookies
  - No tracking
  - Requires explicit GitHub OAuth authorization
- **Can be disabled**: Yes (reject functional cookies)

## How to Control Your Data

### Cookie Consent Banner

When you first visit this site, a cookie consent banner appears. You can:
- **Accept All**: Enable all features including analytics and comments
- **Essential Only**: Use only required features (cookie preferences)
- **Reject All**: Disable optional features

### Change Your Preferences

You can update your cookie preferences at any time by:
1. Clearing your browser's localStorage for this site
2. Refreshing the page to see the consent banner again
3. Making a new selection

### Browser Controls

You can also control cookies through your browser settings:
- **Chrome**: Settings → Privacy and security → Cookies and other site data
- **Firefox**: Settings → Privacy & Security → Cookies and Site Data
- **Safari**: Settings → Privacy → Manage Website Data
- **Edge**: Settings → Cookies and site permissions

## Third-Party Services

This site uses the following third-party services:

### PostHog
- **Purpose**: Analytics and user behavior tracking
- **Privacy Policy**: [PostHog Privacy Policy](https://posthog.com/privacy)
- **Data location**: Cloud-hosted by PostHog
- **GDPR compliance**: GDPR compliant

### Vercel
- **Purpose**: Web analytics and hosting
- **Privacy Policy**: [Vercel Privacy Policy](https://vercel.com/legal/privacy-policy)
- **Data location**: Edge locations worldwide
- **GDPR compliance**: GDPR compliant

### GitHub (Giscus)
- **Purpose**: Comment system via GitHub Discussions
- **Privacy Policy**: [GitHub Privacy Policy](https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement)
- **Data location**: GitHub's infrastructure
- **GDPR compliance**: GDPR compliant

## Your Rights

Under GDPR and similar privacy laws, you have the right to:
- **Access**: Request a copy of your data
- **Rectification**: Correct inaccurate data
- **Erasure**: Request deletion of your data
- **Restriction**: Limit how we process your data
- **Portability**: Receive your data in a structured format
- **Object**: Object to certain processing activities
- **Withdraw consent**: Change your cookie preferences at any time

## Data Security

We implement appropriate security measures to protect your data:
- HTTPS encryption for all connections
- First-party cookies only (no third-party tracking cookies)
- Minimal data collection (only what's necessary)
- Regular security updates to site dependencies

## Children's Privacy

This site is not directed at children under 13. We do not knowingly collect data from children.

## Changes to This Policy

We may update this privacy policy from time to time. The "Last updated" date at the top indicates when changes were made. Significant changes will be reflected in an updated consent banner.

## Contact

If you have questions about this privacy policy or how we handle your data, contact:

**Email**: [contact@mcclowes.com](mailto:contact@mcclowes.com)

## Cookie Table

| Cookie/Storage | Type | Purpose | Duration | Can Disable |
|---|---|---|---|---|
| `mcclowes-cookie-consent` | localStorage | Store cookie preferences | Until cleared | No |
| `ph_*` | Cookie | PostHog distinct ID and session ID | Session/Persistent | Yes (reject analytics) |
| `ph_*` | localStorage | PostHog analytics data | Persistent | Yes (reject analytics) |
| Giscus token | localStorage | GitHub authentication | Until revoked | Yes (reject functional) |
| Vercel Analytics | None | Cookieless analytics | 24 hours | No (but privacy-preserving) |
