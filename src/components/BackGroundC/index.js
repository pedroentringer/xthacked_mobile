import React from 'react';
import Svg, {Defs, Rect, LinearGradient, Stop} from 'react-native-svg';

export default function BackGroundC() {
  return (
    <Svg width="100%" height="100%" style={{position: 'absolute', zIndex: -1}}>
      <Defs>
        <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <Stop
            offset="0%"
            stopColor={'rgba(36, 168, 223, 1)'}
            stopOpacity="1"
          />
          <Stop
            offset="100%"
            stopColor={'rgba(2, 82, 142, 1)'}
            stopOpacity="1"
          />
        </LinearGradient>
      </Defs>
      <Rect width="100%" height="100%" fill="url(#grad)" strokeWidth="3" />
    </Svg>
  );
}
