import { Image, Text, View } from "react-native";

import { styles } from "./style";

const iconClipboard = require('../../../../../assets/icons/clipboard.png');

export function ListEmptyComponent() {
    return (
        <View style={styles.container}>
            <Image source={iconClipboard} />
            <Text style={styles.textBold}>
                Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.textNormal}>
                Crie tarefas e organize seus itens a fazer
            </Text>
        </View>
    );
}
