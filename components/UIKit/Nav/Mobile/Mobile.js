import React from "react";

import {
  MobileWrapper,
  LogoWrapper,
  BackWrapper,
  LinkWrapper,
  LinksWrapper,
  Overlay,
  NavBar,
} from "./csx";

import Burger from "./Burger";

import { useRouter } from 'next/router'

const Back = (props) => {
  return (
    <BackWrapper onClick={props.canGoBack && props.goBack}>
      {props.canGoBack && "<"}
    </BackWrapper>
  );
};

const Logo = (props) => {
  return <LogoWrapper href="/">{props.children}</LogoWrapper>;
};

const Link = (props) => {
  console.log(props)
  return <LinkWrapper href={props.link.to}>{props.link.text}</LinkWrapper>;
};

const Mobile = (props) => {
  const {
    open,
    logo,
    toggleOpen,
  } = props

  const router = useRouter()

  return (
    <MobileWrapper sizes={[true, true, false, false, false]}>
      <NavBar>
        <Back canGoBack={true} goBack={router.back} />

        <Logo>{logo}</Logo>

        <Burger onClick={toggleOpen} open={open} />
      </NavBar>

      {open && (
        <Overlay>
          <LinksWrapper>
            {props.links
              .filter((link) => link.to !== "/")
              .map((link, i) => (
                <Link key={i} link={link} />
              ))}
          </LinksWrapper>
        </Overlay>
      )}
    </MobileWrapper>
  );
};

export default Mobile;
