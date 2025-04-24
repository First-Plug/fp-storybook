import type { Meta, StoryObj } from "@storybook/react";
import { expect, within, userEvent } from "@storybook/test";
import { action } from "@storybook/addon-actions";
import { SelectOptions, SelectOption, Select, SelectTrigger } from "../index";

const meta = {
  title: "Components/Select/SelectOptions",
  component: SelectOptions,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: false,
      description: "SelectOption components",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
    emptyMessage: {
      control: "text",
      description: "Message shown when no options are available",
    },
  },
} satisfies Meta<typeof SelectOptions>;

export default meta;
type Story = StoryObj<typeof SelectOptions>;

export const Default: Story = {
  render: (args) => (
    <Select value="1" onChange={action("onChange")}>
      <SelectTrigger placeholder="Select an option" />
      <SelectOptions {...args}>
        <SelectOption value="1">Option 1</SelectOption>
        <SelectOption value="2">Option 2</SelectOption>
        <SelectOption value="3">Option 3</SelectOption>
        <SelectOption value="4">Option 4</SelectOption>
        <SelectOption value="5">Option 5</SelectOption>
      </SelectOptions>
    </Select>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const trigger = canvas.getByRole("textbox");
    await userEvent.click(trigger);

    const options = canvas.getAllByRole("listitem");
    await expect(options).toHaveLength(5);

    await expect(canvas.getByText("Option 1")).toBeInTheDocument();
    await expect(canvas.getByText("Option 2")).toBeInTheDocument();
    await expect(canvas.getByText("Option 3")).toBeInTheDocument();

    const option2 = canvas.getByText("Option 2");
    await userEvent.click(option2);
  },
};

export const Empty: Story = {
  render: (args) => (
    <Select value="" onChange={action("onChange")}>
      <SelectTrigger placeholder="Select an option" />
      <SelectOptions {...args} emptyMessage="No hay opciones disponibles" />
    </Select>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const trigger = canvas.getByRole("textbox");
    await userEvent.click(trigger);

    await expect(
      canvas.getByText("No hay opciones disponibles")
    ).toBeInTheDocument();
  },
};

export const WithCustomClass: Story = {
  render: (args) => (
    <Select value="1" onChange={action("onChange")}>
      <SelectTrigger placeholder="Select an option" />
      <SelectOptions {...args} className="max-h-[200px]">
        <SelectOption value="1">Option 1</SelectOption>
        <SelectOption value="2">Option 2</SelectOption>
        <SelectOption value="3">Option 3</SelectOption>
      </SelectOptions>
    </Select>
  ),
};
