import * as EDITOR_MODE from './constants/editorModes';
import * as NODE_CATEGORY from './constants/nodeCategory';
import * as PIN_TYPE from './constants/pinType';

const initialState = {
  project: {
    meta: {
      name: 'Awesome project',
      author: 'Amperka team',
    },
    patches: {
      1: {
        id: 1,
        name: 'Skynet',
      },
    },
    nodes: {
      1: {
        id: 1,
        typeId: 4,
        label: 'Blue LED',
        patchId: 1,
        position: {
          x: 320,
          y: 120,
        },
        props: {
          brightness: 0.67,
        },
      },
      2: {
        id: 2,
        typeId: 1,
        patchId: 1,
        position: {
          x: 360,
          y: 300,
        },
      },
      3: {
        id: 3,
        typeId: 3,
        label: 'My potentiometer with a knob',
        patchId: 1,
        position: {
          x: 160,
          y: 90,
        },
      },
      4: {
        id: 4,
        typeId: 2,
        patchId: 1,
        position: {
          x: 170,
          y: 380,
        },
      },
      5: {
        id: 5,
        typeId: 5,
        patchId: 1,
        position: {
          x: 100,
          y: 185,
        },
      },
    },
    pins: {
      1: {
        id: 1,
        nodeId: 1,
        key: 'brightness',
      },
      2: {
        id: 2,
        nodeId: 2,
        key: 'in',
      },
      3: {
        id: 3,
        nodeId: 2,
        key: 'out',
      },
      4: {
        id: 4,
        nodeId: 3,
        key: 'out',
      },
      5: {
        id: 5,
        nodeId: 4,
        key: 'in',
      },
      6: {
        id: 6,
        nodeId: 4,
        key: 'ifFalse',
      },
      7: {
        id: 7,
        nodeId: 4,
        key: 'ifTrue',
      },
      8: {
        id: 8,
        nodeId: 4,
        key: 'out',
      },
      9: {
        id: 9,
        nodeId: 5,
        key: 'value',
      },
    },
    links: {
      1: {
        id: 1,
        fromPinId: 4,
        toPinId: 1,
      },
      2: {
        id: 2,
        fromPinId: 4,
        toPinId: 6,
      },
    },
  },
  editor: {
    currentPatchId: 1,
    mode: EDITOR_MODE.EDITING,
    dragging: null,
    selection: [],
    linkingPin: null,
    selectedNodeType: 1,
  },
  nodeTypes: {
    1: {
      id: 1,
      label: 'Not',
      category: NODE_CATEGORY.FUNCTIONAL,
      pins: {
        in: {
          key: 'in',
          type: PIN_TYPE.INPUT,
        },
        out: {
          key: 'out',
          type: PIN_TYPE.OUTPUT,
        },
      },
    },
    2: {
      id: 2,
      label: 'Either',
      category: NODE_CATEGORY.FUNCTIONAL,
      pins: {
        in: {
          key: 'in',
          type: PIN_TYPE.INPUT,
          label: 'IN',
        },
        ifTrue: {
          key: 'ifTrue',
          type: PIN_TYPE.INPUT,
          label: 'T',
        },
        ifFalse: {
          key: 'ifFalse',
          type: PIN_TYPE.INPUT,
          label: 'F',
        },
        out: {
          key: 'out',
          type: PIN_TYPE.OUTPUT,
        },
      },
    },
    3: {
      id: 3,
      label: 'Pot',
      category: NODE_CATEGORY.HARDWARE,
      pins: {
        out: {
          key: 'out',
          type: PIN_TYPE.OUTPUT,
        },
      },
    },
    4: {
      id: 4,
      label: 'LED',
      category: NODE_CATEGORY.HARDWARE,
      pins: {
        brightness: {
          key: 'brightness',
          type: PIN_TYPE.INPUT,
        },
      },
    },
    5: {
      id: 5,
      label: 'Servo',
      category: NODE_CATEGORY.HARDWARE,
      pins: {
        value: {
          key: 'value',
          type: PIN_TYPE.INPUT,
        },
      },
    },
    6: {
      id: 6,
      label: 'Constant',
      category: NODE_CATEGORY.CONFIGURATION,
      pins: {
        value: {
          key: 'value',
          type: PIN_TYPE.OUTPUT,
        },
      },
    },
    7: {
      id: 7,
      label: 'IMU',
      category: NODE_CATEGORY.HARDWARE,
      pins: {
        yaw: {
          key: 'yaw',
          type: PIN_TYPE.OUTPUT,
          label: 'YAW',
        },
        pitch: {
          key: 'pitch',
          type: PIN_TYPE.OUTPUT,
          label: 'PIT',
        },
        roll: {
          key: 'roll',
          type: PIN_TYPE.OUTPUT,
          label: 'ROL',
        },
      },
    },
  },
};

export default initialState;
