import ButtonProgress from "./ButtonProgress";

const List = ({ data }: any) => {
  console.log(data);
  return (
    <div>
      {data.map((animal: any) => (
        <>
          <h3 key={animal.id}>{animal.name}</h3>
          <p>{animal.placeID}</p>
          <p>{animal.rfid}</p>
        </>
      ))}
    </div>
  );
};

export default List;
