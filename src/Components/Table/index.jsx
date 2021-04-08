import React from "react";
import { Table, TableBody } from "semantic-ui-react";
import { Rows } from "./../RowTable";

export const Tables = ({ data, deleteitem, updateitem }) => {
  return (
    <Table data={data} celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>web</Table.HeaderCell>
          <Table.HeaderCell>usuario</Table.HeaderCell>
          <Table.HeaderCell>contraseña</Table.HeaderCell>
          <Table.HeaderCell>accion</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <TableBody>
        {data.length === 0 ? (
          <Table.Row>
            <Table.Cell>No hay datos</Table.Cell>
          </Table.Row>
        ) : null}
        {data.map((user, i) => (
          <Rows
            data={user}
            key={i}
            deleteitem={() => {
              deleteitem(user.id);
            }}
            updateitem={updateitem}
          />
        ))}
      </TableBody>
    </Table>
  );
};
