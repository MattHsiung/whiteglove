import React, { useEffect } from "react";
import Quagga from "quagga";
const Barcode = ({ onScan }) => {
  useEffect(() => {
    Quagga.init(
      {
        inputStream: {
          name: "Live",
          type: "LiveStream",
          target: document.querySelector("#barcode") // Or '#yourElement' (optional)
        },
        decoder: {
          readers: ["code_128_reader"]
        }
      },
      function(err) {
        if (err) {
          console.log(err);
          return;
        }
        const handler = data => {
          if (data.codeResult.code) {
            Quagga.offProcessed(handler);
            Quagga.stop();
            onScan(data.codeResult.code);
          }
        };
        Quagga.start();
        Quagga.onDetected(handler);
      }
    );
  }, []);
  return <div id="barcode" />;
};

export default Barcode;
