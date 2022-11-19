import { Dimensions } from "react-native";
import { BREAK_POINT, ZOOM_RATIO } from "../types/base";

export const p2d = (uiElePx: number) => {
  if (uiElePx === 0) return 0;
  // 安卓小窗会影响window.width，变成和小窗一样宽，所以这里用screen.width
  const deviceWidthDp = Dimensions.get('screen').width;
  const uiWidthPx = 750;
  let scalableRadio = ZOOM_RATIO.MOBILE;
  if (deviceWidthDp >= BREAK_POINT.TABLET) {
    scalableRadio = ZOOM_RATIO.TABLET;
  }
  if (uiElePx === 1) return Math.floor(((uiElePx * deviceWidthDp) / uiWidthPx) * 100) / 100;
  if (uiElePx > 0 && uiElePx !== 1) {
    return Math.max(Math.floor((uiElePx * deviceWidthDp * scalableRadio) / uiWidthPx), 1);
  } else {
    return Math.floor((uiElePx * deviceWidthDp) / uiWidthPx);
  }
};