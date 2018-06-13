import React from "react";
import Helmet from "react-helmet";

// ----------------------------------------------------

const Head = () => (
	<Helmet
		title = "Hornsey & Wood Green Labour"
		meta = { [
			{
				name: "description",
				content: "Hornsey and Wood Green Labour Party Website",
			},
			{
				name: "keywords",
				content:
					"Hornsey, Wood green, Labour, Party, Crouch End, Highgate, Alexandra, Stroud Green",
			},
			{
				name: "google-site-verification",
				content: "Zg3zItwnIwzK5-NXu7KC5JuBu6PM4CY_nkxU78-CQtQ",
			},
		] }
	/>
);

export default Head;
