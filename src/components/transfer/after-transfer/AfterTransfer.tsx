import React, { useState } from 'react';
import './AfterTransfer.css';
import ImageSlider from '../image-slider/ImageSlider';
import { FaImage } from "react-icons/fa";

interface Props {
  imageURL: string;
}
const AfterTransfer: React.FC<Props> = props => {
  const { imageURL } = props;
  const [value, setValue] = useState("256");
  const handleImageSize = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <div className={"after-transfer"}>
      {imageURL ? (<img src={imageURL} width={value} height={value} />) : (<div className={'no-after-image'}><FaImage /></div>)}
      <ImageSlider min={"256"} max={"1024"} value={value} onChange={handleImageSize} />
    </div>
  )
}

export default AfterTransfer;