import type { Meta, StoryObj } from '@storybook/react';

import { HamburgerMenu } from './HamburgerMenu';

const meta = {
  title: 'HamburgerMenu',
  component: HamburgerMenu,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof HamburgerMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
