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
                data-ad-client="ca-pub-7540836345366849"
                data-ad-slot="4521672431"
                data-ad-format="auto"
                data-full-width-responsive="true"
            />
        </div>
    )
}

export default Ad;
