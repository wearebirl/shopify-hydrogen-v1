

export default function TradeInProgressBar({currentStep, item}){
    /**
     *
     * Step will be 0 to 6
     *
     */
    const steps = [
        {
            stepId: 0,
            title: 'Item',
            ShortTitle: 'Categorty',
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
            active: true,
        },
        {
            stepId: 3,
            title: 'Contact Detials',
            ShortTitle: 'Contact',
            description: '',
            active: true,
        },
        {
            stepId: 4,
            title: 'Review',
            ShortTitle: 'Review',
            description: '',
            active: true,
        }
]

    return(
        <div>
            {currentStep}
        </div>

    )



}