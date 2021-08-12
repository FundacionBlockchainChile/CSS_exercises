let figther = document.getElementById('figther')

let streetFighterPlayerImage = [
  // Ryu
  'http://25.media.tumblr.com/657fa62b0a741ee65788d36ecbc30197/tumblr_mf8aqbg1iV1ruetfho1_500.gif',
  // Ken

  // Honda
  'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/76795eed-b218-4387-9bef-03bec2574b7f/d8brj1d-5b49e780-6762-4e0c-ba53-8fbb0c8e1c3c.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc2Nzk1ZWVkLWIyMTgtNDM4Ny05YmVmLTAzYmVjMjU3NGI3ZlwvZDhicmoxZC01YjQ5ZTc4MC02NzYyLTRlMGMtYmE1My04ZmJiMGM4ZTFjM2MuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.VrwQWk72ojFL2PPXI564WH34bEQy3eoPLt3-ybxF_VU',
  // Chun Lee
  'https://i.pinimg.com/originals/da/02/12/da02120be382b52181c7c423d0d8d6be.gif',

  'https://www.arcade-fighter.com/images/game-screens/super-street-fighter-ii/sprites-hd/ssfii-turbo-hd-remix-blanka.gif',
  // MrBIzon
  'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/76795eed-b218-4387-9bef-03bec2574b7f/d8dty1s-34a15a35-7e37-4ea6-8149-26322dc2dde6.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc2Nzk1ZWVkLWIyMTgtNDM4Ny05YmVmLTAzYmVjMjU3NGI3ZlwvZDhkdHkxcy0zNGExNWEzNS03ZTM3LTRlYTYtODE0OS0yNjMyMmRjMmRkZTYuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.3yzs_c-B8X1zxICN_IMj78qzqr85-3OicT8igOkIY6A',
]

let marvelHeroPlayerImage = [
  // Scorpion
  'https://64.media.tumblr.com/tumblr_m4yhwrmzAC1rvt2o5o1_250.gifv',
  // Ryden
  'https://i.pinimg.com/originals/d2/82/30/d28230fe04865d86e798564e5b5df1d4.gif',
  // SubZero
  'http://www.dsogaming.com/wp-content/uploads/2013/10/5657167_orig.gif',
]

let iterationPlayerOne = 0
let iterationPlayerTwo = 0
let playerOne = document.getElementById('figtherOne')
let playerTwo = document.getElementById('figtherTwo')

let changeStreetFighterPlayer = () => {
  // playerOne.setAttribute('class', 'flip')
  iterationPlayerOne < streetFighterPlayerImage.length - 1
    ? iterationPlayerOne++
    : (iterationPlayerOne = 0)
  console.log(iterationPlayerOne)
  if (iterationPlayerOne === 0) playerOne.setAttribute('class', 'flip')
  if (iterationPlayerOne === 1) playerOne.setAttribute('class', '')
  if (iterationPlayerOne === 2) playerOne.setAttribute('class', 'flip')
  if (iterationPlayerOne === 3) playerOne.setAttribute('class', '')

  playerOne.src = streetFighterPlayerImage[iterationPlayerOne]
}

let changeMarvelPlayer = () => {
  iterationPlayerTwo < marvelHeroPlayerImage.length - 1
    ? iterationPlayerTwo++
    : (iterationPlayerTwo = 0)
  console.log(iterationPlayerTwo)
  playerTwo.src = marvelHeroPlayerImage[iterationPlayerTwo]
}
