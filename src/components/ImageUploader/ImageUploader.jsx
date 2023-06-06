import React, { useEffect, useState } from 'react';
import { Input } from '../Input/Input';

export const ImageUploader = () => {
  const [imageData, setImageData] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const binaryData = event.target.result;
      setImageData(binaryData);
    };

    reader.readAsBinaryString(file);
  };


  return (
      <Input className='m-4' type="file" onChange={handleImageUpload} />
    // <div>
    //   {imageData && <img src={`data:image/png;base64,${btoa(imageData)}`} />}
    // </div>
  );
}
