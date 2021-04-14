import "./App.css";
import { useState } from "react";

const MOVIES_DATA = {
  TVShows: [
    {
      title: "The Falcon and the Winter Soldier",
      summary:
        "Following the events of “Avengers: Endgame”, the Falcon, Sam Wilson and the Winter Soldier, Bucky Barnes team up in a global adventure that tests their abilities, and their patience.",
      poster:
        "https://www.themoviedb.org/t/p/w220_and_h330_face/6kbAMLteGO8yyewYau6bJ683sw7.jpg",
      rating: `7.8/10`
    },
    {
      title: "The Good Doctor",
      summary:
        "A young surgeon with Savant syndrome is recruited into the surgical unit of a prestigious hospital. The question will arise: can a person who doesn't have the ability to relate to people actually save their lives",
      poster:
        "https://www.themoviedb.org/t/p/w220_and_h330_face/6tfT03sGp9k4c0J3dypjrI8TSAI.jpg",
      rating: `8.6/10`
    },
    {
      title: "The Flash",
      summary:
        "After a particle accelerator causes a freak storm, CSI Investigator Barry Allen is struck by lightning and falls into a coma. Months later he awakens with the power of super speed, granting him the ability to move through Central City like an unseen guardian angel. Barry is literally the fastest man alive, but it won't be long before the world learns what Barry Allen has become...The Flash.",
      poster:
        "https://www.themoviedb.org/t/p/w220_and_h330_face/lJA2RCMfsWoskqlQhXPSLFQGXEJ.jpg",
      rating: `7.7/10`
    },
    {
      title: "Game of Thrones ",
      summary:
        "Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and icy horrors beyond.",
      poster:
        "https://www.themoviedb.org/t/p/w220_and_h330_face/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg",
      rating: `8.4/10`
    },
    {
      title: "The Mandalorian ",
      summary:
        "After the fall of the Galactic Empire, lawlessness has spread throughout the galaxy. A lone gunfighter makes his way through the outer reaches, earning his keep as a bounty hunter.",
      poster:
        "https://www.themoviedb.org/t/p/w220_and_h330_face/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg",
      rating: `8.5/10`
    },
    {
      title: "The Simpsons",
      summary:
        "Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie, as well as a virtual cast of thousands. Since the beginning, the series has been a pop culture icon, attracting hundreds of celebrities to guest star. The show has also made name for itself in its fearless satirical take on politics, media and American life in general.",
      poster:
        "https://www.themoviedb.org/t/p/w220_and_h330_face/2IWouZK4gkgHhJa3oyYuSWfSqbG.jpg",
      rating: `7.8/10`
    }
  ],
  Movies: [
    {
      title: "Godzilla vs. Kong",
      summary:
        "In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.",
      poster:
        "https://www.themoviedb.org/t/p/w220_and_h330_face/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg",
      rating: `8.4/10`
    },
    {
      title: "The Godfather",
      summary:
        "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
      poster:
        "https://www.themoviedb.org/t/p/w220_and_h330_face/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
      rating: `8.7/10`
    },
    {
      title: "Wonder Woman 1984 ",
      summary:
        "A botched store robbery places Wonder Woman in a global battle against a powerful and mysterious ancient force that puts her powers in jeopardy.",
      poster:
        "https://www.themoviedb.org/t/p/w220_and_h330_face/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg",
      rating: `6.8/10`
    }
  ],

  Anime: [
    {
      title: "Invincible",
      summary:
        "Mark Grayson is a normal teenager except for the fact that his father is the most powerful superhero on the planet. Shortly after his seventeenth birthday, Mark begins to develop powers of his own and enters into his father’s tutelage.",
      poster:
        "https://www.themoviedb.org/t/p/w220_and_h330_face/yDWJYRAwMNKbIYT8ZB33qy84uzO.jpg",
      rating: `8.9/10`
    },
    {
      title: "Demon Slayer: Kimetsu no Yaiba",
      summary:
        "It is the Taishō period in Japan. Tanjirō, a kindhearted boy who sells charcoal for a living, finds his family slaughtered by a demon. To make matters worse, his younger sister Nezuko, the sole survivor, has been transformed into a demon herself. Though devastated by this grim reality, Tanjirō resolves to become a “demon slayer” so that he can turn his sister back into a human, and kill the demon that massacred his family.",
      poster:
        "https://www.themoviedb.org/t/p/w220_and_h330_face/wrCVHdkBlBWdJUZPvnJWcBRuhSY.jpg",
      rating: `8.9/10`
    },
    {
      title: "Naruto Shippūden",
      summary:
        "Naruto Shippuuden is the continuation of the original animated TV series Naruto.The story revolves around an older and slightly more matured Uzumaki Naruto and his quest to save his friend Uchiha Sasuke from the grips of the snake-like Shinobi, Orochimaru. After 2 and a half years Naruto finally returns to his village of Konoha, and sets about putting his ambitions to work, though it will not be easy, as He has amassed a few (more dangerous) enemies, in the likes of the shinobi organization; Akatsuki.",
      poster:
        "https://www.themoviedb.org/t/p/w220_and_h330_face/zAYRe2bJxpWTVrwwmBc00VFkAf4.jpg",
      rating: `8.6/10`
    }
  ]
};

const GENRES = Object.keys(MOVIES_DATA);

function App() {
  const [movies, setMovies] = useState(MOVIES_DATA.TVShows);

  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="ctr">Premier Shows 🎬</h1>
          <p style={{ textAlign: "center" }}>
            Select a Category to find the best shows.
          </p>
        </header>
        {
          <div className="btns">
            {GENRES.map((item) => {
              return (
                <button
                  onClick={(e) => {
                    setMovies(MOVIES_DATA[item]);
                  }}
                >
                  {item}
                </button>
              );
            })}
          </div>
        }

        <section className="movies-list">
          {movies.map((movie) => {
            return <MovieTile movie={movie} key={movie.title} />;
          })}
        </section>
      </div>
    </div>
  );
}

const Tab = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>;
};

const MovieTile = ({ movie }) => {
  const { title, poster, summary, rating } = movie;
  return (
    <div className="styl">
      <img alt={title} className="poster" src={poster} />
      <div>
        <h3>{title}</h3>
        <p>{summary}</p>
        <h2>{rating}</h2>
      </div>
    </div>
  );
};

export default App;
