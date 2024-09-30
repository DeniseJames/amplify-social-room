import React, { useEffect, useRef, useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import vCardsJS from 'vcards-js';

const QRCodeScannerComponent = () => {
  const [vCardData, setVCardData] = useState<string | null>(null);
  const scannerRef = useRef<Html5QrcodeScanner | null>(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "reader",
      { fps: 10, qrbox: 250 },
      false
    );

    scanner.render((decodedText) => {
      const vCard = vCardsJS();
      vCard.firstName = 'Denise';
      vCard.lastName = 'James';
      vCard.organization = 'Quantum Computer Learning';
      vCard.workPhone = '510-248-9518';
      vCard.email = 'denisetoo@gmail.com';
      vCard.url = 'https://dataquantumai.com';
      vCard.note = 'CEO';

      setVCardData(vCard.getFormattedString());
    });

    scannerRef.current = scanner;

    return () => {
      scannerRef.current?.clear();
    };
  }, []);

  return (
    <div>
      <div id="reader" style={{ width: '100%' }}></div>
      {vCardData && (
        <div>
          <h3>Scanned vCard:</h3>
          <pre>{vCardData}</pre>
        </div>
      )}
    </div>
  );
};

export default QRCodeScannerComponent;
