import React from 'react';
import { NavBarStyled } from './styled';
import { Icon, Logo } from '../../atoms';
import { icons } from '../../../assets';

import { CustomNavLink  } from './libs/custom-nav-link';

export const NavBar = ({ style }) => {
    return (
        <NavBarStyled style={{ ...style }}>
            <CustomNavLink to={'/'} style={{ width: '64px', height: '64px'}} end><Logo /></CustomNavLink>
            <CustomNavLink to={'/home'}><Icon icon={icons.home}/></CustomNavLink>
            <CustomNavLink to={'/movies'}><Icon icon={icons.movie}/></CustomNavLink>
            <CustomNavLink to={'/tv-shows'}><Icon icon={icons.tv}/></CustomNavLink>
            <CustomNavLink to={'/favourites'}><Icon icon={icons.starEmpty}/></CustomNavLink>
        </NavBarStyled>
    )
};