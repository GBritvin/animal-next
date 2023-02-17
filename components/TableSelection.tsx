import React, { useState } from "react";
import {
  Checkbox,
  Group,
  ScrollArea,
  Table,
  Text,
  createStyles,
} from "@mantine/core";
import { SplitButton } from "./SplitButton";

const useStyles = createStyles((theme) => ({
  rowSelected: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2)
        : theme.colors[theme.primaryColor][0],
  },
}));

interface TableSelectionProps {
  data: Array<{
    id: string;
    number: string;
    dateOfBirth: string;
    weight: string;
    name: string;
    gender: string;
    breed: string;
    rfid: string;
  }>;
}

/**
 *
 * @param root0
 * @param root0.data
 * @example
 */
export default function TableSelection({ data }: TableSelectionProps) {
  const { classes, cx } = useStyles();
  const [selection, setSelection] = useState(["1"]);

  const toggleRow = (id: string) =>
    setSelection((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  const toggleAll = () =>
    setSelection((current) =>
      current.length === data.length ? [] : data.map((item) => item.id)
    );

  const rows = data.map((item) => {
    const selected = selection.includes(item.id);

    return (
      <tr key={item.id} className={cx({ [classes.rowSelected]: selected })}>
        <td>
          <Checkbox
            checked={selection.includes(item.id)}
            onChange={() => toggleRow(item.id)}
            transitionDuration={0}
          />
        </td>
        <td>
          <Group spacing="sm">
            <Text size="sm" weight={500}>
              {item.number}
            </Text>
          </Group>
        </td>
        <td>{item.rfid}</td>
        <td>{item.breed}</td>
        <td>
          <SplitButton animalId={item.id} />
        </td>
      </tr>
    );
  });

  return (
    <ScrollArea>
      <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
        <thead>
          <tr>
            <th style={{ width: 40 }}>
              <Checkbox
                onChange={toggleAll}
                checked={selection.length === data.length}
                indeterminate={
                  selection.length > 0 && selection.length !== data.length
                }
                transitionDuration={0}
              />
            </th>
            <th>Номер</th>
            <th>RFID</th>
            <th>Порода</th>
            <th style={{ textAlign: "end" }}>Действия</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}
