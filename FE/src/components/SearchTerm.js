import React from "react";

const SearchTerm = ({ setSearchTerm, searchTerm }) => {
  const handleChangeSearchTerm = (event) => {
    setSearchTerm(event?.target.value);
    console.log(searchTerm);
  };

  return (
    <div className="space-y-2">
      <h3 className="font-semibold">Search By Name</h3>
      <input
        type="text"
        className="border-2 px-2 py-1 rounded-lg"
        onChange={handleChangeSearchTerm}
      />
    </div>
  );
};

export default SearchTerm;
