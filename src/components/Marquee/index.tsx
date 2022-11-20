/**
 * Marquee
 * create by wangsen on 2022-11-19
 */
import React, { useImperativeHandle, forwardRef } from 'react';
import { StyleProp, Text, View, ViewStyle } from 'react-native';
import useInterval from '@/hooks/useInterval';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import styles from './styles';

interface IData {
  key: string | number;
  value: string;
  component?: React.ReactNode;
}

interface IProps {
  data: IData[];
  interval?: number; // 滚动间隔
  duration?: number; // 滚动动画时长
  scrollDirection?: 'vertical' | 'horizontal'; // 滚动方向
  reverse?: boolean; // 是否反向滚动
  style?: StyleProp<ViewStyle>;
}

const BASE_HEIGHT = 20;

export default forwardRef((props: IProps, ref) => {
  const { data, duration = 1000 } = props;

  const offsetY = useSharedValue(0);
  const idx = useSharedValue(0);

  useImperativeHandle(ref, () => ({
    activeItem: data[idx.value],
  }));

  useInterval(() => {
    const maxIdx = data.length;
    if (idx.value >= maxIdx) {
      idx.value = 0;
      offsetY.value = 0;
    } else {
      idx.value += 1;
      offsetY.value = withTiming(idx.value * BASE_HEIGHT, { duration });
    }
  }, 3000);

  const style = useAnimatedStyle(() => {
    console.log('Running on the UI thread');
    return {
      opacity: 0.5,
      transform: [{ translateY: -offsetY.value }],
    };
  });

  return (
    <View style={styles.marQueeContainer}>
      <Animated.View style={[styles.container, style]}>
        {data.map((item) => (
          <Text key={item.key} style={{ height: BASE_HEIGHT }}>
            {item.value}
          </Text>
        ))}
        <Text key={data[0].key} style={{ height: BASE_HEIGHT }}>
          {data[0].value}
        </Text>
      </Animated.View>
    </View>
  );
});
