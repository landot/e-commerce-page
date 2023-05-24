import type { Meta, StoryObj } from '@storybook/react';

import { ProductImagesOverlay } from './ProductImagesOverlay';

const meta = {
  title: 'ProductImagesOverlay',
  component: ProductImagesOverlay,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ProductImagesOverlay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
