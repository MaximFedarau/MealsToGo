import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
  size?: number;
  color?: string;
}

const Star: React.FC<Props> = ({ size, color }) => {
  return (
    <Svg x="0px" y="0px" viewBox="0 0 854 768" height={size} width={size}>
      <Path
        d="M853.333 426.667C853.333 474.027 815.36 512 768 512L85.3334 512C62.7016 512 40.9967 503.01 24.9936 487.006C8.99051 471.003 6.10352e-05 449.298 6.10352e-05 426.667C6.10352e-05 404.035 8.99051 382.33 24.9936 366.327C40.9967 350.324 62.7016 341.333 85.3334 341.333L448.287 341.333C461.911 341.333 475.129 345.97 485.768 354.481L538.518 396.681C560.432 414.212 591.569 414.212 613.482 396.681L666.232 354.481C676.871 345.97 690.089 341.333 703.714 341.333L768 341.333C790.632 341.333 812.337 350.324 828.34 366.327C844.343 382.33 853.333 404.035 853.333 426.667ZM426.667 0C161.836 0 79.6492 121.763 54.1437 197.338C43.5476 228.735 69.5296 256 102.667 256L750.667 256C783.804 256 809.786 228.735 799.19 197.338C773.684 121.763 691.498 0 426.667 0ZM42.6667 640C42.6667 710.827 99.8401 768 170.667 768L682.667 768C753.493 768 810.667 710.827 810.667 640V640C810.667 616.436 791.564 597.333 768 597.333L85.3334 597.333C61.7693 597.333 42.6667 616.436 42.6667 640V640Z"
        fill={color}
      />
    </Svg>
  );
};

export default Star;
