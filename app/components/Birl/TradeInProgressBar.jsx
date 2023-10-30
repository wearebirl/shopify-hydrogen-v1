export default function TradeInProgressBar({currentStep, item}) {
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
            <div className="flex">
                <div className="w-11/12 lg:w-2/6 mx-auto">
                    <div className=" h-1 flex items-center justify-between">



                    </div>
                </div>
            </div>


        </div>


    )


}