import styled, { css, } from "styled-components";
import { NavLink, } from "react-router-dom";

import routesConfig from "src/routesConfig";
import * as mixins from "src/components/style/mixins";
import * as vars from "src/components/style/vars";

// --------------------------------------------------

const wrapperStyle = [
	css`
		transform: translateY(${ props => ( props.open ? 0 : 100 ) }vh);
		transition: 0.3s all ease-out;
		${ mixins.shadow(2) }
		left: 1.5em;
		right: 1.5em;
		top: 7em;
		position: absolute;
		background-color: ${R.path([ "theme", "nav", ])};
		align-items: center;
		z-index: 5;
	`,
	`
		right: ${ mixins.num(vars.dim.nav.margin.other) * 0.5 }px;
		top: 0;
		bottom: 0;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		flex-direction: row;
	`,
];

const Wrapper = styled.div`
	font-family: ${ vars.font.title.family };

	${ mixins.xs`${ wrapperStyle[0] }` } ${ mixins.bp.sm.min`${ wrapperStyle[1] }`};
`;

const buttonStyle = [
	`
		display: block;
		padding: ${ vars.dim.nav.margin.xs };
		border-bottom: 1px solid ${ mixins.tr(0.1) };
		pointer-events: auto;

		&.active {
			font-weight: bold;
		}

		&:last-child {
			border-bottom: 0;
		}
	`,

	`	
		display: flex;
		position: relative;
		padding: 0.25em 0.5em;
		margin: 0 0.5em;
		background-color: ${R.path([ "theme", "nav", ])};

		&.active {
			font-weight: bold;
		}

		&:before {
			content: "";
			position: absolute;
			width: 0;
			height: 0.1em;
			bottom: 0;
			left: 0;
			background-color: #000;
			visibility: hidden;
			transition: 0.5s;
		}

		&:hover:before {
			visibility: visible;
			width: 100%;
		}
	`,
];

// should be Link
const Button = styled(NavLink)`
	color: ${R.path([ "theme", "logo1", ])};
	font-size: 1.3em;

	${ mixins.xs`${ buttonStyle[0] }` }
	${ mixins.bp.sm.min`${buttonStyle[1] }` }
`;

// --------------------------------------------------

export default ({ close, open, }) =>
	<Wrapper open = { open }>
		{
			routesConfig
			.filter(R.prop("show"))
			.map(({ title, path, }) =>
				<Button
					key = { path }
					to = { path }
					activeClassName = "active"
					onClick = { close }
				>
					{ title }
				</Button>,
			)
		}
	</Wrapper>;
