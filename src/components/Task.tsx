import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';

interface TaskProps {
  text: string;
  updateMode: () => void;
  deleteTask: () => void;
}

const Task: React.FC<TaskProps> = ({ text, updateMode, deleteTask }) => {
  return (
    <View className="mt-4 flex-row items-center justify-between rounded-lg bg-white px-6 py-5 shadow-sm">
      <Text className="flex-1 text-base text-gray-800">{text}</Text>
      <View className="ml-4 flex-row items-center gap-4">
        <TouchableOpacity className="p-1" onPress={updateMode}>
          <Feather name="edit" size={20} color="#374151" />
        </TouchableOpacity>
        <TouchableOpacity className="p-1" onPress={deleteTask}>
          <AntDesign name="delete" size={20} color="#374151" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Task;
