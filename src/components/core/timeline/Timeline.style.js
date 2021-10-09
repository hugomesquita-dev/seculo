import {
  ScreenWidth,
  isAndroid,
  ScreenHeight,
} from '@freakycoder/react-native-helpers';

export const _container = (backgroundColor) => ({
  marginLeft: 16,
  marginRight: 16,
  height: '100%',
  paddingVertical: 20,
  backgroundColor,
});

export default {
  listStyle: {
    width: ScreenWidth,
    maxHeight: isAndroid ? ScreenHeight / 2 - 32 : ScreenHeight / 2 - 5,
  },
  contentContainerStyle: {
    alignItems: 'center',
  },
};
