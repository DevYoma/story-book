import type { Meta, StoryObj } from "@storybook/react";

import Light from "../../components/Light/Light";

const meta: Meta<typeof Light> = {
  component: Light,
  title: "Example/Light",
  tags: ['autodocs'],
  argTypes: {
    variant: {
        control: { type: 'radio' }, 
        options: [
            'green', 
            'yellow', 
            'red'
        ], 

    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};

export const Yellow: Story = {
  args: {
    variant: "yellow",
  },
};

export const Red: Story = {
  args: {
    variant: "red",
  },
};

export const TrafficLight: Story = {
  args: {
    variant: "red",
  },
  render: (args) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        border: "1px solid black",
        width: "max-content",
        padding: 10,
      }}
    >
      <Light variant="red" />
      <Light variant="green" />
      <Light variant="yellow" />
    </div>
  ),
};
