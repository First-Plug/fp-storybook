import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import { Select, SelectLabel } from "../index";

const meta = {
  title: "Components/Select/SelectLabel",
  component: SelectLabel,
  tags: ["autodocs"],
} satisfies Meta<typeof SelectLabel>;

export default meta;
type Story = StoryObj<typeof SelectLabel>;

export const Default: Story = {
  render: (args) => (
    <Select value="1" onChange={() => {}}>
      <SelectLabel {...args} />
    </Select>
  ),
  args: {
    children: "Label Text",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const label = canvas.getByText("Label Text");
    await expect(label).toBeInTheDocument();
  },
};

export const Required: Story = {
  render: (args) => (
    <Select value="1" onChange={() => {}}>
      <SelectLabel {...args} />
    </Select>
  ),
  args: {
    children: "Required Field",
    required: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const labelWithAsterisk = canvas.getByText("Required Field*");
    await expect(labelWithAsterisk).toBeInTheDocument();
  },
};
