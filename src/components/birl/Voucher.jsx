export function Voucher({ order, type }) {
    const isUpsell = type === "Upsell";
    const strokeColor = isUpsell ? 'white' : 'url(#paint0_linear_884_77674)';

    return (
        <div className={`${type === "Normal" ? "bg-[#96D610]" : "bg-upsell-card"} rounded-[20px] p-[15px] max-w-[234px] w-full h-[140px] max-h-[140px] flex flex-col justify-between ${type == "Normal" && "mr-[20px]"}`}>
            <div className="flex justify-between items-center">
                <h3 className="text-white text-[20px] font-bold font-Inter">£{Number(order?.category[`Grade${order?.condition?.grade}${type == "Normal" ? "" : "Upsell"}`])} Credit</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20" fill="none">
                    <path d="M13.0839 1.28571C14.6137 3.9354 15.4191 6.9411 15.4191 10.0007C15.4191 13.0603 14.6137 16.066 13.0839 18.7157M9.24931 3.20301C10.4426 5.26977 11.0708 7.61421 11.0708 10.0007C11.0708 12.3872 10.4426 14.7316 9.24931 16.7984M5.58901 4.96344C6.45182 6.47376 6.90605 8.18701 6.90605 9.93099C6.90605 11.675 6.45182 13.3882 5.58901 14.8985M1.92871 6.86331C2.55053 7.80439 2.88019 8.89141 2.88019 10.0007C2.88019 11.11 2.55053 12.197 1.92871 13.1381" 
                          stroke={strokeColor} 
                          strokeWidth="2" 
                          strokeLinecap="round">
                    </path>
                    {isUpsell ? null : (
                        <defs>
                            <linearGradient id="paint0_linear_884_77674" x1="1.9285" y1="18.7156" x2="18.8017" y2="5.65614" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#101828"></stop>
                                <stop offset="1" stopColor="#475467"></stop>
                            </linearGradient>
                        </defs>
                    )}
                </svg>
            </div>
            
            <div>
                <p className={`text-xs ${type == "Normal" ? "text-black" : "text-white"} font-Inter`}>
                    Lavenham
                </p>
                <p className={`text-xs ${type == "Normal" ? "text-black" : "text-white"} font-Inter`}>
                    {
                         Number(order?.category[`Grade${order?.condition?.grade}Threshold`]) > 0 && type !== "Normal" ? `Valid on orders over £${Number(order?.category[`Grade${order?.condition?.grade}Threshold`])}` : "No minimum spend required"
                    }
                </p>
            </div>

        </div>
    );
}


