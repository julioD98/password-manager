import React, { useState } from "react";
import { Table, Button } from "semantic-ui-react";
import { UpDateItem } from "./../UpdateItem";

export const Rows = ({ data, deleteitem, updateitem }) => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => setVisible(!visible);
  return (
    <Table.Row data={data}>
      <Table.Cell width="3">{data.web}</Table.Cell>
      <Table.Cell width="3">{data.user}</Table.Cell>
      <Table.Cell width="3">{!visible ? "**********" : data.pass}</Table.Cell>
      <Table.Cell width="2">
        <Button onClick={deleteitem} icon="trash" />
        <UpDateItem data={data} updateitem={updateitem} />
        <Button icon={!visible ? "eye" : "eye slash"} onClick={toggleVisible} />
      </Table.Cell>
    </Table.Row>
  );
};
