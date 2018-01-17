import styled from "styled-components";

import PostTile from "./PostTile";

import { Link, } from "react-router-dom";

import * as vars from "src/components/style/vars";

// --------------------------------------------------

const BoldBanner = (props) => (
	<PostTile 
		post = { props.post }
		banner = { true }
	/>
);

export default BoldBanner;
