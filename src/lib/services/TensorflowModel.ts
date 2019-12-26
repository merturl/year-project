import * as tf from '@tensorflow/tfjs';
import { Tensor2D } from '@tensorflow/tfjs';

class TensorflowModel {
  private static instance: TensorflowModel
  private Model: tf.Sequential = tf.sequential();

  private constructor() {
  }


  static getInstance() {
    if (!TensorflowModel.instance) {
      TensorflowModel.instance = new TensorflowModel();
    }
    return TensorflowModel.instance;
  }

  async trainModel(xs: Tensor2D, ys: Tensor2D) {
    this.Model.add(tf.layers.dense({units: 1, inputShape: [1]}));
    this.Model.compile({optimizer: 'sgd', loss: 'meanSquaredError'});
    await this.Model.fit(xs, ys, {epochs: 1000});
  }

  predictModel(ys: Tensor2D) {
    const result =this.Model.predict(ys);
    (result as tf.Tensor).print();
  }
}

export default TensorflowModel.getInstance();
