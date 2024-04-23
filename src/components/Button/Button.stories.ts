import type { Meta, StoryObj } from "@storybook/react";
import Button from ".";

const meta = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    styleName: {
      control: { type: "select" },
      options: ["btn_secondary", "btn_grey", "btn"],
    },
    type: {
      control: { type: "radio" },
      options: ["button", "submit"],
    },
    iconLeft: {
      control: { type: "select" },
      options: ["link", "hotlink"],
    },
    iconRight: {
      control: { type: "select" },
      options: ["link", "hotlink"],
    },
    svgColor: {
      control: { type: "select" },
      options: ["svgGrey", "svgWhite", "svgOrange"],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Botón",
    isDisabled: false,
  },
};

export const Secondary: Story = {
  args: {
    title: "Botón",
    styleName: "btn_secondary",
    isDisabled: false,
  },
};

export const Grey: Story = {
  args: {
    title: "Botón",
    isDisabled: false,
    styleName: "btn_grey",
  },
};

export const IconButton: Story = {
  args: {
    title: "Botón",
    isDisabled: false,
    iconRight: "link",
    svgColor: "svgWhite",
  },
};
