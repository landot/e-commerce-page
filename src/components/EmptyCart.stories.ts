import type { Meta, StoryObj } from '@storybook/react';

import { EmptyCart } from './EmptyCart';

const meta = {
  title: 'EmptyCart',
  component: EmptyCart,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof EmptyCart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
