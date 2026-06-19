import React from 'react';
import { View } from 'react-native';
import { Heading } from '../../components/ui/heading';
import { Text } from '../../components/ui/text';

const EmptyState: React.FC = () => {
  return (
    <View className="flex-1 items-center justify-center px-6 py-12">
      <View className="max-w-sm items-center rounded-lg bg-white px-6 py-8 shadow-sm">
        <Heading className="mb-2 text-center text-xl font-bold text-gray-900">
          Nenhuma tarefa encontrada
        </Heading>
        <Text className="text-center text-base text-gray-500">
          Crie uma nova tarefa para começar a organizar sua lista.
        </Text>
      </View>
    </View>
  );
};

export default EmptyState;
