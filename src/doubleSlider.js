// import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import './doubleSlider.css';
import { useState, useRef } from 'react';
import * as tf from '@tensorflow/tfjs';

let decoder;
let result;
var url = {
  modelLink: 'https://cors-anywhere.herokuapp.com/https://storage.googleapis.com/test-tfjs/model.json',
  binData: 'https://cors-anywhere.herokuapp.com/https://storage.googleapis.com/test-tfjs/group1-shard1of1.bin'
};    
function DoubleSlider() {  
    const [sliderVState, setSliderVState] = useState(0);
    const [sliderHState, setSliderHState] = useState(0);
    const canvasRef = useRef();
    let handleVChange = (e, val) => setSliderVState(val);
    let handleHChange = (e, val) => setSliderHState(val);

    async function loadModel() {
      try {
        decoder = await tf.loadLayersModel(url.modelLink);
      } catch (err) {
        alert("model loading error....");
      }
    }
    async function secondLoad(){
      let res = await loadModel();
    }
    async function processState() {
      let inputTensor = tf.tensor([sliderHState, sliderVState],[1, 2]);
      result = decoder.predict(inputTensor,{batchSize: 1}).reshape([28,28]);
      await tf.browser.toPixels(result, canvasRef.current);
    }
    let res = secondLoad().then( async () => await processState());
    
    return (
    <div className="large-box">  
      <div className="image-box">
        <canvas ref={canvasRef}></canvas>
      </div>
      <div className="vSlider">
        <Slider
          orientation="vertical"
          defaultValue={0}
          step={.02}
          aria-labelledby="discrete-vertical-slider-small-steps"
          min={-1}
          max={1}
          marks
          valueLabelDisplay="auto"
          onChange={handleVChange}
        />
      </div>
      <div className="hSlider">
        <Slider
          defaultValue={0}
          aria-labelledby="discrete-slider-small-steps"
          step={.02}
          marks
          min={-1}
          max={1}
          valueLabelDisplay="auto"
          onChange={handleHChange}
        />
      </div>
    </div>
    );
  }
  export default DoubleSlider;