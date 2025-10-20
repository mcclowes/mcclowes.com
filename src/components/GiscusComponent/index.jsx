import React from 'react';
import Giscus from '@giscus/react';
import { useColorMode } from '@docusaurus/theme-common';

export default function GiscusComponent() {
  const { colorMode } = useColorMode();

  return (
    <Giscus
      repo="mcclowes/mcclowes.com"
      repoId="MDEwOlJlcG9zaXRvcnkxMzQyNzg5NDY="
      category="General"
      categoryId="DIC_kwDOCADvIs4Cw254"
      mapping="pathname"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={colorMode}
      lang="en"
      loading="lazy"
    />
  );
}
