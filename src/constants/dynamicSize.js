import {Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

const guidelineBaseWidth = 414;

const DynamicSize = size => {
  if (size) {
    let scale = (width / guidelineBaseWidth) * size;
    let dynamicCalculation = width / scale;
    let result = width / dynamicCalculation;
    return result;
  } else {
    return width;
  }
};

export default DynamicSize;
