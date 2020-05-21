import * as React from 'react';
import { IStackTokens, Stack } from 'office-ui-fabric-react/lib/Stack';
import { Dropdown, DropdownMenuItemType, IDropdownStyles, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';

const dropdownStyles: Partial<IDropdownStyles> = {
  dropdown: { width: 300 },
};

const options: IDropdownOption[] = [
  { key: 'status', text: 'Status', itemType: DropdownMenuItemType.Header },
  { key: 'accept', text: 'Accept' },
  { key: 'preparing', text: 'Preparing' },
  { key: 'ready', text: 'Ready'},
  { key: 'dispatched', text: 'dispatched' },
];

const stackTokens: IStackTokens = { childrenGap: 20 };

export const DropdownBasicExample: React.FunctionComponent = () => {
  return (
    <Stack tokens={stackTokens}>
      <Dropdown
        placeholder="Select an option"
        label="Basic uncontrolled example"
        options={options}
        styles={dropdownStyles}
      />

    </Stack>
  );
};
export default Dropdown;
