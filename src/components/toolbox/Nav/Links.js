import styled, { css, } from "styled-components";
import { NavLink, } from "react-router-dom";

import routesConfig from "src/routesConfig";
import * as mixins from "src/components/style/mixins";
import * as vars from "src/components/style/vars";

// --------------------------------------------------

const wrapperStyle = [
	css`
		transform: translateY(${ props => ( props.open ? 0 : -110 ) }%);
		transition: 0.3s all ease-out;
		${ mixins.shadow(2) }
		left: 0;
		right: 0;
		top: ${ vars.dim.nav.height.xs };
		background-color: ${R.path([ "theme", "nav", ])};
		align-items: center;
		padding-top: 3em;
	`,
	`
		margin-top: 1em;
		right: ${ mixins.num(vars.dim.nav.margin.other) * 0.5 }px;
		top: 0;
		bottom: 0;
		display: flex;
		align-items: flex-end;
		flex-direction: column;
	`,
];

const Wrapper = styled.div`
	${ mixins.xs`${ wrapperStyle[0] }` } ${ mixins.bp.sm.min`${ wrapperStyle[1] }`};
`;

const buttonStyle = [
	`
		display: block;
		padding: ${ vars.dim.nav.margin.xs };
		border-bottom: 1px solid ${ mixins.tr(0.1) };

		&.active {
			font-weight: bold;
		}

		&:last-child {
			border-bottom: 0;
		}
	`,

	`
		padding: 0 ${vars.dim.nav.margin.other} 0 0;
		display: inline-block;
		border-bottom: 3px solid transparent;
		border-top: 1px solid transparent;

		&.active {
			opacity: 0.7;
		}
	`,
];

// should be Link
const Button = styled(NavLink)`
	color: ${R.path([ "theme", "logo1", ])};
	font-size: 1.3em;
	text-transform: uppercase;

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
