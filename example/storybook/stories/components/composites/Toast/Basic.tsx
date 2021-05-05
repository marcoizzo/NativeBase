import React from 'react';
import { Button, useToast } from 'native-base';

const Basic = () => {
  const toast = useToast();

  return (
    <Button
      onPress={() =>
        toast.show({
          title: 'Hello world',
        })
      }
    >
      Bottom
    </Button>
  );
};

export default Basic;
