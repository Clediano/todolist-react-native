import { useState } from "react";
import { Image, TextInput, TouchableOpacity, View, Keyboard } from "react-native";

import { styles } from './style';
import { colors } from "../../../constants";

const iconPlus = require("../../../assets/icons/plus.png");

interface NewTaskProps {
    handleAddNewTask: (newTask: string) => void;
}

export function NewTask(props: NewTaskProps) {
    const [task, setTask] = useState<string>('');

    const handleAddNewTask = () => {
        props.handleAddNewTask(task);
        Keyboard.dismiss();
        setTask('');
    }

    return (
        <View style={styles.inputGroup}>
            <TextInput
                style={styles.input}
                placeholderTextColor={colors["gray-300"]}
                onChangeText={setTask}
                placeholder="Adicione uma nova tarefa"
                value={task}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={handleAddNewTask}
            >
                <Image
                    style={styles.image}
                    source={iconPlus}
                />
            </TouchableOpacity>
        </View>
    );
}