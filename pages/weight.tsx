const Weight = () => {

  const nfHandle = async ()=> {
    try {
      const ndef = new NDEFReader();
      await ndef.scan();
      console.log("> Scan started");
  
      ndef.addEventListener("readingerror", () => {
        console.log("Argh! Cannot read data from the NFC tag. Try another one?");
      });
  
      ndef.addEventListener("reading", ({ message, serialNumber }) => {
        console.log(`> Serial Number: ${serialNumber}`);
        console.log(`> Records: (${message.records.length})`);
      });
    } catch (error) {
      console.log("Argh! " + error);
    }
  }
  

  return (
    <div>
      <button onClick={nfHandle}
      >
weight
      </button>

    </div>
  );
};

export default Weight;
