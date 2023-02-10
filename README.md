# `V1.5.1` TierList - Tierlist maker using AniList's API

_not offically endorsed by AniList_

[live demo](https://anzuftnw.github.io/live-demo/tl/)

# How To

- Decide and search for whatever kind of tierlist you want to create
- Submitting the search will open the card-pool and trashbin
- Drag and drop characters from the card-pool into your tierlist
- Add/remove rows and/or change the color and name of each tier
- Click on the top right gear of each tier/row to reveal it's menu
- After you're done click on the screenshot button, right click the image and select **Save Image As...**
- Repeat
- You can save/load/delete your progress locally in your browser through the save menu in the top left corner
- You can also export/import your tierlist progress as a file if you want to switch browsers or clear your browser cache

# Planned Features / Ideas

- Cooler UI
- Allowing to screenshots through a button (CORS problems)
- Tournament Mode :thinking:
- Duel Mode :doublethinking:
- Additional Search Modes = Seasonals

# Known Bugs

- Firefox: Rank Text (S, A, B, etc.) is not centered
- Little shake when you start to drag a card from the card pool
- If you save your progress with row editor menus open, upon loading that save they'll stay open and display wrong values, close and open them again to fix this

# Changelog

- `2023/02/10` - _V1.5.1_
  - Changes to search function
    - Anime and Manga searches are now seperated
    - It is now possible to import whole lists
      - Anime lists will only import entries flagged as completed, repeating or paused
      - Manga lists will additionally import entries flagged as reading
  - Further imrpovment to the drag and drop behaviour
  - Improved card-name and image display
  - Fixed a bug that caused the row editor to not display its proper values after loading a saved state
- `2023/02/09` - _V1.5_
  - Changes to navigation behaviour
  - Changes to card images and names
  - Changes to drag and drop behaviour
  - Fixed a bug that killed the row edit buttons after loading previously saved tierlists
- `2022/02/07` - _V1.4_
  - Changed query types
  - More ways to search for stuff now
- `2022/01/28` - _V1.3.1_
  - Fixed bugs with importing saves
- `2022/01/27` - _V1.3_
  - Added ability to save/load progress to/from localstorage
  - Added ability to save/load progress to/from external file
- `2022/01/27` - _V1.2_
  - Added the ability to search characters through animanga entrys
  - Added the ability to rank staff
  - Changed how the pool menu behaves and added menu icon
  - (Hopefully) Fixed a bug where certain cards were bigger in width than others
- `2022/01/22` - _V1.1_
  - Added more cross browser consistency
  - Changed default rank text color
  - Reduced delay for card pool to close
  - Drawer automatically extends on submit
  - Allow enter key to submit search query
- `2022/01/22` - _V1.0_
  - Full release
- `2022/01/06` - _V0.1_
  - Initial entry
