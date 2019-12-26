import React, { useState } from 'react';
import './Transfer.css';
import BeforeTransfer from './before-transfer/BeforeTransfer';
import AfterTransfer from './after-transfer/AfterTransfer';
import { FaPlus } from "react-icons/fa";

const TransferContainer = () => {
  const [imageURL, setImageURL] = useState("");

  const handleOnchange = (e: any) => {
    setImageURL(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div className={'trasnfer-wrap'}>
      <div className={'transfer-container'}>
        <BeforeTransfer imageURL={imageURL} />
        <AfterTransfer imageURL={imageURL} />
      </div>
      <label className={"transfer-label"} htmlFor="transfer-input"><FaPlus /></label>
      <input id="transfer-input" type="file" name="file" onChange={handleOnchange}></input>
    </div>
  )
}

export default TransferContainer;
