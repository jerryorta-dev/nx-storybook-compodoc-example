import { Meta } from '@storybook/angular';
import { MyButtonComponent } from './my-button.component';

export default {
  title: 'libs/shared/ui-design-library/design-library-nx-sb-compo-butn',
  component: MyButtonComponent,
} as Meta<MyButtonComponent>;

export const canvas = {
  render: (args: MyButtonComponent) => ({
    props: args
  }),
  args: {
    primary: false,
    backgroundColor: '#ff00ff',
    size: 'medium',
    label: 'Button'
  }
};


// const Template: Story<MyButtonComponent> = (args: MyButtonComponent) => ({
//   props: args,
// });
//
// export const Primary = Template.bind({});
// Primary.args = {
//   primary:  false,
//   backgroundColor:  '#ff00ff',
//   size:  'medium',
//   label:  'Button',
// }

