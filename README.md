# React City Postcard Builder App

**Visit the live demo here:** [Live Demo](https://keen-babbage-8e7d8b.netlify.app/)

| User should be able to . . .                                                         |             |
| :----------------------------------------------------------------------------------- | ----------: |
| Visit the deployed app on Netlify, with link in the About section of the Github repo |  **required for grading** |

| Events                                                                                |             |
| :----------------------------------------------------------------------------------- | ----------: |
| On typing in the name input, the city name changes with each keystroke  |        .5 |
| On changing the waterfront dropdown, the image for the waterfront changes appropriately  |        .5 |
| On changing the castle dropdown, the image for the castle changes appropriately  |        .5 |
| On changing the skyline dropdown, the image for the skyline changes appropriately  |        .5 |
| On submitting a new slogan, it is displayed with all the other slogans in a list |        1 |

| Components                                                                                |             |
| :----------------------------------------------------------------------------------- | ----------: |
| `App()` : tracks state for `skylineId`, `waterfrontId`, `castleId`, `slogans`, and `cityName` |1|
| `App()` : passes state as props correctly to `CityNameInput` and `City`, `SloganForm`, `SloganList` |1|
| `CityNameInput({ setCityName })` : on change, call `setCityName` with the new `e.target.value` to change `App.js` state |.5|
| `City({waterfrontId, skylineId, castleId })` : use the 3 props to render the correct images that live in the `public` directory |1|
| `SloganForm({ setSlogans, solgans })` : tracks state for the current slogan being typed. OnChange of the input, this state changes.  |1|
| `SloganForm({ setSlogans, slogans })` : On submit of the form, this slogan is injected into `App.js` state using a callback state handler passed down as a prop. |1|
| `SloganList({ slogans })` : maps through the `slogans` prop and renders a `Slogan` for each item in the array |1|
| `Slogan({ slogan} )` : renders the `slogan` prop |.5|

### Stretch goal ideas:
- Write two components: `PostCardForm` (to hold all the input components) and `PostCardDisplay` (to show the user what is selected). Import the appropriate components into these components so that App.js is only responsible for: 
  1) initializing state 
  2) calling `PostCardForm` and `PostCardDisplay` and
  3) passing the correct props to `PostCardForm` and `PostCardDisplay`.
- Write a component called `Dropdown`. Use this component to replace all 3 of your dropdowns. Ask yourself: what differs between these 3 dropsdowns? The answer to that question will tell you what props your abstracted `Dropdown` component will need to be passed. This is a challenge :)
- Add a `Submit Postcard` button. The app will clear the current order and keep track of all past postcards with all their data and render them to the page (like soccer scorekeeper).

![image](https://user-images.githubusercontent.com/16160135/150245906-64beead2-28a0-4062-b7d3-fc8734ec2ead.png)




