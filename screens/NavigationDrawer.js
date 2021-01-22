import * as React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from './MainScreen'
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

function Categories() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Catégories</Text>
        </View>
    );
}

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
                label="Close drawer"
                onPress={() => props.navigation.closeDrawer()}
            />
            <DrawerItem
                label="Toggle drawer"
                onPress={() => props.navigation.toggleDrawer()}
            />
        </DrawerContentScrollView>
    );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="Accueil" component={MainScreen} />
            <Drawer.Screen name="Catégories" component={Categories} />
        </Drawer.Navigator>
    );
}

export default function NavigationDrawer() {
    return (
        <NavigationContainer>
            <MyDrawer />
        </NavigationContainer>
    )
}