import {ScreenWidth, isAndroid} from '@freakycoder/react-native-helpers';

export default {
  container: {
    width: ScreenWidth,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: isAndroid ? 16 : 20,
  },
  insideListContainer: {
    marginTop: -24,
    flexDirection: 'column',
  },
};
