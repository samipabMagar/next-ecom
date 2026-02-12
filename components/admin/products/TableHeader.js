"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  LuChevronDown,
  LuChevronsUpDown,
  LuChevronUp,
  LuCog,
} from "react-icons/lu";

const columns = [
  { key: "name", label: "Product name" },
  { key: "category", label: "Category" },
  { key: "brand", label: "Brand" },
  { key: "price", label: "Price" },
  { key: "stock", label: "Stock" },
  { key: "createdAt", label: "Created At" },
];

const TableHeader = () => {
  const [sortKey, setSortKey] = useState("createdAt");
  const [sortOrder, setSortOrder] = useState(-1);

  const router = useRouter();

  function sort(key) {
    const params = new URLSearchParams();
    setSortOrder(sortOrder == 1 ? -1 : 1);
    setSortKey(key);

    params.set("sort", JSON.stringify({ [key]: sortOrder }));

    router.push(`?${params}`);
  }

  return (
    <thead className="text-xs cursor-pointer text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        {columns.map((column) => (
          <th
            key={column.key}
            scope="col"
            className="px-4 py-3"
            onClick={() => sort(column.key)}
          >
            <div className="flex items-center gap-1">
              {column.label}

              {sortKey == column.key ? (
                sortOrder == 1 ? (
                  <LuChevronDown />
                ) : (
                  <LuChevronUp />
                )
              ) : (
                <LuChevronsUpDown />
              )}
            </div>
          </th>
        ))}
        <th scope="col" className="px-4 py-3 flex justify-center">
          <LuCog />
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;