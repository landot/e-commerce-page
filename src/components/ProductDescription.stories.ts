import type { Meta, StoryObj } from '@storybook/react';

import { ProductDescription } from './ProductDescription';

const meta = {
  title: 'ProductDescription',
  component: ProductDescription,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ProductDescription>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
