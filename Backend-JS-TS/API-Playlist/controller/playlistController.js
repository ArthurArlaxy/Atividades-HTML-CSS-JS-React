const playlists = [
  {
    name: "pagode",
    tag: ["pagode", "familia"],
    musics: [
      {
        title: "Tá Vendo Aquela Lua",
        year: 2009,
        artist: "Exaltasamba",
        album: "Ao Vivo na Ilha da Magia",
      },
      {
        title: "Deixa Acontecer",
        year: 2001,
        artist: "Grupo Revelação",
        album: "O Melhor Está por Vir",
      },
    ],
  },
  {
    name: "sertanejo",
    tag: ["sertanejo", "romântico"],
    musics: [
      {
        title: "Evidências",
        year: 1990,
        artist: "Chitãozinho & Xororó",
        album: "Cowboy do Asfalto",
      },
      {
        title: "Ainda Ontem Chorei de Saudade",
        year: 1992,
        artist: "João Mineiro & Marciano",
        album: "João Mineiro & Marciano, Vol. 9",
      },
    ],
  },
  {
    name: "funk",
    tag: ["funk", "balada"],
    musics: [
      {
        title: "Baile de Favela",
        year: 2015,
        artist: "MC João",
        album: "Baile de Favela",
      },
      {
        title: "Parado no Bailão",
        year: 2018,
        artist: "MC L da Vinte e MC Gury",
        album: "Parado no Bailão",
      },
    ],
  },
  {
    name: "rock internacional",
    tag: ["rock", "anos 80", "clássico"],
    musics: [
      {
        title: "Sweet Child O' Mine",
        year: 1987,
        artist: "Guns N' Roses",
        album: "Appetite for Destruction",
      },
      {
        title: "Bohemian Rhapsody",
        year: 1975,
        artist: "Queen",
        album: "A Night at the Opera",
      },
    ],
  },
];

const playlistController = {
  // GET /playlists
  playlists: (req, res) => {
    res.json(playlists);
  },
  // POST /playlists
  create: (req, res) => {
    const { name, tag, musics } = req.body;

    if (!name || !tag || !Array.isArray(tag)) {
      return res.status(400).json({ message: "Error in tag information" });
    }

    const musicList = musics ?? [];

    if (!Array.isArray(musicList)) {
      return res.status(400).json({ message: "Error in music information" });
    }

    for (let i = 0; i < musicList.length; i++) {
      let music = musicList[i];

      let hasAllFields =
        typeof music.title === "string" &&
        typeof music.artist === "string" &&
        typeof music.album === "string" &&
        typeof music.year === "number";

      if (!hasAllFields)
        return res
          .status(400)
          .json({ message: "music has to be title, year, artist, album" });
    }

    const newPlaylist = {
      name,
      tag,
      musics: musicList,
    };

    playlists.push(newPlaylist);
    res.status(201).json(newPlaylist);
  },
  // GET /playlists/:name
  playlist: (req, res) => {
    const { name } = req.params;
    const playlist = playlists.find((playlist) => playlist.name === name);

    if (!playlist) {
      return res.status(404).json({ message: "Playlist not found" });
    }

    res.json(playlist);
  },
  // PUT /playlists/:name/update
  update: (req, res) => {
    const { name } = req.params;
    let { newName, newTag } = req.body;

    const playlist = playlists.find((playlist) => playlist.name === name);

    if (!playlist) {
      return res.status(404).json({ message: "Playlist not found" });
    }

    if (!newName) {
      newName = playlist.name;
    }

    if (!newTag) {
      newTag = playlist.tag;
    }

    if (typeof newName !== "string") {
      return res.status(400).json({ message: "The new name is not type string" });
    }

    if (!Array.isArray(newTag)) {
      return res.status(400).json({ message: "The new tag is not type array" });
    }

    playlist.name = newName;
    playlist.tag = newTag;
    res.json(playlist);
  },
  // DELETE /playlists/:name/delete
  delete: (req, res) => {
    const { name } = req.params;
    const playlist = playlists.findIndex((playlist) => playlist.name === name);

    if (playlist === -1) {
      return res.status(404).json({ message: "Playlist not found" });
    }

    playlists.splice(playlist,1)
    res.status(204).end()
  },
};

module.exports = playlistController;
