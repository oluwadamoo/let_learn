import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Animated
} from 'react-native';


import { Shadow } from 'react-native-shadow-2';

import { COLORS, constants, FONTS, SIZES } from '../../constants';
import Home from './Home';
import Profile from './Profile';
import Search from './Search';


const bottom_tabs = constants.bottom_tabs.map((bottom_tab) => ({
    ...bottom_tab,
    ref: React.createRef<TouchableOpacity>()
}))

const TabIndicator = ({ measureLayout, scrollX }: any) => {
    const inputRange = bottom_tabs.map((_, i) => i * SIZES.width)

    const tabIndicatorWidth = scrollX.interpolate({
        inputRange,
        outputRange: measureLayout.map((measure: { width: any; }) => measure.width)
    })

    const translateX = scrollX.interpolate({
        inputRange,
        outputRange: measureLayout.map((measure: { x: any; }) => measure.x)
    })
    return (
        <Animated.View
            style={{
                position: 'absolute',
                left: 0,
                height: "100%",
                width: tabIndicatorWidth,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.primary,
                transform: [{
                    translateX
                }]
            }}
        />
    )
}
const Tabs = ({ scrollX, onBottomTabPress }: any) => {
    const containerRef = React.useRef<any>()
    const [measureLayout, setMeasureLayout] = React.useState([])

    React.useEffect(() => {
        let ml: any = []
        console.log(ml, "measure layout")
        bottom_tabs.forEach(bottom_tab => {
            bottom_tab?.ref?.current?.measureLayout(
                containerRef.current,
                (x, y, width, height) => {
                    ml.push({
                        x, y, width, height
                    })

                    if (ml.length === bottom_tabs.length) {
                        setMeasureLayout(ml)
                    }
                },
                () => console.log("failed")
            )
        })
    }, [containerRef.current])

    return (
        <View
            ref={containerRef}
            style={{
                flex: 1,
                flexDirection: 'row'
            }}
        >
            {/* Tab Indicator */}
            {measureLayout.length > 0 && <TabIndicator measureLayout={measureLayout} scrollX={scrollX} />}
            {/* Tabs */}
            {bottom_tabs.map((item, index) => {
                return (
                    <TouchableOpacity
                        key={`BottomTab-${index}`}
                        ref={item.ref}
                        style={{
                            flex: 1,
                            paddingHorizontal: 15,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        // onpress
                        onPress={() => onBottomTabPress(index)}
                    >
                        <Image
                            source={item.icon}
                            resizeMode="contain"
                            style={{
                                height: 25,
                                width: 25
                            }}
                        />
                        <Text style={{
                            marginTop: 3,
                            color: COLORS.white,
                            ...FONTS.h3
                        }}>
                            {item.label}
                        </Text>
                    </TouchableOpacity>
                )
            })}

        </View>
    )
}
const MainLayout = () => {
    const flatListRef = React.useRef<any>()
    const scrollX = React.useRef(new Animated.Value(0)).current

    const onBottomTabPress = React.useCallback((bottomTabIndex: number) => {

        flatListRef?.current?.scrollToOffset({
            offset: bottomTabIndex * SIZES.width
        })
    }, [])


    function RenderBottomTab() {
        return (
            <View
                style={{
                    paddingBottom: SIZES.height > 800 ? 20 : 10,
                    paddingHorizontal: SIZES.padding,
                    paddingVertical: SIZES.radius
                }}
            >
                <Shadow
                    style={{
                        height: 85,
                        width: SIZES.width - (SIZES.padding * 2)
                    }}
                // size={[SIZES.width - (SIZES.padding * 2), 85]}

                // size={}
                >
                    <View
                        style={{
                            flex: 1,
                            borderRadius: SIZES.radius,
                            backgroundColor: COLORS.primary3
                        }}
                    >
                        <Tabs
                            scrollX={scrollX}
                            onBottomTabPress={onBottomTabPress}
                        />
                    </View>
                </Shadow>
            </View>
        )
    }


    function RenderContent() {


        return (<View
            style={{
                flex: 1
            }}
        >
            <Animated.FlatList
                ref={flatListRef}
                scrollEnabled={true}
                horizontal
                pagingEnabled
                snapToAlignment={"center"}
                snapToInterval={SIZES.width}
                decelerationRate={"fast"}
                showsHorizontalScrollIndicator={false}
                data={constants.bottom_tabs}
                keyExtractor={item => `Main-${item.id}`}
                onScroll={
                    Animated.event([
                        { nativeEvent: { contentOffset: { x: scrollX } } }
                    ],
                        { useNativeDriver: false })
                }
                renderItem={({ item, index }) => {

                    return (
                        <View
                            style={{
                                height: SIZES.height,
                                width: SIZES.width
                            }}


                        >
                            {item.label == constants.screens.home && <Home />}
                            {item.label == constants.screens.search && <Search />}
                            {item.label == constants.screens.profile && <Profile />}
                        </View>
                    )
                }

                }
            />
        </View>
        )
    }





    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white
            }}
        >
            {/* Content */}
            <RenderContent />

            {/* Bottom tab */}
            <RenderBottomTab />

        </View>
    )
}



export default MainLayout;