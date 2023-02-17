import { Box, Button, Checkbox, Group, Select, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
// import {DatePicker} from '@mantine/dates';
import Axios from "axios";
import React from "react";

/**
 *
 * @example
 */
export default function AddVaccine({ singleAnimalData }) {
  const form = useForm({
    initialValues: {
      dateofvax: "",
      nameofvax: "",
      animaId: "",
      vaxlistid: "",
    },
  });
  const nextVax = {
    animalId: singleAnimalData.id,
    vaxListId: form.values.nameofvax.charAt(0),
  };
  async function addVaccine(event: any) {
    // event.preventDefault();
    await Axios.post("http://localhost:3000/api/animals/createVax", nextVax);
  }

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto" my="40px">
      <form onSubmit={addVaccine}>
        <Select
          data={["1: П. Эри+Парво", "2: П. Бегония", "3: Дегельминтизация"]}
          placeholder="Выберите Вакцину"
          label="Вакцина"
          {...form.getInputProps("nameofvax")}
        />
        <Group position="center" mt="md">
          <Button type="submit">Добавить</Button>
        </Group>
      </form>
    </Box>
  );
}
