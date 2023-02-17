import { Button, Center, Group, Modal } from "@mantine/core";
import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import AddAnimal from "../components/AddAnimal";
import StatsRfid from "../components/StatsRfid";

const Home: NextPage = () => {
  const [scannedAnimals, setScannedAnimals] = useState([]);
  const [formOpen, setFormOpen] = useState(false);
  const [selectedRfid, setSelectedRfid] = useState();
  const [selectedColor, setSelectedColor] = useState(["1"]);

  // useEffect(() => {
  //   const randomArray = [];
  //   for (let i = 0; i < 10; i++) {
  //     randomArray.push(Math.random().toString().slice(2));
  //   }
  //   setScannedAnimals(randomArray);
  // }, []);

  const scanOne = () => {
    const randomArray = [];
    for (let i = 0; i < 1; i++) {
      randomArray.push(Math.random().toString().slice(2));
    }
    setScannedAnimals(randomArray);
  };
  const scanMany = () => {
    const randomArray = [];
    for (let i = 0; i < 10; i++) {
      randomArray.push(Math.random().toString().slice(2));
    }
    setScannedAnimals(randomArray);
  };
  const toggleRow = (id) =>
    setSelectedColor((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );

  const handleClick = (item) => {
    // setScannedAnimals(scannedAnimals.filter((el) => el !== item));
    setSelectedRfid(item);
    // toggleRow(item);
    setFormOpen(true);
  };

  return (
    <div>
      <Center mb="xl">
        <Group>
          <Button onClick={scanOne}>Сканировать 1</Button>
          <Button onClick={scanMany}>Сканировать Несколько</Button>
        </Group>
      </Center>

      {scannedAnimals.map((item, key) => {
        const selected = selectedColor.includes(item);
        return (
          <div
            key={key}
            onClick={() => handleClick(item)}
            // className={selected ? "bgcolored" : ""}
            className="dtable"
          >
            <StatsRfid data={item} />
          </div>
        );
      })}
      <Modal opened={formOpen} onClose={() => setFormOpen(false)}>
        <AddAnimal rfid={selectedRfid} />
      </Modal>

      {/* <button id="scan" onClick={function() {
        console.log('start scan');
        android.startScan();
      }}
      >
Press me harder
      </button>
      <button id="stop" onClick={function() {
        console.log('stop scan');
        android.startScan();
      }}
      >
plz stop
      </button> */}
    </div>
  );
};

export default Home;

// export const getStaticProps = async () => {
//   const data = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?_limit=6`
//   );

//   return {
//     props: {
//       articles: await data.json(),
//     },
//   };
// };
