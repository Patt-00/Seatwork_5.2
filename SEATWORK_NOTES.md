# Seatwork 5.2 — Part C predictions and Part D reflection

Use these predictions to prepare for the break-and-observe activity. Fill in the
last column after running each experiment on an Android phone or emulator. The
browser preview may behave differently from a native Android view.

## Part C: Break it on purpose

| Change | Prediction | What I observed on Android (complete after your run) |
| --- | --- | --- |
| Add bare text directly inside the card's outer `View` | React Native requires text nodes to be inside a `Text` component. The app should report a render error until the text is wrapped in `Text`. | |
| Replace the outer `View` with `div` | `div` is an HTML element, not a React Native native component. TypeScript may reject it; if the check is bypassed, Android cannot render that host element. | |
| Rename `Pressable`'s `onPress` to `onClick` | `onClick` is not the native press handler. TypeScript should report the unsupported prop, and a tap will not increment the Like counter. | |
| Put two `Text` elements in a `View`, then add `flexDirection: 'row'` | The default flex direction is column, so the texts stack vertically. With `row`, they appear side by side. | |
| Render 30 lines in a `View`, then wrap them in `ScrollView` | A `View` does not scroll, so content below the viewport is inaccessible. `ScrollView` lets the user scroll through the lines. | |

## Part D: Reflection draft

Personalize these ideas after you run Part C; do not claim a result that you did
not see.

1. The component's `name` and `course` props, `useState` counter, and JSX
   structure stay familiar. The web-only elements, click handler, and CSS rules
   change to React Native components, `onPress`, and `StyleSheet` styles.
2. Choose the Part C result that surprised you most, describe what you expected,
   and then describe what actually happened on your Android phone.
3. The main difference between React and React Native is that React renders web
   interfaces with HTML and CSS, while React Native renders native interface
   components and uses JavaScript styles and touch events.
