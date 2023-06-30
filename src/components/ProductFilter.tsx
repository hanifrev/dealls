import React, { useState } from "react";

type ProductFilterProps = {
  categories: string[];
  onFilter: (
    category: string,
    minPrice: number,
    maxPrice: number,
    minRating: number
  ) => void;
};

const ProductFilter: React.FC<ProductFilterProps> = ({
  categories,
  onFilter,
}) => {
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(9999);
  const [minRating, setMinRating] = useState(0);

  const handleFilter = () => {
    onFilter(category, minPrice, maxPrice, minRating);
  };

  return (
    <div className="mb-4 flex text-[10px] gap-3 overflow-x-auto items-center">
      <div className="mb-2 flex flex-col">
        <label htmlFor="categoryFilter">Category:</label>
        <select
          id="categoryFilter"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 border border-gray-300 rounded-md text-black"
        >
          <option value="">All</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-2 flex flex-col">
        <label htmlFor="minPriceFilter">Min Price:</label>
        <input
          id="minPriceFilter"
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(parseInt(e.target.value))}
          className="p-2 border border-gray-300 rounded-md text-black"
        />
      </div>
      <div className="mb-2 flex flex-col">
        <label htmlFor="maxPriceFilter">Max Price:</label>
        <input
          id="maxPriceFilter"
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(parseInt(e.target.value))}
          className="p-2 border border-gray-300 rounded-md text-black"
        />
      </div>

      <div className="mb-2 flex flex-col">
        <label htmlFor="minRatingFilter">Min Rating:</label>
        <input
          id="minRatingFilter"
          type="number"
          value={minRating}
          onChange={(e: any) => setMinRating(e.target.value)}
          className="  p-2 border border-gray-300 rounded-md text-black"
        />
      </div>

      <button
        onClick={handleFilter}
        className="p-2 bg-blue-500 text-white rounded-md h-min"
      >
        Apply
      </button>
    </div>
  );
};

export default ProductFilter;
