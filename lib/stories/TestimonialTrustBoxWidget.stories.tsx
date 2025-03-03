import { Meta, StoryFn } from "@storybook/react";
import { TrustBoxWidget } from "../components/TrustBoxWidget";
import {
  TrustBoxWidgeReviewListFileredAttributesProps,
  TrustBoxWidgetBasicReviewAttributesProps,
} from "../interface/trust-box.types";
import React from "react";
import { TrustpilotWidgetProvider } from "../context/TrustpilotWidgetProvider";

export default {
  title: "Trustpilot/Testimonial",
  decorators: [
    (Story) => (
      <TrustpilotWidgetProvider>
        <Story />
      </TrustpilotWidgetProvider>
    ),
  ],
} as Meta;

export const Carousel: StoryFn<TrustBoxWidgetBasicReviewAttributesProps> = (
  args: TrustBoxWidgetBasicReviewAttributesProps
) => {
  return <TrustBoxWidget.Carousel {...args} />;
};
Carousel.args = {};

export const DropDown: StoryFn<TrustBoxWidgetBasicReviewAttributesProps> = (
  args: TrustBoxWidgetBasicReviewAttributesProps
) => {
  return <TrustBoxWidget.DropDown {...args} />;
};
DropDown.args = {};

export const Grid: StoryFn<TrustBoxWidgetBasicReviewAttributesProps> = (
  args: TrustBoxWidgetBasicReviewAttributesProps
) => {
  return <TrustBoxWidget.Grid {...args} />;
};
Grid.args = {};

export const List: StoryFn<TrustBoxWidgeReviewListFileredAttributesProps> = (
  args: TrustBoxWidgeReviewListFileredAttributesProps
) => {
  return <TrustBoxWidget.List {...args} />;
};
List.args = {};

export const ListFiltered: StoryFn<
  TrustBoxWidgeReviewListFileredAttributesProps
> = (args: TrustBoxWidgeReviewListFileredAttributesProps) => {
  return <TrustBoxWidget.ListFiltered {...args} />;
};
ListFiltered.args = {};

export const MiniCarousel: StoryFn<TrustBoxWidgetBasicReviewAttributesProps> = (
  args: TrustBoxWidgetBasicReviewAttributesProps
) => {
  return <TrustBoxWidget.MiniCarousel {...args} />;
};
MiniCarousel.args = {};

export const PopUp: StoryFn<TrustBoxWidgetBasicReviewAttributesProps> = (
  args: TrustBoxWidgetBasicReviewAttributesProps
) => {
  return <TrustBoxWidget.PopUp {...args} />;
};
PopUp.args = {};

export const Quote: StoryFn<TrustBoxWidgetBasicReviewAttributesProps> = (
  args: TrustBoxWidgetBasicReviewAttributesProps
) => {
  return <TrustBoxWidget.Quote {...args} />;
};
Quote.args = {};

export const Slider: StoryFn<TrustBoxWidgetBasicReviewAttributesProps> = (
  args: TrustBoxWidgetBasicReviewAttributesProps
) => {
  return <TrustBoxWidget.Slider {...args} />;
};
Slider.args = {};
