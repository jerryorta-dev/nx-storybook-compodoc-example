import { Meta } from '@storybook/angular';
import { MyButtonComponent } from './my-button.component';

export default {
  name: 'MyButtonComponent',
  title: 'storybook/ui-design-library/nx-sb-compo-butn',
  component: MyButtonComponent,
  // parameters: {
  //   componentClassName: "MyButtonComponent"
  // }

} as Meta<MyButtonComponent>;

export const canvas = {
  render: (args: MyButtonComponent) => ({
    props: args,
  }),
  args: {
    primary:  false,
    backgroundColor:  '#ff00ff',
    size:  'medium',
    label:  'Button',
  },

};


