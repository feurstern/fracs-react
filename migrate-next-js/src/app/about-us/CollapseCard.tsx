"use client";
import React from "react";
import { Collapse } from "antd";
import { standarImparsialitas } from "../constant";
const CollapseCard = () => {
  const onChange = key => {
    console.log(key);
  };
  return (
    <Collapse
      items={standarImparsialitas}
      defaultActiveKey={["1"]}
      onChange={onChange}
    />
  );
};
export default CollapseCard;
