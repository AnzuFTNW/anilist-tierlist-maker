# `V1.5` TierList - Tierlist maker using AniList's API

_not offically endorsed by AniList_

[live demo](https://anzuftnw.github.io/live-demo/tl/)

# How To

- Select what kind of tierlist you wanna make
- Click on the top right menu icon to reveal the card-pool and trashbin
- Drag and drop characters from the card-pool into your tierlist
- Change the individual color and name of each tier/row
- You may also add or remove additional rows
- Click on the top right gear of each tier/row to reveal it's menu
- After you're done hit the screenshot button, right click the now appeard image and rightclick **Save Image As...**
- Repeat
- You can save/load/delete (locally) your progress in your browser through save menu in the top left corner
- You can also export/import your tierlist progress as a file if you want to switch browsers or clear your browser cache

# Planned Features / Ideas

- Cooler UI
- Allowing to screenshots through a button (CORS problems)
- Tournament Mode :thinking:
- Duel Mode :doublethinking:
- Addiotional Search Modes = Seasonals

# Known Bugs

- It's possible to mix animanga entrys and characters but I see no reason to remove this
- Firefox: Rank Text (S, A, B, etc.) is not centered

# Changelog


- `2023/02/09` - _V1.5_
  - Changes to navigation behaviour
  - Changes to card images and names
  - Changes to drag and drop behaviour
  - Fixed a bug that killed the row edit buttons after loading previously saved tierlists
  - Known Bugs:
    - Dragging cards back to the pool might cause stuttering
    - After loading previously saved tierlists the row editor doesn't display proper values
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
