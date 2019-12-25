import React from 'react';
interface Props {
  min: string;
  max: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const ImageSlider: React.FC<Props> = props => {
  const {min, max, value, onChange} = props;
  return (<input type="range" min={min} max={max} value={value} onChange= {onChange}/>);
}

export default ImageSlider;
