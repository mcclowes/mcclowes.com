import Helmet from "react-helmet";

import * as vars from "../style/vars";

import data from "src/data";

// --------------------------------------------------

const Head = ( { pageData, } ) => (
	<Helmet>
		<meta charSet = "utf-8" />
		<meta http-equiv = "X-UA-Compatible" content = "IE=edge"/>
		<meta name = "viewport" content = "width=device-width, initial-scale=1"/>

		<link rel = "canonical" href = { `https://www.mcclowes.com/${ pageData && pageData.slug ? pageData.slug : "" }` } />
		<title>
			{
				pageData && pageData.title
				? `${ pageData.title } | ${ data.siteTitle }`
				: `${ data.siteTitle } | ${ data.siteDescription }`
			}
		</title>
		<meta name = "description" 
			content = { 
				pageData && pageData.description 
				? pageData.description
				: data.siteDescription
			}
		/>
		<meta property = "og:url" content = { `https://www.mcclowes.com/${ pageData && pageData.slug ? pageData.slug : "" }` } />
		<meta property = "og:type" content = "website" />
		<meta property = "og:title" content = {
				pageData && pageData.title
				? `${ pageData.title } | ${ data.siteTitle }`
				: `${ data.siteTitle } | ${ data.siteDescription }`
			} 
		/>
		<meta property = "og:site_name" content = { data.sitetitle } />
		<meta property = "og:description" content = { 
				pageData && pageData.description 
				? pageData.description
				: data.siteDescription
			} 
		/>

		{/*Social */}
		{/*General image*/}
		<link rel = "image_src" type = "image/jpeg" href = 
			{ 
				pageData && pageData.image
				? pageData.image.url
				: data.siteImage.url
			}
		/>

		{/*180x110 Image for Linkedin */}
		<meta property = "og:image" content = 
			{ 
				pageData && pageData.image
				? pageData.image.url
				: data.siteImage.url
			}
		/>
		<meta property = "og:image:width" content = "180" />
		<meta property = "og:image:height" content = "110" />

		{/*600x315 Image for Facebook */}
		<meta property = "og:image" 
			content = { 
				pageData && pageData.image
				? pageData.image.url
				: data.siteImage.url
			}
		/>
		<meta property = "og:image:width" content = "600" />
		<meta property = "og:image:height" content = "315" />

		{/*Twitter Card */}

		{/*<meta name = "twitter:card" content = "summary">*/}
		<meta name = "twitter:card" content = "summary_large_image" />
		<meta name = "twitter:site" content = { vars.meta.twitterUsername } />
		<meta name = "twitter:creator" content = { vars.meta.twitterCreator } />

		{
			pageData && pageData.title
			? `<meta name = "twitter:title" content = ${ pageData.title } />`
			: `<meta name = "twitter:title" content = ${ data.siteTitle } />`
		}

		<meta name = "twitter:url" content = { `https://www.mcclowes.com/${ pageData && pageData.slug ? pageData.slug : "" }` } />
		<meta name = "twitter:description" content = 
			{ 
				pageData && pageData.description 
				? pageData.description
				: data.siteDescription
			}
		/>
		<meta name = "twitter:image:src" content = 
			{ 
				pageData && pageData.image
				? pageData.image.url
				: data.siteImage.url
			}
		/>

		{/*Analytics */}
		{/*Search Console */}
		<meta name = "google-site-verification" content = { vars.meta.googleSearch } />

		{/*Google analytics*/}

		{/* Cookie Warning*/}
	</Helmet>
);

export default Head;