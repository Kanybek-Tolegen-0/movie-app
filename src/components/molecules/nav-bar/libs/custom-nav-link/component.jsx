import React, { useMemo } from 'react';
import { NavLink } from 'react-router-dom';

export const CustomNavLink = ({ children, style, ...rest }) => {
    const activeStyles = useMemo(() => ({ background: 'rgba(255, 255, 255, 0.1)' }), []);

    return (
        <NavLink
            style={(({ isActive }) => {
                const additionalStyles = isActive ? activeStyles : {};
                return {
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '50%',
                    border: 'none',
                    transition: '0.2s linear all',
                    ...additionalStyles,
                    ...style,
                }})}
            {...rest}
        >
                    {children}
        </NavLink>
    )
}