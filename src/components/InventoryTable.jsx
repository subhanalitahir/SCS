import React from "react";

const InventoryTable = () => {
  const headers = [
    "Product",
    "Outstanding Qty",
    "Outstanding M.Tons",
    "Available Stock",
    "Difference",
    "Excess / Short",
  ];

  const rowCount = 12;

  return (
    <div className="p-1 rounded-lg  bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white shadow-sm overflow-x-auto">
        <table className="w-full min-w-[600px] border-collapse border border-gray-400 table-fixed">
          <thead>
            <tr className="bg-[#e8f5e9]">
              {headers.map((header, index) => (
                <th
                  key={header}
                  className={`border border-gray-400 py-2 text-[10px] sm:text-xs text-gray-700 text-center align-middle ${
                    index === 0
                      ? "w-[120px] whitespace-nowrap"
                      : "w-[80px] leading-tight break-words"
                  }`}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {[...Array(rowCount)].map((_, rowIndex) => (
              <tr key={rowIndex} className="h-8 sm:h-10">
                {headers.map((_, colIndex) => (
                  <td
                    key={colIndex}
                    className="border border-gray-400 px-2 sm:px-4 py-1 sm:py-2 text-xs"
                  >
                    {/* Empty cell */}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InventoryTable;