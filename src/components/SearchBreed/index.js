import React, { useState } from "react";
import { Input, Space, Spin } from "antd";
import SearchResult from "../SearchResult/";
import { getBreeds } from "../../store/actions/";
const { Search } = Input;

const SearchBreed = () => {
  const [imageURLs, setImageURLs] = useState([]);
  const [value, setValue] = useState("");
  const [clickSearch, setClickSearch] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSearch = (value) => {
    const search = value.trim();

    setValue(search);
    handleBreeds(search);

    setClickSearch(true);
  };

  const handleBreeds = (search) => {
    setIsLoading(true);
    getBreeds({
      search,
      success: (data) => {
        if (data?.message?.length) {
          setImageURLs(data.message);
        }
        setIsLoading(false);
      },
      failure: (err) => {
        if (err) console.log("[ERROR]", err);
        setIsLoading(false);
      },
    });
  };

  return (
    <section>
      {isLoading && (
        <Spin
          size="large"
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      )}

      {!isLoading && (
        <Space direction="vertical">
          <Search
            placeholder="Search for breed"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
          />
        </Space>
      )}
      {clickSearch && <SearchResult imageURL={imageURLs} value={value} />}
    </section>
  );
};

export default SearchBreed;
