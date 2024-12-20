import React, {useRef} from 'react';
import {
  Dimensions,
  Image,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';


type SwiperProps = {
  images: string[];
  paginationDotStyle?: StyleProp<ViewStyle>;
  imageWidth: number;
};

export const Swiper = ({
  images,
  paginationDotStyle,
  imageWidth,
}: SwiperProps) => {
  const scrollX = useSharedValue(0);
  const flatListRef = useRef(null);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      scrollX.value = event.contentOffset.x;
    },
  });

  const PaginationDot = ({index, item}) => {
    const animatedStyle = useAnimatedStyle(() => {
      const opacity = interpolate(
        scrollX.value,
        [(index - 1) * imageWidth, index * imageWidth, (index + 1) * imageWidth],
        [0.3, 1, 0.3],
        Extrapolation.CLAMP,
      );
      const scale = interpolate(
        scrollX.value,
        [(index - 1) * imageWidth, index * imageWidth, (index + 1) * imageWidth],
        [1, 1.5, 1],
        Extrapolation.CLAMP,
      );

      return {
        opacity,
        transform: [{scale}],
      };
    });
    return (
      <Animated.View style={[styles.dot, paginationDotStyle, animatedStyle]} />
    );
  };

  return (
    <>
      <Animated.FlatList
        ref={flatListRef}
        data={images}
        keyExtractor={(_item, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        renderItem={({item}) => (
          <Image
            source={{uri: item}}
            style={{width: imageWidth, height: imageWidth}}
          />
        )}
      />

      {/* Pagination Dots */}
      <View style={styles.pagination}>
        {images.map((item, index) => (
          <PaginationDot key={index.toString()} index={index} item={item} />
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  pagination: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginVertical: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF6347',
    marginHorizontal: 4,
  },
});