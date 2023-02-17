import { Box, Button, Checkbox, Group, Select, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
// import {DatePicker} from '@mantine/dates';
import Axios from "axios";
import React from "react";

/**
 *
 * @example
 */
export default function AddAnimal({ rfid }) {
  let actualRfid;
  if (!rfid) {
    actualRfid = "";
  } else {
    actualRfid = rfid;
  }
  const form = useForm({
    initialValues: {
      number: "",
      dateofbirth: "",
      gender: "Ж",
      breed: "Беркширская",
      rfid: actualRfid,
      groupId: "1",
    },
  });

  /**
   *
   * @param e
   * @param event
   * @example
   */
  const nextAnimal = {
    number: form.values.number,
    dateofbirth: "",
    gender: form.values.gender,
    breed: form.values.breed,
    rfid: form.values.rfid,
    groupId: form.values.groupId.charAt(0),
  };
  async function addAnimal(event: any) {
    event.preventDefault();
    console.log(form.values);
    await Axios.post("http://localhost:3000/api/animals/create", nextAnimal);
  }

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto" my="40px">
      <form onSubmit={addAnimal}>
        <TextInput
          label="Номер"
          placeholder="Номер животного"
          {...form.getInputProps("number")}
        />
        {/* <DatePicker
            label="Дата рождения"
            placeholder="Дата"
            {...form.getInputProps('dateofbirth')}
        /> */}
        <TextInput
          label="RFID"
          placeholder="RFID"
          {...form.getInputProps("rfid")}
        />
        <Select
          data={["М", "Ж"]}
          placeholder="Пол животного"
          label="Пол"
          {...form.getInputProps("gender")}
        />
        <Select
          data={[
            "Беркширская",
            "Брейтовская",
            "Восточно-балканская",
            "Вьетнамская вислобрюхая",
            "Датская протестная",
            "Ливенская",
          ]}
          placeholder="Порода животного"
          label="Порода"
          {...form.getInputProps("breed")}
        />
        <Select
          data={[
            "1ый Загон",
            "2ой Загон",
            "3ий Загон",
            "4ый Загон",
            "5ый Загон",
            "6ой Загон",
            "7ой Загон",
          ]}
          placeholder="Место"
          label="Место"
          {...form.getInputProps("groupId")}
        />
        <Group position="center" mt="md">
          <Button type="submit">Добавить</Button>
        </Group>
      </form>
    </Box>
  );
}
