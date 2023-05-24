import type { Meta, StoryObj } from '@storybook/react';

import { Cart } from './Cart';

const meta = {
  title: 'Cart',
  component: Cart,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Cart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        quantity: 3,
    },
};
