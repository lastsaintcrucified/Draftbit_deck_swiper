import {
  COMPONENT_TYPES,
  createStaticBoolProp,
  createActionProp,
} from "../types/types";

export const SEED_DATA = {
  name: "Deck Swiper",
  tag: "DeckSwiper",
  description: "A deck swiping component",
  category: COMPONENT_TYPES.swiper,
  layout: {
    height: 500,
    width: "100%",
  },
  props: {
    isInifinite: createStaticBoolProp({
      label: "Infinite loop?",
    }),
    horizontalSwipe: createStaticBoolProp({
      label: "Disable Horizontal Swap", //new prop for interview test
    }),
    verticalSwipe: createStaticBoolProp({
      label: "Disable Vertical Swap", //new prop for interview test
    }),
    onSwiped: createActionProp({
      label: "Inactive Color",
    }),
    onSwipedAll: createActionProp({
      label: "Inactive Color",
    }),
  },
};
