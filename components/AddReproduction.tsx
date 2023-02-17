import {
  Box,
  Button,
  Checkbox,
  Group,
  Select,
  TextInput,
  NumberInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
// import {DatePicker} from '@mantine/dates';
import Axios from "axios";
import React from "react";

/**
 *
 * @example
 */
export default function AddReproduction({ singleAnimalData }:any) {
  const form = useForm({
    initialValues: {
      dateofrep: "",
      newWeight: "",
      sire: "",
    },
  });
  const nextReproduction = {
    animalId: singleAnimalData.id,
    sire: form.values.sire,
  };
  async function addReproduction(event: any) {
    // event.preventDefault();
    await Axios.post(
      "http://localhost:3000/api/animals/createReproduction",
      nextReproduction
    );
  }

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto" my="40px">
      <form onSubmit={addReproduction}>
        <NumberInput
          label="Опорос"
          placeholder="Количество"
          {...form.getInputProps("sire")}
        />
        <Group position="center" mt="md">
          <Button type="submit">Добавить</Button>
        </Group>
      </form>
    </Box>
  );
}
