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
        { key: "films", title: "Films" },
        { key: "reviews", title: "Reviews" },
        { key: "lists", title: "Lists" },
        { key: "journal", title: "Journal" },
    ]);

    const renderScene = SceneMap({
        films: First,
        reviews: Second,
        lists: Third,
        journal: Fourth,
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

