import { Text, View, Image } from "react-native";

import { styles } from './style';

const logo = require("../../../assets/images/logo.png");

export function Header() {
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={logo}
            />
        </View>
    );
}