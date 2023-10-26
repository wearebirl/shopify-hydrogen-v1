import {Link} from "@remix-run/react";


import React from 'react';
import InstantCredit from '../assets/Instant Credit.png';
import CarbonCapture from '../assets/Carbon Capture.png';
import FreeShipping from '../assets/Free Shipping.png';
import GuaranteedValue from '../assets/Guaranteed Value.png';
import Steps from '../assets/Steps.png';

import BirlLogo from '../assets/birl-logo.png';



export function AnnouncementBar() {

    const openDropdown = () => {
        document.querySelector('.birl-announcement-dropdown').classList.add('open');
    }
}

    return (
        <>
        <div className="birl-announcement-container">
            <button onClick="openDropdown()">
                <img loading="eager" src={BirlLogo} width="56" height="19" alt="Birl Logo"/>
                    <span>Trade-in your pre-owned dawn items for an instant credit to spend today</span>
            </button>
        </div>

        <div className="birl-announcement-dropdown">
            <link rel="stylesheet" href="{{ 'trade-in.css' | asset_url }}">
                {% capture closeFunction %}openDropdown(){% endcapture %}
                {% render 'trade_in_banner', close: closeFunction %}

                <div className="dropdown-split">

                    <div className="dropdown-split__left">
                        <div className="dropdown-split__left__content">
                            <h1>Welcome to Birl Trade-In</h1>
                            <p>
                                Ready to make a positive impact on the environment while upgrading your wardrobe?
                            </p>

                            <p>
                                With Birl Trade-In, you can trade in your pre-loved clothing items and <b>receive money off that’s ready to use the same day!</b>
                            </p>

                            <video width="632" height="354.15" controls>
                                <source src="{{block.settings.video_url}}" type="video/mp4">
                            </video>
                        </div>
                    </div>

                    <div className="dropdown-split__right">
                        <div className="icons">
                            <img  loading="eager" src={InstantCredit} width="113" height="90" />
                            <img  loading="eager" src={CarbonCapture}  width="113" height="90" />
                            <img  loading="eager" src={FreeShipping}  width="113" height="90" />
                            <img  loading="eager" src={GuaranteedValue}  width="113" height="90" />
                        </div>

                        <img className="steps" src={Steps} width="563" height="308" />

                        <button className="start-trade-in">Start Trade-In</button>

                    </div>

                </div>
            </link>

        </div>
        </>
)
}