import type { Meta, StoryObj } from '@storybook/react';

import { AddQuantity } from './AddQuantity';

const meta = {
  title: 'AddQuantity',
  component: AddQuantity,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof AddQuantity>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {quantity: 1},
};
