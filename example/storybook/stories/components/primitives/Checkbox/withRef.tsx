import React from 'react';
import { Checkbox, Icon } from 'native-base';

export default function () {
  const myRef: any = React.useRef({});
  return (
    <Checkbox
      value="success"
      colorScheme="success"
      icon={<Icon name="bullseye" type="MaterialCommunityIcons" opacity={1} />}
      ref={myRef}
      onChange={(state) => {
        if (state)
          myRef?.current.setNativeProps({ backgroundColor: '#00de0050' });
        else
          myRef?.current.setNativeProps({
            backgroundColor: '#fa000050',
          });
      }}
    >
      Label
    </Checkbox>
  );
}