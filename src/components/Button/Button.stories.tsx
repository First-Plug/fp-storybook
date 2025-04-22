import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { ArrowRight } from "lucide-react";
import { action } from "@storybook/addon-actions";
import { expect, within, userEvent } from "@storybook/test";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "radio",
      options: ["primary", "secondary", "delete", "text", "outline", "alert"],
    },
    size: {
      control: "select",
      options: ["small", "default", "big"],
    },
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "primary",
    onClick: action("clicked"),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: /Primary Button/i });

    await expect(button).toBeInTheDocument();
    await expect(button).toHaveClass("bg-blue");
    await userEvent.click(button);
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "secondary button",
    onClick: action("clicked"),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: /secondary button/i });

    await expect(button).toBeInTheDocument();
    await expect(button).toHaveClass("bg-white");
    await userEvent.click(button);
  },
};

export const Big: Story = {
  args: {
    size: "big",
    children: "big button",
    onClick: action("clicked"),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: /big button/i });

    await expect(button).toBeInTheDocument();
    await expect(button).toHaveClass("text-lg");
    await userEvent.click(button);
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "disabled button",
    onClick: action("clicked"),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: /disabled button/i });

    await expect(button).toBeInTheDocument();
    await expect(button).toBeDisabled();
    await expect(button).toHaveClass("bg-light-grey");
  },
};

export const Delete: Story = {
  args: {
    variant: "delete",
    children: "delete button",
    onClick: action("clicked"),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: /delete button/i });

    await expect(button).toBeInTheDocument();
    await expect(button).toHaveClass("bg-error");
    await userEvent.click(button);
  },
};

export const Alert: Story = {
  args: {
    variant: "alert",
    children: "alert button",
    onClick: action("clicked"),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: /alert button/i });

    await expect(button).toBeInTheDocument();
    await expect(button).toHaveClass("text-error");
    await userEvent.click(button);
  },
};

export const AsChild: Story = {
  args: {
    asChild: true,
    children: (
      <a href="https://example.com" target="_blank" rel="noopener noreferrer">
        ejemplo <ArrowRight className="w-4 h-4" />
      </a>
    ),
    onClick: action("clicked"),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole("link", { name: /ejemplo/i });

    await expect(link).toBeInTheDocument();
    await expect(link).toHaveAttribute("href", "https://example.com");
    await expect(link).toHaveAttribute("target", "_blank");
  },
};

export const Capitalized: Story = {
  args: {
    capitalized: true,
    children: "texto capitalized",
    onClick: action("clicked"),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: /texto capitalized/i });

    await expect(button).toBeInTheDocument();
    await expect(button).toHaveClass("capitalize");
    await userEvent.click(button);
  },
};
