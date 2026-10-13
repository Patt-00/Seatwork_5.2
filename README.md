# Seatwork 5.2 — React Native with Expo

This Expo SDK 57 project completes the Part B web-to-native conversion from the
Mobile Computing Seatwork 5.2 instructions. It uses the Expo default template,
Expo Router, TypeScript, and React Native core components.

## Run it

```sh
npm ci
npx expo start
```

On Android, open Expo Go and scan the QR code while the phone and computer are
on the same Wi-Fi network. Press `w` in the Expo terminal to open the web build.
For source checks, run `npm run lint` and `npx tsc --noEmit`.

## Assignment files

- `src/components/ProfileCard.tsx` converts the web card using `View`, `Text`,
  `Image`, `TextInput`, `Pressable`, `useState`, and `StyleSheet`.
- `src/app/index.tsx` displays the card with the assignment's sample name and
  course. Replace `Your Name` with your name before taking your submission
  screenshot. Tap the button three times and it should show `Like (3)`.
- `reference/expo-starter-index.tsx` keeps the original Expo starter screen
  outside `src`, as the activity requests before replacing the Home screen.
- [`SEATWORK_NOTES.md`](SEATWORK_NOTES.md) includes the Part C predictions and
  reflection prompts. Fill the observation column after trying the examples on
  Android; the browser preview is not a substitute for native observations.

## Part A: React Native equivalents

| Web React | React Native equivalent |
| --- | --- |
| `<div>` | `<View>` |
| `<p>`, `<h1>`, `<span>` | `<Text>` with a `style` for the visual differences |
| `<img src="avatar.png" />` | `<Image source={require('./avatar.png')} />` for a bundled image, or `source={{ uri: 'https://…' }}` for a remote image |
| `<input type="text" />` | `<TextInput />` |
| `<button onClick={...}>` | `<Pressable onPress={...}>` |
| `<ul>` with `.map()` for a long list | `<FlatList data={...} renderItem={...} />` |
| `className="card"` plus a `.css` file | A `StyleSheet.create({...})` style object passed through `style` |
| `padding: 16px` | `padding: 16` (React Native numbers use density-independent units) |
| `onChange={(e) => setText(e.target.value)}` | `<TextInput onChangeText={setText} />` |
| `<a href="/profile">` | Expo Router's `<Link href="/profile">` for app navigation; `Linking.openURL(...)` for external links |

The intentional Part C break-and-observe exercise and Part D personal
reflection should be completed after running the screen on your phone or
emulator. Record what you actually see for each experiment before submitting
the activity.
