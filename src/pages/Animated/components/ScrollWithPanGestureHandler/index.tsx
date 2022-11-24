/**
 * ScrollWithPanGestureHandler
 * create by wangsen on 2022-11-21
 */
import React from 'react';
import { View } from 'react-native';
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler } from 'react-native-reanimated';
import Page from './Page';

import styles from './styles';

interface IProps {}

const titles = ["what's", 'up', 'the', 'mobile'];

export default function (props: IProps) {
  const {} = props;

  const panGestureEvent = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
    onStart: (event, ctx) => {
      console.log('%c [ ctx ]-22', 'font-size:13px; background:#b162a6; color:#f5a6ea;', ctx);
      console.log('onStart', event);
    },
    onActive: (event, ctx) => {
      console.log('%c [ ctx ]-26', 'font-size:13px; background:#21a1f4; color:#65e5ff;', ctx);
      console.log('onActive', event);
    },
    onEnd: (event, ctx) => {
      console.log('%c [ ctx ]-30', 'font-size:13px; background:#c4f2d1; color:#ffffff;', ctx);
      console.log('onEnd', event);
    },
  });

  return (
    <View style={styles.container}>
      <PanGestureHandler onGestureEvent={panGestureEvent}>
        <Animated.View style={{ flex: 1, flexDirection: 'row' }}>
          <Page key={0} title={'what'} index={0} />
          {titles.map((title, index) => (
            <Page key={index} title={title} index={index} />
          ))}
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
}
