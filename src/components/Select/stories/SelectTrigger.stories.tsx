import type { Meta, StoryObj } from "@storybook/react";
import { expect, within, userEvent } from "@storybook/test";
import { SelectTrigger } from "../index";
import { Select } from "../select";
import { Calendar, ChevronDown } from "lucide-react";

const meta = {
  title: "Components/Select/SelectTrigger",
  component: SelectTrigger,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Select value="" onChange={() => {}}>
        <Story />
      </Select>
    ),
  ],
  argTypes: {
    placeholder: { control: "text" },
    icon: {
      control: false,
      description: "Icon component to show on the right side",
    },
  },
} satisfies Meta<typeof SelectTrigger>;

export default meta;
type Story = StoryObj<typeof SelectTrigger>;

export const Default: Story = {
  args: {
    placeholder: "Select an option",
    icon: <ChevronDown className="h-4 w-4 text-gray-500" />,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const trigger = canvas.getByRole("textbox");
    await expect(trigger).toBeInTheDocument();
    await expect(trigger).toHaveAttribute("placeholder", "Select an option");
    await userEvent.click(trigger);
  },
};

export const CustomIcon: Story = {
  args: {
    placeholder: "Select a date...",
    icon: <Calendar className="h-4 w-4 text-gray-500" />,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("textbox");
    await expect(trigger).toBeInTheDocument();
  },
};

export const Disabled: Story = {
  render: (args) => (
    <Select value="" onChange={() => {}} disabled>
      <SelectTrigger
        {...args}
        icon={<ChevronDown className="h-4 w-4 text-gray-400" />}
      />
    </Select>
  ),
  args: {
    placeholder: "Disabled trigger",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("textbox");
    await expect(trigger).toHaveAttribute("aria-disabled", "true");
  },
};
