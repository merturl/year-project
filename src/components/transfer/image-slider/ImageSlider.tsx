import React from 'react';
import './ImageSlider.css';

interface Props {
  min: string;
  max: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ImageSlider: React.FC<Props> = props => {
  const { min, max, value, onChange } = props;

  return (
    <div className={'image-slider-wrap'}>
      <input className={'image-slider'} type="range" min={min} max={max} value={value} onChange={onChange} />
    </div>
  );
}

export default ImageSlider;
