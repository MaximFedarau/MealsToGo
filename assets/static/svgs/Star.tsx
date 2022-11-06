import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
  size?: number;
}

const Star: React.FC<Props> = ({ size }) => {
  return (
    <Svg
      x="0px"
      y="0px"
      viewBox="0 0 511.999 511.999"
      height={size}
      width={size}>
      <Path
        fill="#FFDC64"
        d="M452.71,157.937l-133.741-12.404L265.843,22.17c-3.72-8.638-15.967-8.638-19.686,0l-53.126,123.362	L59.29,157.937c-9.365,0.868-13.149,12.516-6.084,18.723l100.908,88.646l-29.531,131.029c-2.068,9.175,7.841,16.373,15.927,11.572 l115.49-68.576l115.49,68.576c8.087,4.802,17.994-2.397,15.927-11.572l-29.532-131.029l100.909-88.646 C465.859,170.453,462.074,158.805,452.71,157.937z"
      />
    </Svg>
  );
};

export default Star;
