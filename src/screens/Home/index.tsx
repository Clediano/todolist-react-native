import { useState } from "react";
import { View } from "react-native";

import { Tasks } from "../../components/Tasks";
import { Header } from "../../components/Header";
import { NewTask } from "../../components/NewTask";

import { styles } from "./styles";

export interface Task {
    id: number;
    title: string;
    checked: boolean;
}

export function Home() {
    const [tasks, setTasks] = useState<Task[]>([]);

    function deleteTask(deletedTask: Task) {
        setTasks(tasks.filter(task => task.id !== deletedTask.id));
    }

    function checkTask(checkedTask: Task) {
        setTasks(tasks.map(currentTask => {
            if (currentTask.id === checkedTask.id) {
                return { ...currentTask, checked: !currentTask.checked }
            }
            return currentTask;
        }));
    }

    function addNewTask(task: string) {
        if (task) {
            const newTask = {
                id: new Date().getTime(),
                title: task,
                checked: false
            };
            setTasks([...tasks, newTask]);
        }
    }

    return (
        <>
            <Header />
            <View style={styles.container}>
                <NewTask handleAddNewTask={addNewTask} />
                <View style={{ padding: 16 }} />
                <Tasks
                    tasks={tasks}
                    handleCheckTask={checkTask}
                    handleDeleteTask={deleteTask}
                />
            </View>
        </>
    );
}
