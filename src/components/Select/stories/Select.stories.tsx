import type { Meta, StoryObj } from "@storybook/react";
import { expect, within, userEvent } from "@storybook/test";
import { action } from "@storybook/addon-actions";
import {
  Select,
  SelectLabel,
  SelectTrigger,
  SelectOptions,
  SelectOption,
} from "../index";
import { useState } from "react";

const meta = {
  title: "Components/Select/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: false,
      description: "`<SelectLabel>, <SelectTrigger>, <SelectOptions>`",
    },
    disabled: { control: "boolean" },
    searchable: { control: "boolean" },
    color: {
      control: "radio",
      options: ["error", "success", "grey"],
    },
    onChange: {
      action: "changed",
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof Select>;

const SelectWithState = () => {
  const [value, setValue] = useState("1");

  return (
    <Select value={value} onChange={setValue}>
      <SelectLabel>Choose an option</SelectLabel>
      <SelectTrigger placeholder="Select an option" />
      <SelectOptions>
        <SelectOption value="1">Option 1</SelectOption>
        <SelectOption value="2">Option 2</SelectOption>
        <SelectOption value="3">Option 3</SelectOption>
      </SelectOptions>
    </Select>
  );
};

export const Default: Story = {
  render: () => <SelectWithState />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const selectElement = canvas.getByRole("textbox");
    await expect(selectElement).toBeInTheDocument();

    const triggerElement = canvas.getByText("Option 1");
    await expect(triggerElement).toBeInTheDocument();

    await userEvent.click(selectElement);

    const optionsList = canvas.getByRole("list");
    await expect(optionsList).toBeVisible();

    const option2 = canvas.getByText("Option 2");
    await expect(option2).toBeInTheDocument();

    await userEvent.click(option2);

    await expect(optionsList).not.toBeVisible();
    await expect(canvas.getByText("Option 2")).toBeInTheDocument();
  },
};

// Ejemplo de un Select controlado con estado inicial diferente
const SelectWithCustomInitialState = () => {
  const [value, setValue] = useState("2");

  return (
    <Select value={value} onChange={setValue}>
      <SelectLabel>Choose an option</SelectLabel>
      <SelectTrigger placeholder="Select an option" />
      <SelectOptions>
        <SelectOption value="1">Option 1</SelectOption>
        <SelectOption value="2">Option 2</SelectOption>
        <SelectOption value="3">Option 3</SelectOption>
      </SelectOptions>
    </Select>
  );
};

export const WithInitialValue: Story = {
  render: () => <SelectWithCustomInitialState />,
};

export const Disabled: Story = {
  render: () => (
    <Select value="1" onChange={action("onChange")} disabled>
      <SelectLabel>Disabled Select</SelectLabel>
      <SelectTrigger placeholder="Select disabled" />
      <SelectOptions>
        <SelectOption value="1">Option 1</SelectOption>
        <SelectOption value="2">Option 2</SelectOption>
        <SelectOption value="3">Option 3</SelectOption>
      </SelectOptions>
    </Select>
  ),
};
