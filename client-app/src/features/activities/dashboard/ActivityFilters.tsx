import React from "react";
import { Calendar } from "react-calendar";
import { Header, Menu } from "semantic-ui-react";

const ActivityFilters = () => {
  return (
    <>
      <Menu vertical size="large" style={{ width: "100%", marginTop: 27, borderRadius: '5px' }}>
        <Header icon="filter" attached color="teal" contextMenu="Filters"
            style={{borderRadius: '5px'}} />
        <Menu.Item content="All Activities" />
        <Menu.Item content="I'm going" />
        <Menu.Item content="I'm hosting" />
      </Menu>
      <Header />
      <Calendar />
    </>
  );
};

export default ActivityFilters;
