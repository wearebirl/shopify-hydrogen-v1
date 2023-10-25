

export function ProductCta() {

  let ctaOptions = {
    options: [
      {
        id: 1,
        title: "Trade-in your pre-owned items and receive money off today",
        active: true,
      },
        {
        id: 2,
        title: "Have a DAWN item you’ve bought from elsewhere",
        active: false,
        }],
  }

  return (
      <div className="birl-product-cta-container">
        <img loading="eager" src="{{ 'birl-logo-white.png' | asset_img_url: '56x19' }}" width="56" height="19" alt="Birl Logo"/>
          <div className="birl-product-cta-text">
            <p>
              {ctaOptions.options[0].active &&
                <span>Trade-in your pre-owned items and receive money off today <span className="product-cta-links"><button onClick="openDropdown()">Learn more</button> <img loading="eager"  src="{{ 'arrow-right.png' | asset_img_url: 'master' }}" alt="Arrow" width="16" height="16" /></span></span>
              }
              {ctaOptions.options[1].active &&
                <span>Have a DAWN item you’ve bought from elsewhere <span className="product-cta-links"><button onClick="openDropdown()">Click here</button> <img loading="eager" src="{{ 'arrow-right.png' | asset_img_url: 'master' }}" alt="Arrow" width="16" height="16" /></span></span>
              }
            </p>
          </div>
      </div>
)
}
