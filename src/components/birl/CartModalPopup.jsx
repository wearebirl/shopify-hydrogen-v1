import birlLogo from "../../assets/birl/birl-logo.png";

export function CartModalPopup({storeName   }) {

    if (storeName === undefined) {
        storeName = "Birl"
    }

    return (
        <div className="cart-modal-popup-container">
            <div className="cart-modal-popup-content">
                <i className="popup-close" onClick="closePopupModal('#shopify-section-{{ section.id }}')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M11.0607 10.3536L18.7071 2.70711L18 2L10.3536 9.64645L2.70711 2L2 2.70711L9.64645 10.3536L2 18L2.70711 18.7071L10.3536 11.0607L18 18.7071L18.7071 18L11.0607 10.3536Z" fill="black"/>
                    </svg>
                </i>

                <div className="popup-message">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M16.0736 6.14639C16.1674 6.24016 16.22 6.36731 16.22 6.49989C16.22 6.63248 16.1674 6.75963 16.0736 6.85339L8.13364 14.7934C8.03988 14.8871 7.91273 14.9398 7.78014 14.9398C7.64756 14.9398 7.52041 14.8871 7.42664 14.7934L4.15264 11.5184C4.10489 11.4723 4.0668 11.4171 4.04059 11.3561C4.01439 11.2951 4.0006 11.2295 4.00002 11.1631C3.99944 11.0967 4.01209 11.0309 4.03723 10.9694C4.06237 10.908 4.0995 10.8521 4.14645 10.8052C4.19339 10.7582 4.24922 10.7211 4.31067 10.696C4.37212 10.6708 4.43796 10.6582 4.50434 10.6588C4.57073 10.6593 4.63634 10.6731 4.69735 10.6993C4.75835 10.7255 4.81352 10.7636 4.85964 10.8114L7.78164 13.7334L15.3676 6.14639C15.4614 6.05266 15.5886 6 15.7211 6C15.8537 6 15.9809 6.05266 16.0746 6.14639H16.0736Z" fill="black"/>
                    </svg>

                    <p className="popup-message-text">Item added to your cart</p>
                </div>

                <div className="popup-item">
                    <img className="popup-item-image" loading="eager" src="https://placehold.co/70x70" alt="product image"  width="80" height="80" />
                    <div className="popup-item-details">
                        <h3 className="Product-Title">Product Name</h3>
                        <p className="Product-Options">Colour: black</p>
                    </div>
                </div>

                <div className="popup-buttons">
                    <a href="/cart" className="popup-button popup-button--primary">View my Cart (<span className="popup-cart-count">1</span>)</a>
                    <a href="/checkout" className="popup-button">Check out</a>
                </div>

                <div className="birl-credit-container">

                    <div className="birl-credit-header">
                        <div>
                            <img loading="eager"  src={birlLogo} alt="Birl Logo" width="56" height="19" />
                            <p>Trade-In available</p>
                            <a>Learn more</a>
                        </div>
                    </div>

                    <div className="birl-credit-body">

                        <div className="birl-credit-body-header">
                            <h3><span className="voucher-value">£20</span> Instant Credit </h3>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20" fill="none">
                                <path d="M13.0839 1.28571C14.6137 3.9354 15.4191 6.9411 15.4191 10.0007C15.4191 13.0603 14.6137 16.066 13.0839 18.7157M9.24931 3.20301C10.4426 5.26977 11.0708 7.61421 11.0708 10.0007C11.0708 12.3872 10.4426 14.7316 9.24931 16.7984M5.58901 4.96344C6.45182 6.47376 6.90605 8.18701 6.90605 9.93099C6.90605 11.675 6.45182 13.3882 5.58901 14.8985M1.92871 6.86331C2.55053 7.80439 2.88019 8.89141 2.88019 10.0007C2.88019 11.11 2.55053 12.197 1.92871 13.1381" stroke="url(#paint0_linear_884_77674)" strokeWidth="2" strokeLinecap="round"/>
                                <defs>
                                    <linearGradient id="paint0_linear_884_77674" x1="1.9285" y1="18.7156" x2="18.8017" y2="5.65614" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#101828"/>
                                        <stop offset="1" stop-color="#475467"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>

                        <div className="birl-credit-body-content">
                            <p className={"uppercase"}>{storeNam}</p>
                            <span>No minimum spend required</span>
                        </div>

                    </div>

                    <p className="trade-in-message">
                        Trade-In your pre-owned DAWN items to get instant money off today!
                    </p>

                </div>

            </div>
        </div>
    )
}