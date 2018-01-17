import styled from "styled-components";
import { Link, } from "react-router-dom";
import { compose, withState, withHandlers, } from "recompose";

import * as mixins from "../../style/mixins";
import * as vars from "../../style/vars";
import { objMap, } from "src/lib/util";

import Links from "./Links";
import Burger from "./Burger";
import Fade from "../Fade";

import data from "src/data";

// --------------------------------------------------

const Wrapper = styled.nav`
	z-index: 3;
`;

const Inner = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0.75em 1.5em;
`;

const MobileStuff = styled.div`
	${ mixins.bp.sm.min`display: none;`}
	${mixins.contained()};
`;

const Dark = styled.div`
	${ mixins.contained() } position: fixed;
	background: ${mixins.tr(0.5)};
	pointer-events: none;
`;

const Overlay = styled.div`
	${ mixins.contained() }
	${({ open, }) =>
		open ? mixins.shadow(1) : ""
	}
	transition: 0.3s all ease-out;
`;

const BurgerWrapper = styled.div`
	position: absolute;
	background-color: ${R.path([ "theme", "nav", ])};
	right: 1.5em;
	top: 50%;
	margin-top: -20px;
	z-index: 4;
`;

// --------------------------------------------------

const IndexLink = props => <Link to = "/" { ...props } />;

const LogoWrapper = styled(IndexLink)`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	background-color: ${R.path([ "theme", "nav", ])};
	position: relative;
	z-index: 1;
`;

const LogoText = styled.div`
	font-size: 2em;
	font-family: ${vars.font.title.family};
	color: ${R.path([ "theme", "logo1", ])};
	text-transform: uppercase;
	padding: .25em 0.5em;

	&:after {
		padding: 0.05em 0;
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 0;
		border-bottom: 0.1em solid ${ vars.colors.bgdark };
		transition: 0.5s;
	}

	&:hover:after {
		width: 100%;
	}
`;

const LogoImage = styled.img`
	height: 80%;
	width: auto;
`;

const Logo = props =>
	<LogoWrapper to = "/">
		{
			data.siteTitle
			? <LogoText>{ data.siteTitle }</LogoText>
			: <LogoImage src = "/img/logo.png"/>
		}
	</LogoWrapper>
;

// --------------------------------------------------

const enhance = compose(
	withState("open", "setOpen", false),
	withHandlers({
		openMenu: ({ setOpen, }) => () => setOpen(true),
		closeMenu: ({ setOpen, }) => () => setOpen(false),
		toggleMenu: ({ setOpen, open, }) => () => setOpen(!open),
	})
);

const Nav = ({ open, closeMenu, toggleMenu, }) => (
	<Wrapper>
		<Inner>
			<Logo />

			<Links
				close = { closeMenu }
				open = { open }
			/>

			<MobileStuff>
				<Overlay open = { open }/>
				
				<BurgerWrapper onClick = { toggleMenu }>
					<Burger
						open = { open }
						padding = { mixins.num(vars.dim.nav.margin.xs) }
						color = { vars.colors.text }
					/>
				</BurgerWrapper>
			</MobileStuff>
		</Inner>

		{
			open &&
			(
				<MobileStuff>
					<Fade visible = { open }>
						<Dark onClick = { closeMenu }/>
					</Fade>
				</MobileStuff>
			)
		}
	</Wrapper>
);

export default enhance(Nav);

