// Used to display order history
export function OrderTable() {
  return (
    <table className="min-w-full text-sm divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider"
          >
            Item(s)
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider"
          >
            Amount
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider"
          >
            # of item(s)
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider"
          >
            Tracking
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Status
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider"
          >
            Birl trade-in
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider"
          ></th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        <tr>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-10 w-10">
                <img
                  className="h-10 w-10 rounded-md"
                  src="https://placehold.co/100x100?text=Product+1"
                  alt="Black jacket product image"
                />
              </div>
              <div className="ml-4">
                <img
                  className="h-10 w-10 rounded-md"
                  src="https://placehold.co/100x100?text=Product+2"
                  alt="Cream trousers product image"
                />
              </div>
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-gray-500">£250</td>
          <td className="px-6 py-4 whitespace-nowrap text-gray-500">
            2 item(s)
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-gray-500">
            3Y5J8Z1R6K0X2A9
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-gray-500">
            Dispatched
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="w-[103px] h-[22px] mix-blend-multiply justify-start items-start inline-flex">
              <div className="pl-1.5 pr-2 py-0.5 bg-gray-100 rounded-2xl justify-center items-center gap-1.5 flex">
                <div className="w-2 h-2 relative">
                  <div className="w-1.5 h-1.5 left-[1px] top-[1px] absolute bg-gray-500 rounded-full" />
                </div>
                <div className="text-slate-700 text-xs font-medium  leading-[18px]">
                  Not available
                </div>
              </div>
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
            <div className="w-[100px] h-[26px] mix-blend-multiply justify-start items-start inline-flex">
              <div className="px-2 py-1 cursor-pointer bg-black rounded-2xl justify-center items-center flex">
                <div className="text-center  text-white text-base font-medium  leading-[18px]">
                  View order
                </div>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-10 w-10">
                <img
                  className="h-10 w-10 rounded-md"
                  src="https://placehold.co/100x100?text=Product+3"
                  alt="Black handbag product image"
                />
              </div>
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-gray-500">£100</td>
          <td className="px-6 py-4 whitespace-nowrap text-gray-500">
            1 item(s)
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-gray-500">
            3Y5J8Z1R6K0X2A9
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-gray-500">
            Delivered
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-gray-500">
            <div className="w-[70px] h-[22px] mix-blend-multiply justify-start items-start inline-flex">
              <div className="pl-1.5 pr-2 py-0.5 bg-emerald-50 rounded-2xl justify-center items-center gap-1.5 flex">
                <div className="w-2 h-2 relative">
                  <div className="w-1.5 h-1.5 left-[1px] top-[1px] absolute bg-emerald-500 rounded-full" />
                </div>
                <div className="text-emerald-700 text-xs font-medium leading-[18px]">
                  Eligible
                </div>
              </div>
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
            <div className="w-[100px] h-[26px] mix-blend-multiply justify-start items-start inline-flex">
              <div className="px-2 py-1 cursor-pointer bg-black rounded-2xl justify-center items-center flex">
                <div className="text-center  text-white text-base font-medium  leading-[18px]">
                  View order
                </div>
              </div>
            </div>
          </td>
        </tr>{' '}
      </tbody>
    </table>
  );
}
