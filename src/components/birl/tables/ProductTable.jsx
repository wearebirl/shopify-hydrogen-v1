// Used to display the products in the order history
export function ProductTable() {
  return (
    <table className="min-w-full text-sm divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider"
          >
            Item
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider"
          ></th>
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
            Colour
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500  tracking-wider"
          >
            Size
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Payment method
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
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center">
              <div>
                <span className="text-gray-500 text-sm font-medium leading-tight">
                  SKU-3061
                  <br />
                </span>
                <span className="text-gray-500 text-sm font-normal leading-tight">
                  Mini Messenger Bag
                </span>
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
            <div className="w-[129px] h-10 flex-col justify-start items-start inline-flex">
              <div className="text-gray-900 text-sm font-normal leading-tight">
                **** **** **** 9012
              </div>
              <div className="text-gray-500 text-sm font-normal leading-tight">
                Expiry 06/2024
              </div>
            </div>
          </td>

          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
            {/* <div className="w-[100px] h-[26px] mix-blend-multiply justify-start items-start inline-flex">
              <div className="px-2 py-1 cursor-pointer bg-black rounded-2xl justify-center items-center flex">
                <div className="text-center  text-white text-base font-medium  leading-[18px]">
                  View order
                </div>
              </div>
            </div> */}

            <div className="w-[82px] h-[26px] cursor-pointer mix-blend-multiply justify-start items-start inline-flex">
              <div className="px-2 py-1 bg-green-600 rounded-2xl justify-center items-center flex">
                <div className="text-center text-white text-base font-medium leading-[18px]">
                  Trade-In
                </div>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
