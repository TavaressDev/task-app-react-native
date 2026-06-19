import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';
import { TaskItem as TaskType } from '../utils/handle-api';
import {
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
} from '../../components/ui/alert-dialog';
import { Button, ButtonText } from '../../components/ui/button';

// TODO (Zustand): Mantenha apenas a prop 'task'. Remova 'updateMode' e 'deleteTask'
interface TaskItemProps {
  task: TaskType;
  updateMode: () => void;
  deleteTask: () => void;
}

// TODO (Zustand): Importe o useTaskStore e pegue as actions de atualizar e deletar diretamente da store
const TaskItem: React.FC<TaskItemProps> = ({ task, updateMode, deleteTask }) => {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const isOverdue =
    task.dueDate &&
    new Date(task.dueDate) < new Date(new Date().setHours(0, 0, 0, 0));

  const handleConfirmDelete = () => {
    setIsDeleteDialogOpen(false);
    deleteTask();
  };

  return (
    <>
      <View style={styles.task}>
        <View style={styles.contentContainer}>
          <Text style={[styles.text, !!task.completed && styles.textCompleted]}>
            {task.text}
          </Text>
          {task.dueDate && (
            <Text
              style={[
                styles.dateText,
                isOverdue ? styles.dateOverdue : styles.dateOnTime,
              ]}
            >
              Até: {new Date(task.dueDate).toLocaleDateString()}
            </Text>
          )}
        </View>
        <View style={styles.icons}>
          <TouchableOpacity onPress={updateMode} accessibilityRole="button">
            <Feather name="edit" size={20} color="#fff" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setIsDeleteDialogOpen(true)}
            accessibilityRole="button"
          >
            <AntDesign
              name="delete"
              size={20}
              color="#fff"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <AlertDialog
        isOpen={isDeleteDialogOpen}
        onClose={() => setIsDeleteDialogOpen(false)}
      >
        <AlertDialogBackdrop />
        <AlertDialogContent>
          <AlertDialogHeader>
            <Text style={styles.dialogTitle}>Excluir tarefa</Text>
          </AlertDialogHeader>
          <AlertDialogBody>
            <Text style={styles.dialogText}>
              Tem certeza que deseja excluir esta tarefa?
            </Text>
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button
              action="secondary"
              variant="outline"
              onPress={() => setIsDeleteDialogOpen(false)}
            >
              <ButtonText>Cancelar</ButtonText>
            </Button>
            <Button action="negative" onPress={handleConfirmDelete}>
              <ButtonText>Excluir</ButtonText>
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

const styles = StyleSheet.create({
  task: {
    backgroundColor: '#000',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  contentContainer: {
    flex: 1,
    marginRight: 10,
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
  textCompleted: {
    textDecorationLine: 'line-through',
    color: '#aaa',
  },
  dateText: {
    fontSize: 12,
    marginTop: 4,
    fontWeight: 'bold',
  },
  dateOverdue: {
    color: '#e53935',
  },
  dateOnTime: {
    color: '#43a047',
  },
  icons: {
    flexDirection: 'row',
    gap: 16,
  },
  icon: {
    padding: 2,
  },
  dialogTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
  },
  dialogText: {
    color: '#374151',
    fontSize: 16,
    marginTop: 12,
    marginBottom: 20,
  },
});

export default TaskItem;
