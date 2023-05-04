import { Meta, moduleMetadata } from '@storybook/angular';
import { MyButtonComponent } from './my-button.component';

export default {
  title: 'libs/shared/ui-design-library',
  component: MyButtonComponent,
  // decorators: [
  //   moduleMetadata({
  //     imports: [],
  //   })
  // ],
} as Meta<MyButtonComponent>;

export const myButton = {
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

