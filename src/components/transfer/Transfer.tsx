import React, { useState } from 'react';
import './Transfer.css';
import BeforeTransfer from './before-transfer/BeforeTransfer';
import AfterTransfer from './after-transfer/AfterTransfer';

const TransferContainer = () => {
  const [imageURL, setImageURL] = useState("");

  const handleOnchange = (e: any) => {
    setImageURL(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <>
      <input type="file" name="file" onChange={handleOnchange}></input>
      <div className={'transfer-container'}>
        <BeforeTransfer imageURL={imageURL} />
        <AfterTransfer imageURL={imageURL} />`
      </div>
    </>
  )
}

export default TransferContainer;
