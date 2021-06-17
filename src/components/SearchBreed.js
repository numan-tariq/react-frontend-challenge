import React, { useState } from "react";
import axios from "axios";

import { Input, Space } from "antd";
import SearchResult from "./SearchResult";

const { Search } = Input;

const SearchBreed = () => {
  const [imageURLs, setImageURLs] = useState([]);
  const [value, setValue] = useState("");
  const [clickSearch, setClickSearch] = useState(false);

  const onSearch = async (value) => {
    const search = value.trim();

    setValue(search);

    getData(search);

    setClickSearch(true);
  };

  const getData = async (search) => {
    return await axios
      .get(`https://dog.ceo/api/breed/${search}/images`)
      .then((response) => {
        const data = response.data.message;
        setImageURLs(data);
      });
  };

  return (
    <section>
      <Space direction="vertical">
        <Search
          placeholder="Search for breed"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
        />
      </Space>
      {clickSearch && <SearchResult imageURL={imageURLs} value={value} />}
    </section>
  );
};

export default SearchBreed;
