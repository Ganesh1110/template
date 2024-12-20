import {Dimensions, Platform, StatusBar, PixelRatio} from 'react-native';

// Retrieve device dimensions
const {width, height} = Dimensions.get('window');

// Calculate device height considering the presence of status bar or iPhone X notch
const calculateDeviceHeight = () => {
  const standardLength = Math.max(width, height);
  const offset =
    Platform.OS === 'ios'
      ? height > width
        ? 78
        : 0
      : StatusBar.currentHeight || 0;
  return standardLength - offset;
};

// Check if the device is an iPhone with a notch
const isIphoneNotch = () =>
  Platform.OS === 'ios' &&
  !Platform.isPad &&
  !Platform.isTV &&
  ([780, 812, 844, 852, 896, 926, 932].includes(height) ||
    [780, 812, 844, 852, 896, 926, 932].includes(width));

// Check if the device is a tablet
const isTablet = () => {
  const pixelDensity = PixelRatio.get();
  const adjustedWidth = width * pixelDensity;
  const adjustedHeight = height * pixelDensity;
  return (
    (pixelDensity < 2 && (adjustedWidth >= 1000 || adjustedHeight >= 1000)) ||
    (pixelDensity === 2 && (adjustedWidth >= 1920 || adjustedHeight >= 1920)) ||
    Platform.isPad
  );
};

// Calculate responsive font size
export const size = (fontSize, standardScreenHeight = 812) => {
  const calculatedFontSize = isTablet() ? fontSize + 2 : fontSize;
  const baseScreenWidth = 375;
  const wid = Math.min(width, height);
  const deviceHeight = calculateDeviceHeight();
  const heightPercent =
    (calculatedFontSize * deviceHeight) / standardScreenHeight;
  return Platform.isPad || isTablet() || width > 500
    ? Number(heightPercent.toFixed(2))
    : wid / (baseScreenWidth / calculatedFontSize);
};

const Metrics = {
  width: Math.min(width, height),
  height: Math.max(width, height),
  rfv: size,
  isIphoneNotch: isIphoneNotch(),
  isTablet: isTablet(),
};

export default Metrics;
