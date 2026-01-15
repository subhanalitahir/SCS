import React from "react";

const ProductTable = () => {
  const headers = [
    "Product",
    "Due Upto Today",
    "Due In 1 To 2",
    "Due In 3 To 4",
    "Due In 5 To 6",
    "Due In 7 To 8",
    "Above 8 Days",
  ];

  const rowCount = 12;

  return (
    <div className="p-1 rounded-lg border border-gray-300 bg-gray-50 min-h-screen">
      {/* Responsive wrapper */}
      <div className="max-w-6xl mx-auto bg-white shadow-sm overflow-x-auto">
        <table className="w-full min-w-[600px] border-collapse border border-gray-400 table-fixed">
          <thead>
            <tr className="bg-[#e8f5e9]">
              {headers.map((header, index) => (
                <th
                  key={header}
                  className={`border border-gray-400 py-3 text-xs font-bold text-gray-700 text-center align-middle ${
                    index === 0
                      ? "w-[100px] whitespace-nowrap" // Desktop: wide first column
                      : "w-[50px] leading-tight break-words" // Desktop: narrow for 2 lines
                  }`}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[...Array(rowCount)].map((_, rowIndex) => (
              <tr key={rowIndex} className="h-10">
                {headers.map((_, colIndex) => (
                  <td
                    key={colIndex}
                    className="border border-gray-400 px-2 py-2 text-xs text-center min-w-[50px]"
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

export default ProductTable;
