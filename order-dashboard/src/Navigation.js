import React from 'react';
import { Nav, initializeIcons } from '@fluentui/react';


const navigationStyles = {
  root: {
    height: '100vh',
    boxSizing: 'border-box',
    border: '1px solid #eee',
    overflowY: 'auto',
    paddingTop: '10vh',
  },
};

const links = [
  {
    links: [
      {
        name: 'Active Orders',
        key:'key1',
        url: '/',
        iconProps: {
          iconName: 'CircleFill' ,
          styles: {
            root: {
              fontSize: 20,
              color: '#0cbb06',
            },
          }
        }
      },
      {
        name: 'Past Orders',
        key: 'key2',
        url: '/',
        iconProps: {
          iconName: 'CircleHalfFull',
          styles: {
            root: {
              fontSize: 20,
              color: '#106ebe',
            },
          }
        }
      },
      {
        name: 'Financials',
        key: 'key3',
        url: '/',
        iconProps: {
          iconName: 'Money',
          styles: {
            root: {
              fontSize: 20,
              color: '#106ebe',
            },
          }
        }
      },
      {
        name: 'Analytics',
        key: 'key4',
        url: '/',
        iconProps: {
          iconName: 'StackedLineChart',
          styles: {
            root: {
              fontSize: 20,
              color: '#106ebe',
            },
          }
        }
      },
      {
        name: 'Inbox',
        key: 'key5',
        url: '/',
        iconProps: {
          iconName: 'Inbox',
          styles: {
            root: {
              fontSize: 20,
              color: '#106ebe',
            },
          }
        }
      },
      {
        name: 'New Product',
        key: 'key6',
        url: '/',
        iconProps: {
          iconName: 'SwitcherStartEnd',
          styles: {
            root: {
              fontSize: 20,
              color: '#106ebe',
            },
          }
        }
      },
      {
        name: 'Settings',
        key: 'key7',
        url: '/',
        iconProps: {
          iconName: 'Settings',
          styles: {
            root: {
              fontSize: 20,
              color: '#106ebe',
            },
          }
        }
      },
      {
        name: 'Support',
        key: 'key8',
        url: '/',
        iconProps: {
          iconName: 'Phone',
          styles: {
            root: {
              fontSize: 20,
              color: '#106ebe',
            },
          }
        }
      },
    ],
  },
];

const Navigation = () => {
  initializeIcons();
  return (
    <Nav
      groups={links}
      selectedKey='key1'
      styles={navigationStyles}
    />
  );
};

export default Navigation;
