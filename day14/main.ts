// Q40
function make_album(
  artist_name: string,
  album_title: string,
  numberOfTracks?: number
) {
  let musicAlbum = {
    artist_name,
    album_title,
  };
  if(numberOfTracks){
    musicAlbum["Tracks"]=numberOfTracks
  }
  return musicAlbum
}
console.log(make_album("Taylor Swift","Folklore"))
console.log(make_album("Kendrick Lamar","DAMN"))
console.log(make_album("Ed Sheeran","Perfect",20))

// Q41
let magicianNames: string[] = [
  "Merlin the Magnificent",
  "Mystique the Enchanter",
  "Arcane the Illusionist",
];
function show_magicians(magicianNames: string[]) {
  magicianNames.forEach((name) => {
    console.log(name);
  });
}
show_magicians(magicianNames);










// 42
function make_great(magicianNames: string[]) {
  for (let i = 0; i < magicianNames.length; i++) {
    magicianNames[i] = magicianNames[i] + " the Great";
  }
}
make_great(magicianNames);
show_magicians(magicianNames);





