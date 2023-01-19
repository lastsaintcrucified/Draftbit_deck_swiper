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
      label: "Enable/Disable Horizontal Swap", //new prop for interview test
    }),
    verticalSwipe: createStaticBoolProp({
      label: "Enable/Disable Vertical Swap", //new prop for interview test
    }),
    onSwiped: createActionProp({
      label: "Inactive Color",
    }),
    onSwipedAll: createActionProp({
      label: "Inactive Color",
    }),
  },
};
