import type { Meta, StoryObj } from '@storybook/react';

import { AddToCartButton } from './AddToCartButton';

const meta = {
  title: 'AddToCartButton',
  component: AddToCartButton,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof AddToCartButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
