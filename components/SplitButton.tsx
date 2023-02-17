import React from "react";
import {
  createStyles,
  Button,
  Menu,
  Group,
  ActionIcon,
  Center,
} from "@mantine/core";
import {
  Trash,
  Scale,
  Vaccine,
  TransferIn,
  ChevronDown,
} from "tabler-icons-react";
import Link from "next/link";
import Axios from "axios";

const useStyles = createStyles((theme) => ({
  button: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },

  menuControl: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    border: 0,
    borderLeft: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white
    }`,
  },
}));

export function SplitButton({ animalId }: any) {
  const { classes, theme } = useStyles();
  const menuIconColor =
    theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 5 : 6];

  async function deleteAnimal(event: any) {
    event.preventDefault();
    await Axios.delete(`http://localhost:3000/api/animals/${animalId}`);
  }

  return (
    <Group noWrap spacing={0} style={{ justifyContent: "flex-end" }}>
      <Link href={"/animals/" + animalId}>
        <Button className={classes.button}>Inspect</Button>
      </Link>
      <Menu
        control={
          <ActionIcon
            variant="filled"
            color={theme.primaryColor}
            size={36}
            className={classes.menuControl}
          >
            <ChevronDown size={16} />
          </ActionIcon>
        }
        transition="pop"
        placement="end"
      >
        <Menu.Item icon={<Vaccine size={16} color={menuIconColor} />}>
          Вакцинация
        </Menu.Item>
        <Menu.Item icon={<Scale size={16} color={menuIconColor} />}>
          Взвешивание
        </Menu.Item>
        <Menu.Item icon={<TransferIn size={16} color={menuIconColor} />}>
          Опорос
        </Menu.Item>
        <Link href={"/animals/" + animalId}>
          <Menu.Item
            icon={<Trash size={16} color={"red"} />}
            onClick={deleteAnimal}
          >
            Выбытие
          </Menu.Item>
        </Link>
      </Menu>
    </Group>
  );
}
