import { View, FlatList } from "react-native";

import { Task } from "../../screens/Home";
import { ListItem } from "./components/ListItem";
import { InfoTasks } from "./components/InfoTasks";
import { ListEmptyComponent } from "./components/ListEmptyComponent";

import { styles } from './style';

interface TasksProps {
    tasks: Task[];
    handleDeleteTask: (task: Task) => void;
    handleCheckTask: (task: Task) => void;
}

export function Tasks(props: TasksProps) {
    const completeCount = props.tasks.filter(task => task.checked).length;
    
    return (
        <View style={styles.container}>
            <InfoTasks
                completeCount={completeCount}
                createdCount={props.tasks.length}
            />

            <FlatList
                data={props.tasks}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => (
                    <ListItem
                        key={item.id}
                        item={item}
                        handleDeleteTask={props.handleDeleteTask}
                        handleCheckTask={props.handleCheckTask}
                    />
                )}
                ListEmptyComponent={<ListEmptyComponent />}
            />
        </View>
    );
}

