import React, { useState } from 'react';
import './BeforeTransfer.css';
import ImageSlider from '../image-slider/ImageSlider';

interface Props {
  imageURL: string;
}
const BeforeTransfer: React.FC<Props> = props => {
  const {imageURL} = props;
  const [value, setValue] = useState("320");
  const handleImageSize = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <div className={"upload"}>
      <img src={imageURL} width={value} height={value} alt={"Upload Image for style change"}/>
      <ImageSlider min={"320"} max={"1024"} value={value} onChange={handleImageSize}/>
    </div>
  )
}

export default BeforeTransfer;