import * as tf from '@tensorflow/tfjs';
import { Tensor2D } from '@tensorflow/tfjs';
import { loadGraphModel } from '@tensorflow/tfjs-converter';

export class JSONHandler implements tf.io.IOHandler {
  modelJSON: any;
  constructor(json: any) {
     this.modelJSON = json;
  }
  async load() {
    const modelArtifacts: tf.io.ModelArtifacts = {
      modelTopology: this.modelJSON.modelTopology,
      format: this.modelJSON.format,
      generatedBy: this.modelJSON.generatedBy,
      convertedBy: this.modelJSON.convertedBy
    };
    if (this.modelJSON.weightsManifest != null) {
      // load weights (if they exist)
    }
    if (this.modelJSON.trainingConfig != null) {
      modelArtifacts.trainingConfig = this.modelJSON.trainingConfig;
    }
    if (this.modelJSON.userDefinedMetadata != null) {
      modelArtifacts.userDefinedMetadata = this.modelJSON.userDefinedMetadata;
    }
    return modelArtifacts;
  }
}


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
    let output_tensor = (result as tf.Tensor);
    console.log(output_tensor.dataSync());
  }

  async loadModel() {
    // const MODEL_URL = `./models/saved_model.pb`;
    const model = await loadGraphModel('./models/model.json');
    return model;
  }
}

export default TensorflowModel.getInstance();
