import React from 'react';

export const Icon = ({ icon, color, style, ...rest }) => (
    <svg width={icon.width} height={icon.height} fill={color || icon.fill} style={{...style}} {...rest}>
        {icon.path
                && icon.path.map((p, idx) =>
                    <path
                        key={idx}
                        d={p?.d}
                        fill={p?.pathFill}
                        fillRule={p?.fillRule}
                        clipRule={p?.clipRule}
                        stroke={p?.stroke}
                        strokeLinecap={p?.strokeLinecap}
                        strokeLinejoin={p?.strokeLinejoin}
                        strokeWidth={p?.strokeWidth} />)}
        {
            icon.rect
                && icon.rect.map((r, idx) =>
                    <rect
                        key={idx}
                        x={r?.x} y={r?.y}
                        width={r?.width}
                        height={r?.height}
                        stroke={r?.stroke}
                        fill={r?.pathFill}
                        transform={r?.transform}
                        />)
        }
        {
            icon.defs
                && <defs>
                    {icon.defs.filter 
                        && icon.defs.filter.map((f, idx) => 
                            <filter
                                key={idx}
                                id={f?.id}
                                x={f?.x}
                                y={f?.y}
                                width={f?.width}
                                height={f?.height}
                                filterUnits={f?.filterUnits}
                                colorInterpolationFilters={f?.colorInterpolationFilters}>
                                    {
                                        f.feFlood && f.feFlood.map(({ ...rest }, idx) => <feFlood key={idx} {...rest}/> )
                                    }
                                    {
                                        f.feColorMatrix && f.feColorMatrix.map(({ ...rest }, idx) => <feColorMatrix key={idx} {...rest} />)
                                    }
                                    {
                                        f.feOffset && f.feOffset.map(({ ...rest }, idx) => <feOffset key={idx} {...rest} />)
                                    }
                                    {
                                        f.feGaussianBlur && f.feGaussianBlur.map(({ ...rest }, idx) => <feGaussianBlur key={idx} {...rest} />)
                                    }
                                    {
                                        f.feBlend && f.feBlend.map(({ ...rest }, idx) => <feBlend key={idx} {...rest} />)
                                    }
                            </filter>)
                    }
                    {
                        icon.defs.linearGradient
                        && icon.defs.linearGradient.map((ln, idx) => 
                            <linearGradient key={idx} id={ln?.id} x1={ln?.x1} x2={ln?.x2} y1={ln?.y1} y2={ln?.y2} gradientUnits={ln?.gradientUnits}>
                                {
                                    ln.stop
                                        && ln.stop.map(({...rest}, idx) => <stop key={idx} {...rest} />)    
                                }
                            </linearGradient>)
                    }
                    </defs>
        }
    </svg>
)