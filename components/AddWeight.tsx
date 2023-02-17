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
export default function AddWeight({ singleAnimalData }) {
  const form = useForm({
    initialValues: {
      dateofweight: "",
      currentWeight: singleAnimalData.weight[0]?.currentWeight,
      newWeight: "",
      animaId: "",
    },
  });
  const nextWeight = {
    animalId: singleAnimalData.id,
    currentWeight: form.values.newWeight,
  };
  async function addWeight(event: any) {
    // event.preventDefault();
    await Axios.post(
      "http://localhost:3000/api/animals/createWeight",
      nextWeight
    );
  }

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto" my="40px">
      <form onSubmit={addWeight}>
        <TextInput
          disabled
          label="Старый вес"
          placeholder="Старый вес"
          {...form.getInputProps("currentWeight")}
        />
        <NumberInput
          label="Новый вес"
          placeholder="Новый вес"
          {...form.getInputProps("newWeight")}
        />
        <Group position="center" mt="md">
          <Button type="submit">Добавить</Button>
        </Group>
      </form>
    </Box>
  );
}
