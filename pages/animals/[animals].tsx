import axios from "axios";
import AddVaccine from "../../components/AddVaccine";
import AddWeight from "../../components/AddWeight";
import AnimalCard from "../../components/AnimalCard";
import { useState } from "react";
import { Modal, Button, Group } from "@mantine/core";
import AddReproduction from "../../components/AddReproduction";

const Animals = ({ singleAnimalData }: any) => {
  const [vaxOpen, setVaxOpen] = useState(false);
  const [weightOpen, setWeightOpen] = useState(false);
  const [repOpen, setRepOpen] = useState(false);
  return (
    <>
      <AnimalCard singleAnimalData={singleAnimalData} />

      <Modal opened={vaxOpen} onClose={() => setVaxOpen(false)}>
        <AddVaccine singleAnimalData={singleAnimalData} />
      </Modal>

      <Modal opened={weightOpen} onClose={() => setWeightOpen(false)}>
        <AddWeight singleAnimalData={singleAnimalData} />
      </Modal>
      <Modal opened={repOpen} onClose={() => setRepOpen(false)}>
        <AddReproduction singleAnimalData={singleAnimalData} />
      </Modal>
      <Group mt="lg" position="center">
        <Button onClick={() => setVaxOpen(true)}>Вакцинация</Button>
        <Button onClick={() => setWeightOpen(true)}>Взвешивание</Button>
        <Button onClick={() => setRepOpen(true)}>Опорос</Button>
        <Button onClick={() => setWeightOpen(true)}>Выбытие </Button>
      </Group>
    </>
  );
};

export const getServerSideProps = async (context: any) => {
  const data = await axios.get(
    "http://localhost:3000/api/animals/" + context.query.animals
  );
  return {
    props: {
      singleAnimalData: data.data,
    },
  };
};

export default Animals;
