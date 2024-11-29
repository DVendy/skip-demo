'use client';

import { useEffect } from 'react';

interface Props {
    size?: number
    speed?: number
    color?: string
    type?: 'jelly-triangle' | 'bouncy'
}

const LdrsAnimation = ({ color = '#617284', size = 24, speed = 1.75, type = 'jelly-triangle' }: Props) => {
    useEffect(() => {
        async function getLoader() {
            switch (type) {
                case 'jelly-triangle': {
                    const { jellyTriangle } = await import('ldrs');
                    jellyTriangle.register();
                }
                case 'bouncy': {
                    const { bouncy } = await import('ldrs');
                    bouncy.register();
                }
            }
        }
        getLoader()
    }, []);

    switch (type) {
        case 'jelly-triangle': {
            return (
                <l-jelly-triangle
                    size={size}
                    speed={speed}
                    color={color}
                ></l-jelly-triangle>
            );
        }
        case 'bouncy': {
            return (
                <l-bouncy
                    size={size}
                    speed={speed}
                    color={color}
                ></l-bouncy>
            );
        }
    }
}

export default LdrsAnimation;