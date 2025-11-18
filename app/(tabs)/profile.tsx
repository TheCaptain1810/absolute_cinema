import * as React from "react";
import { Text, useWindowDimensions, View } from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";

const First = () => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Feed Screen</Text>
    </View>
);

const Second = () => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Following Screen</Text>
    </View>
);

const Third = () => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Favorites Screen</Text>
    </View>
);

const Fourth = () => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Favorites Screen</Text>
    </View>
);

export default function PopularScreen() {
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);

    const [routes] = React.useState([
        { key: "profile", title: "Profile" },
        { key: "diary", title: "Dairy" },
        { key: "lists", title: "Lists" },
        { key: "watchlist", title: "Watchlist" },
    ]);

    const renderScene = SceneMap({
        profile: First,
        diary: Second,
        lists: Third,
        watchlist: Fourth,
    });

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            renderTabBar={(props) => (
                <TabBar
                    {...props}
                    labelStyle={{ fontSize: 14, fontWeight: "bold" }}
                    indicatorStyle={{ backgroundColor: "white" }}
                    style={{ backgroundColor: "black" }}
                />
            )}
        />
    );
}

