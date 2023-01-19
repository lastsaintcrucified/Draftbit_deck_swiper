# Deck-Swiper

Draftbit's specialized component library. Based on react-native-deck-swiper, this allows user to swipe through various card compnent like a deck of card.

## Quickstart:

```sh
git clone https://github.com/lastsaintcrucified/Draftbit_interview_deckSwiper
yarn
yarn android
```

```

## Overview

This folder structure is split up into data, src.

- data: contains the dummy data for showing of the components
- src: src contains the folders given below:
    -component: All the necessary component including DeckSwiper.
    -screen: Two screen. First one is Home screen and 2nd one is Demo screen for deck swiper.
    -types: Contains the prop types declaration
    -mappings:Special folder to adjust DeckSwiper right into Draftbit.

** Chances are, you'll spend most of your time in `src/compnent` **

### PROPS details
 Mainly 4 props will be taken to implepment full functionality.
  -listData: An array of data to be rendered in the deck of card
  -isInifinite: Boolean value to determine if the swiping to be continued indefinitely. Default value is false
  -horizontalSwipe: Boolean value to enable/disable horizontal swipe. Default value is true
  -verticalSwipe: Boolean value to enable/disable vertical swipe. Default value is true
And all other props from react-native-deck-swiper can be added

```
