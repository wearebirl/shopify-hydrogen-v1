import  styes from '../../assets/birl/product-timeline.css'
export  function TradeInProgressBar({currentStep}) {
    /**
     *
     * Step will be 0 to 6
     *
     */
    const steps = [
        {
            stepId: 0,
            title: 'Item',
            ShortTitle: 'Category',
            description: 'Item Category or Item',
        },
        {
            stepId: 1,
            title: 'Item Condition',
            ShortTitle: 'Condition',
            description: 'Item Condition',
        },
        {
            stepId: 2,
            title: 'Trade-in Value',
            ShortTitle: 'Credit',
            description: '',
        },
        {
            stepId: 3,
            title: 'Contact Detials',
            ShortTitle: 'Contact',
            description: '',
        },
        {
            stepId: 4,
            title: 'Review',
            ShortTitle: 'Review',
            description: '',
        }
    ]

    return (

        <div className="max-w-7xl py-6 mx-auto">
            <div className="birl-timeline-container">
                <div className="dashed-line"></div>
                <div className="solid-line"></div>
                {steps.map((step, index) => {
                    return(
                    <div key={index} className="timeline-status">
                        <div className={`indicator  ${index >= currentStep-1 && "inactive"} ${index > currentStep-1 && " indicator-disabled"} `}>
                            <svg width="14px" height="14px" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M21.2287 6.60355C21.6193 6.99407 21.6193 7.62723 21.2287 8.01776L10.2559 18.9906C9.86788 19.3786 9.23962 19.3814 8.84811 18.9969L2.66257 12.9218C2.26855 12.5349 2.26284 11.9017 2.64983 11.5077L3.35054 10.7942C3.73753 10.4002 4.37067 10.3945 4.7647 10.7815L9.53613 15.4677L19.1074 5.89644C19.4979 5.50592 20.1311 5.50591 20.5216 5.89644L21.2287 6.60355Z"
                                      fill="#ffffff"/>
                            </svg>
                        </div>
                        <span className="desktop-label font-Inter">{step.title}</span>
                        <span className="mobile-label font-Inter">{step.ShortTitle}</span>
                    </div>

                    )
                })}


            </div>

        </div>


    )


}