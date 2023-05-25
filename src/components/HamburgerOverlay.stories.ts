import type { Meta, StoryObj } from '@storybook/react';

import { HamburgerOverlay } from './HamburgerOverlay';

const meta = {
  title: 'HamburgerOverlay',
  component: HamburgerOverlay,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof HamburgerOverlay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
