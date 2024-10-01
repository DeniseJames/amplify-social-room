import React from 'react';
import QRCode from 'react-qr-code';

const QRCodeComponent: React.FC<{ value: string }> = ({ value }) => {
  return <QRCode value={value} />;
};
