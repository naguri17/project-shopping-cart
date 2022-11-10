import React from "react";

const Category = ({ categoryList, onChange, value }) => {
  const handleChangeCategory = (event) => {
    onChange(event?.target?.value);
  };

  return (
    <div className="space-y-2">
      <h3 className="font-semibold">Order By Brand</h3>
      <select
        className="border-2 rounded-lg px-2 py-1"
        onChange={handleChangeCategory}
      >
        {categoryList.map((opt, idx) => (
          <option key={idx} value={opt} select={value}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Category;
