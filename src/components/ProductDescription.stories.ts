import type { Meta, StoryObj } from '@storybook/react';

import { ProductDescription } from './ProductDescription';

const meta = {
  title: 'ProductDescription',
  component: ProductDescription,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof ProductDescription>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
