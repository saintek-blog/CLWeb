import React, { useEffect } from "react";
import { css } from "theme-ui"


const Ad = props => {
    const { currentPath } = props

    useEffect(() => {
        window.sc_adv_out = window.sc_adv_out || []
        window.sc_adv_out.push({})
    }, [currentPath])

    return (
        <div
            css={css({
                ml: 0,
                mr: 0,
        })}>
            <ins
                id = "852561"
                domain = "n.ads1-adnow.com"
                no_div = false
            />
        </div>
    )
}

export default Ad;
