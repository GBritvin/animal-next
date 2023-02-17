import AddAnimal from "../../components/AddAnimal";
import Axios from "axios";
import React, { useState } from "react";
import TableSelection from "../../components/TableSelection";
import { useQuery, useMutation, QueryClient } from "@tanstack/react-query";
import { Button, Center, Group, Modal } from "@mantine/core";

/**
 *
 * @param root0
 * @param root0.animalData
 * @example
 */

function AnimalList() {
  const [addOpen, setAddOpen] = useState(false);
  const queryClient = new QueryClient();
  const fetchAnimals = async () => {
    return await Axios.get("http://localhost:3000/api/animals");
  };
  const { isLoading, isError, data, error, refetch } = useQuery(
    ["allAnimals"],
    fetchAnimals
  );

  // const deleteAnimal = async () => {
  //   return await Axios.delete(`http://localhost:3000/api/animals/60`);
  // };

  // const deleteMut = useMutation(deleteAnimal, {
  //   onSuccess: () => {
  //     queryClient.invalidateQueries(["allAnimals"]);
  //   },
  // });

  if (isLoading) return <div>Загрузка...</div>;
  return (
    <>
      <Modal opened={addOpen} onClose={() => setAddOpen(false)}>
        <AddAnimal />
      </Modal>

      <Group position="center" mb="md">
        {/* <Button onClick={refetch}>Обновить</Button> */}
        <Button onClick={() => setAddOpen(true)}>Добавить</Button>
      </Group>
      <TableSelection data={data?.data} />
      {/* <ul>
        {data?.data.map((animal) => (
          <li key={animal.id}>{animal.number}</li>
        ))}
      </ul> */}
    </>
  );
}

/**
 *
 * @example
 */
// export async function getServerSideProps() {
//   const data = await Axios.get("http://localhost:3000/api/animals");

//   return {
//     props: {
//       animalData: data.data,
//     },
//   };
// }

export default AnimalList;
