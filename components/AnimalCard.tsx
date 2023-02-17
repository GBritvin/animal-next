import { Center, Stack, Accordion, AccordionItem } from "@mantine/core";
import styles from "../styles/AnimalCard.module.css";

const AnimalCard = ({ singleAnimalData }: any) => {
  return (
    <>
      <div className={styles.card}>
        <h2>Паспорт Животного</h2>
        <div className={styles.cardRow}>
          <span className={styles.cardLabel}>Номер: </span>
          <span>{singleAnimalData.number}</span>
        </div>
        <div className={styles.cardRow}>
          <span className={styles.cardLabel}>Дата Рождения: </span>
          <span>{singleAnimalData.dateofbirth}</span>
        </div>
        <div className={styles.cardRow}>
          <span className={styles.cardLabel}>Порода: </span>
          <span>{singleAnimalData.breed}</span>
        </div>
        <div className={styles.cardRow}>
          <span className={styles.cardLabel}>Вес: </span>
          <span>{singleAnimalData.weight[0]?.currentWeight}</span>
        </div>
        <div className={styles.cardRow}>
          <span className={styles.cardLabel}>Пол: </span>
          <span>{singleAnimalData.gender}</span>
        </div>
        <div className={styles.cardRow}>
          <span className={styles.cardLabel}>Место: </span>
          <span>{singleAnimalData.groupId}</span>
        </div>
        {/* <div className={styles.cardRow}>
          <span className={styles.cardLabel}>Статус: </span>
          <span>{singleAnimalData.status}</span>
        </div> */}
      </div>
      <Accordion>
        <AccordionItem label="История Вакцинация">
          {singleAnimalData.vaccine.map((vaxInstance:any) => (
            <>
              <div className={styles.cardRow}>
                <span className={styles.cardLabel}>
                  {vaxInstance.nameofvax.vaxname.slice(3)}:
                </span>
                <span>
                  <Stack spacing={1}>
                    <span>{vaxInstance.dateofvax.slice(0, 10)}</span>
                    <Center>
                      <small>{vaxInstance.dateofvax.slice(11, 16)}</small>
                    </Center>
                  </Stack>
                </span>
              </div>
            </>
          ))}
        </AccordionItem>
        <AccordionItem label="История Взвешивания">
          {singleAnimalData.weight.map((weightInstance:any) => (
            <>
              <div className={styles.cardRow}>
                <span className={styles.cardLabel}>
                  {weightInstance.currentWeight} кг:
                </span>
                <span>
                  <Stack spacing={1}>
                    <span>{weightInstance.dateofweight.slice(0, 10)}</span>
                    <Center>
                      <small>{weightInstance.dateofweight.slice(11, 16)}</small>
                    </Center>
                  </Stack>
                </span>
              </div>
            </>
          ))}
        </AccordionItem>
        <AccordionItem label="История Опороса">
          {singleAnimalData.reproduction.map((repInstance:any) => (
            <>
              <div className={styles.cardRow}>
                <span className={styles.cardLabel}>
                  {repInstance.sire} поросят:
                </span>
                <span>
                  <Stack spacing={1}>
                    <span>{repInstance.dateofrep.slice(0, 10)}</span>
                    <Center>
                      <small>{repInstance.dateofrep.slice(11, 16)}</small>
                    </Center>
                  </Stack>
                </span>
              </div>
            </>
          ))}
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default AnimalCard;
