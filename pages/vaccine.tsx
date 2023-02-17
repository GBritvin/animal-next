const Weight = () => {
  /**
   *
   * @example
   */
  function read() {
    return new Promise((resolve, reject) => {
      const ctlr = new AbortController();
      ctlr.signal.onabort = reject;
      ndef.addEventListener('reading', (event) => {
        ctlr.abort();
        resolve(event);
      }, {once: true});
      ndef.scan({signal: ctlr.signal}).catch((err) => reject(err));
    });
  }
  console.log('reading NFC');
  read().then(({serialNumber}) => {
    console.log(serialNumber);
  });

  return (

    <div>
      <button onClick={function() {
        alert('start scan');
        window.android.startScan();
      }}
      >
  weight
      </button>

    </div>
  );
};

export default Weight;
const ndef = new NDEFReader();
