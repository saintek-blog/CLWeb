import React, { useEffect } from "react";
import { css } from "theme-ui"


const Ad = props => {
    const { currentPath } = props

    useEffect(() => {
        window.adsbygoogle = window.adsbygoogle || []
        window.adsbygoogle.push({})
    }, [currentPath])

    return (
        <div
            css={css({
                ml: 0,
                mr: 0,
        })}>
            <ins
                className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-format="fluid"
     			data-ad-layout="in-article"
     			data-ad-client="ca-pub-0123456789101112"
     			data-ad-slot="9876543210"
            />
        </div>
    )
}

export default Ad;
