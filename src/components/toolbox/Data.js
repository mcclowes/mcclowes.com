import styled from "styled-components";

import { printObj, } from "src/lib/util";
import { Container, } from "src/components/toolbox";

// --------------------------------------------------

const Wrapper = styled(Container)`
	white-space: pre-wrap;
	word-wrap: break-word;
	font-size: 11px;
	font-family: monospace;
`;

export default data => () => (
	<Wrapper>
		{ printObj(data) }
	</Wrapper>
);
