import React from "react";

const Category = ({ categoryList, onChange, value }) => {
  const handleChangeCategory = (event) => {
    onChange(event?.target?.value);
  };

  return (
    <div className="absolute -translate-y-14 space-y-2">
      <h3 className="font-semibold">Order By Brand</h3>
      <select className="border px-2 py-1" onChange={handleChangeCategory}>
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
