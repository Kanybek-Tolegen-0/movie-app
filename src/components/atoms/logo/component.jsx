import React from 'react';
import { icons } from '../../../assets';
import { IconStyledFirst, IconStyledSecond } from './styled';

export const Logo = () => 
    <div
        style={{display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            padding: '4px',
            height: '64px',
            width: '64px',
        }}>
        <IconStyledFirst icon={icons.menuLayerFirst} />
        <IconStyledSecond icon={icons.menuLayerSecond} />
</div>