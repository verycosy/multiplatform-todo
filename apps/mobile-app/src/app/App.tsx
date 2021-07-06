import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Ui } from '@todo/ui';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Ui />
      </SafeAreaView>
    </>
  );
};

export default App;
