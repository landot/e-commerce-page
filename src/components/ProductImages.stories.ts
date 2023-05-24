import type { Meta, StoryObj } from '@storybook/react';

import { ProductImages } from './ProductImages';

const meta = {
  title: 'ProductImages',
  component: ProductImages,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ProductImages>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {isOverlay: false},
};