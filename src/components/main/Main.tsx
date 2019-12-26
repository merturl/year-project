import React, { useEffect } from 'react';
import './Main.css';
import * as tf from '@tensorflow/tfjs';
import TensorflowModel from '~/lib/services/TensorflowModel';

interface Props {
  children: React.ReactNode;
}

const Main: React.FC<Props> = props => {
  const { children } = props;

  useEffect(() => {
    const handleModel = async ()=> {
      const xs = tf.tensor2d([[1], [2], [3], [4]], [4, 1]);
      const ys = tf.tensor2d([[1], [3], [5], [7]], [4, 1]);
      await TensorflowModel.trainModel(xs, ys);
      const predictData = tf.tensor2d([[5], [6]], [2, 1]);
      TensorflowModel.predictModel(predictData);
    }
    handleModel();
  }, []);

  return (
    <div className={"main"}>
      {children}
    </div>
  );
}

export default Main;
