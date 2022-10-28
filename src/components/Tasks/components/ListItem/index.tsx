import { Image, Text, TouchableOpacity, View } from "react-native";

import { Task } from "../../../../screens/Home";

import { styles } from "./style";

interface ListItemProps {
    item: Task;
    handleDeleteTask: (task: Task) => void;
    handleCheckTask: (task: Task) => void;
}

export function ListItem(props: ListItemProps) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.content} onPress={() => props.handleCheckTask(props.item)}>
                {props.item.checked ?
                    <Image source={require('../../../../../assets/icons/checked.png')} /> :
                    <Image source={require('../../../../../assets/icons/unchecked.png')} />
                }
                <Text style={props.item.checked ? styles.textChecked : styles.text}>
                    {props.item.title}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.trash} onPress={() => props.handleDeleteTask(props.item)}>
                <Image source={require('../../../../../assets/icons/trash.png')} />
            </TouchableOpacity>
        </View>
    );
}