import Default from './demos/default.vue?raw';
import WithIcons from './demos/withIcons.vue?raw';
import CustomStyle  from './demos/customStyle.vue?raw';
import CustomLabel from './demos/customLabel.vue?raw';
import NoFirstLastButton from './demos/noFirstLastButton.vue?raw';
import Compact from './demos/compact.vue?raw';

import { ref } from 'vue';

const page = ref();

export const demos = [
  {
    id: 1,
    title: 'Basic Usage',
    description: 'A simple pagination example.',
    propsData: {
      totalItems: 100,
      siblingCount: 2,
      boundaryCount: 2,
      vModel: page.value,
    },
    html: Default,
  },
  {
    id: 2,
    title: 'With Icons',
    description: 'Pagination component with navigation icons.',
    propsData: {
      totalItems: 200,
      siblingCount: 1,
      boundaryCount: 1,
      showIcons: true,
    },
    html: WithIcons,
  },
  {
    id: 3,
    title: 'Custom Style',
    description: 'Pagination component with custom styles applied.',
    propsData: {
      totalItems: 300,
      activeStyle: {
        backgroundColor: '#10b981',
        color: '#ffffff',
      },
    },
    html: CustomStyle,
  },
  {
    id: 4,
    title: 'Custom Label (Spanish)',
    description: 'Pagination component with custom labels for navigation buttons.',
    propsData: {
      totalItems: 150,
      labels: {
        first: 'Primera',
        prev: 'Anterior',
        next: 'Siguiente',
        last: 'Última'
      }
    },
    html: CustomLabel,
  },
  {
    id: 5,
    title: 'No First/Last Buttons',
    description: 'Pagination component without first and last navigation buttons.',
    propsData: {
      totalItems: 100,
      showFirstLast: false,
    },
    html: NoFirstLastButton,
  },
  {
    id: 6,
    title: 'Compact (No Prev/Next)',
    description: 'Compact pagination component without previous and next buttons.',
    propsData: {
      totalItems: 80,
      showPrevNext: false,
      siblingCount: 0,
      boundaryCount: 1,
    },
    html: Compact,
  }
]
