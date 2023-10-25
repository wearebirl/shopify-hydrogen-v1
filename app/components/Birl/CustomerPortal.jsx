
export function CustomerPortal() {
    return (
        <div className="customer-portal-container">

            <div className="customer-portal-panel">

                <div className="customer-panel-top">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M9 22V12H15V22M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>Orders</span>
                    </button>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M2 17L12 22L22 17M2 12L12 17L22 12M12 2L2 7L12 12L22 7L12 2Z" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>Address details</span>
                    </button>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M9 11L12 14L22 4M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>Payment</span>
                    </button>
                </div>

                <div className="customer-panel-bottom">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_446_56763)">
                                <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_446_56763">
                                    <rect width="24" height="24" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <span>Settings</span>
                    </button>

                    <div className="customer-account-panel">
                        <div className="panel-details">
                            <img src="https://placehold.co/500x200 " width="40" height="40"/>
                            <div className="customer-account-details">
                                <div>
                                    {% if customer %}
                                    <p className="account-name">{{ customer.name }}</p>
                                    <p className="account-email">{{ customer.email }}</p>
                                    {% else %}
                                    <p className="account-name">Olivia Jones</p>
                                    <p className="account-email">olivia@untitledui.com</p>
                                    {% endif %}
                                </div>

                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M7.5 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H7.5M13.3333 14.1667L17.5 10M17.5 10L13.3333 5.83333M17.5 10H7.5" stroke="#667085" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <div className="customer-portal-body">
                <div className="mobile-menu">
                    <button className="mobile-menu-button">
                <span className="icon-menu">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M9 22V12H15V22M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </span>

                        <span>Orders</span>

                        <span className="chevron">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M15 12.5L10 7.5L5 12.5" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </span>

                    </button>

                    <div className="mobile-panel-top">
                        <div>
                            <button>
                                <span>Orders</span>
                            </button>
                            <button>
                                <span>Payment</span>
                            </button>
                            <button>
                                <span>Address details</span>
                            </button>
                        </div>

                        <div className="customer-account-panel">
                            <div className="panel-details">
                                <img src="https://placehold.co/500x200 " width="40" height="40"/>
                                <div className="customer-account-details">
                                    <div>
                                        {% if customer %}
                                        <p className="account-name">{{ customer.name }}</p>
                                        <p className="account-email">{{ customer.email }}</p>
                                        {% else %}
                                        <p className="account-name">Olivia Jones</p>
                                        <p className="account-email">olivia@untitledui.com</p>
                                        {% endif %}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="customer-portal-breadcrumb">

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M9 22V12H15V22M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                    <svg  className="arrow-right" xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
                        <path d="M1 11L6 6L1 1" stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                    <span>Orders</span>

                </div>

                <h1>Account</h1>

                <div className="customer-portal-search-container">
                    <h6>Search</h6>
                    <div className="filter-container">
                        <div className="search-container">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <input type="text" placeholder="Search orders"/>
                        </div>
                        <button className="sort-button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M5 10H15M2.5 5H17.5M7.5 15H12.5" stroke="#344054" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span>Sort by: Newest to oldest</span>
                        </button>
                    </div>


                </div>

                <div className="customer-orders">
                    <table>
                        <thead>
                        <tr>
                            <th>Item(s)</th>
                            <th>Amount</th>
                            <th># of item(s)</th>
                            <th>Tracking
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <g clip-path="url(#clip0_2622_444)">
                                        <path d="M6.06004 5.99998C6.21678 5.55442 6.52614 5.17872 6.93334 4.9394C7.34055 4.70009 7.8193 4.61261 8.28483 4.69245C8.75035 4.7723 9.17259 5.01433 9.47676 5.37567C9.78093 5.737 9.94741 6.19433 9.94671 6.66665C9.94671 7.99998 7.94671 8.66665 7.94671 8.66665M8.00004 11.3333H8.00671M14.6667 7.99998C14.6667 11.6819 11.6819 14.6666 8.00004 14.6666C4.31814 14.6666 1.33337 11.6819 1.33337 7.99998C1.33337 4.31808 4.31814 1.33331 8.00004 1.33331C11.6819 1.33331 14.6667 4.31808 14.6667 7.99998Z" stroke="#98A2B3" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2622_444">
                                            <rect width="16" height="16" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </th>
                            <th>Status</th>
                            <th>Birl trade-in</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="img-icons">
                                <img src="https://placehold.co/49x59" width="49" height="59" />
                                <img src="https://placehold.co/49x59" width="49" height="59" />
                                <span> +1 </span>
                            </td>
                            <td>£250</td>
                            <td>2 item(s)</td>
                            <td>3Y5J8Z1R6K0X2A9</td>
                            <td>Delivered</td>
                            <td className="status-text--Eligible">
                                <span>Eligible</span>
                            </td>
                            <td>
                                <button className="view-order">View order</button>
                            </td>
                        </tr>
                        <!-- You can add more rows as needed -->
                        </tbody>
                    </table>

                    <div className="customer-order-mobile">
                        <h1>Order #0001</h1>
                        <div>
                            <p>Amount <span className="mobile-bold">£250</span></p>
                            <p># of item(s) <span className="mobile-bold">2</span></p>
                            <p>Tracking <span className="mobile-bold">3Y5J8Z1R6K0X2A9</span></p>
                            <p>Status <span>Delivered</span></p>
                            <p>Birl trade-in <span className="status-text--Eligible"><span>Eligible</span></span> </p>

                            <button className="view-order">View order</button>
                        </div>

                    </div>

                    <div class="birl-product-cta-container">
                        <img loading="eager" src="{{ 'birl-logo-white.png' | asset_img_url: '56x19' }}" width="56" height="19" alt="Birl Logo">
                            <div class="birl-product-cta-text">
                                <p>
                                    {% if block.settings.text_value == "Option #1" %}
                                    <span>Trade-in your pre-owned items and receive money off today <span class="product-cta-links"><button onClick="openDropdown()">Learn more</button> <img loading="eager"  src="{{ 'arrow-right.png' | asset_img_url: 'master' }}" alt="Arrow" width="16" height="16" /></span></span>
                                    {% elsif block.settings.text_value == "Option #2" %}
                                    <span>Have a DAWN item you’ve bought from elsewhere <span class="product-cta-links"><button onClick="openDropdown()">Click here</button> <img loading="eager" src="{{ 'arrow-right.png' | asset_img_url: 'master' }}" alt="Arrow" width="16" height="16" /></span></span>
                                    {% endif %}
                                </p>
                            </div>
                    </div>

                </div>

            </div>

        </div>
    );
}