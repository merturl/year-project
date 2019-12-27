import React, { useState, useEffect, useRef } from 'react';
import './Transfer.css';
import BeforeTransfer from './before-transfer/BeforeTransfer';
import AfterTransfer from './after-transfer/AfterTransfer';
import { FaPlus } from "react-icons/fa";
import * as tf from '@tensorflow/tfjs';
import TensorflowModel from '~/lib/services/TensorflowModel';

const TransferContainer = () => {
  const [imageURL, setImageURL] = useState("");
  const [imageNode, setImageNode] = useState<any>(null);
  const canvas = useRef<any>(null);

  const handleOnchange = (e: any) => {
    console.log(e.target.files);
    setImageURL(URL.createObjectURL(e.target.files[0]));
    setImageNode(e.target);
  }

  useEffect(() => {
    const handleModel = async ()=> {
      // const xs = tf.tensor2d([[1], [2], [3], [4]], [4, 1]);
      // const ys = tf.tensor2d([[1], [3], [5], [7]], [4, 1]);
      // await TensorflowModel.trainModel(xs, ys);
      // const predictData = tf.tensor2d([[5], [6]], [2, 1]);
      // TensorflowModel.predictModel(predictData);
      const model = await TensorflowModel.loadModel();
      console.log(model);
      const image = new Image();
      image.src = imageURL;
      image.width = 256;
      image.height = 256;
      let input_tensor = tf.browser.fromPixels(image);
      let preprocessed_tensor = input_tensor.toFloat().div(tf.scalar(127.5)).sub(tf.scalar(1.0)).expandDims();
      let output_tensor = model.execute(preprocessed_tensor);
      let postprocessed_tensor = (output_tensor as any).add(tf.scalar(1)).mul(tf.scalar(127.5)).squeeze().toInt();
      console.log(postprocessed_tensor);
      tf.browser.toPixels(postprocessed_tensor, canvas.current);
    }
    if (imageNode) handleModel();
  }, [imageNode]);

  return (
    <div className={'trasnfer-wrap'}>
      <canvas ref={canvas} width={256} height={256}/>
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
