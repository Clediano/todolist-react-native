import { Text, View } from "react-native";

import { styles } from "./style";

interface InfoTasksProps {
    createdCount: number;
    completeCount: number;
}

export function InfoTasks(props: InfoTasksProps) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.createdText}>
                    Criadas
                </Text>
                <View style={styles.badge}>
                    <Text style={styles.badgeText}>
                        {props.createdCount}
                    </Text>
                </View>
            </View>
            <View style={styles.content}>
                <Text style={styles.completedText}>
                    Concluídas
                </Text>
                <View style={styles.badge}>
                    <Text style={styles.badgeText}>
                        {props.completeCount}
                    </Text>
                </View>
            </View>
        </View>
    );
}