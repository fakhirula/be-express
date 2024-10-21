const movies = [
  {
    "id": 1,
    "judul": "Spirited Away",
    "genre": "Adventure",
    "tahun_rilis": 2001,
    "sinopsis": "Sebuah petualangan magis tentang seorang gadis muda yang tersesat di dunia roh."
  },
  {
    "id": 2,
    "judul": "Your Name",
    "genre": "Fantasy",
    "tahun_rilis": 2016,
    "sinopsis": "Dua orang asing yang bertukar tubuh secara misterius berusaha untuk kembali ke kehidupan mereka semula."
  },
  {
    "id": 3,
    "judul": "Howl's Moving Castle",
    "genre": "Romance",
    "tahun_rilis": 2004,
    "sinopsis": "Seorang penyihir muda yang dikutuk menjadi seorang wanita tua mencari cara untuk memulihkan bentuk aslinya."
  },
  {
    "id": 4,
    "judul": "Princess Mononoke",
    "genre": "Adventure",
    "tahun_rilis": 1997,
    "sinopsis": "Seorang pangeran muda yang terluka terjebak dalam konflik antara manusia dan dewa hutan."
  },
  {
    "id": 5,
    "judul": "My Neighbor Totoro",
    "genre": "Fantasy",
    "tahun_rilis": 1988,
    "sinopsis": "Dua saudara perempuan pindah ke pedesaan dan menemukan makhluk hutan yang ajaib."
  },
  {
    "id": 6,
    "judul": "Kimi no Na wa.",
    "judul_romaji": "Your Name",
    "genre": "Romance",
    "tahun_rilis": 2016,
    "sinopsis": "Dua orang asing yang bertukar tubuh secara misterius berusaha untuk kembali ke kehidupan mereka semula."
  },
  {
    "id": 7,
    "judul": "Demon Slayer: Kimetsu no Yaiba",
    "genre": "Action",
    "tahun_rilis": 2019,
    "sinopsis": "Seorang pemuda berjuang untuk menyelamatkan adik perempuannya yang berubah menjadi iblis."
  },
  {
    "id": 8,
    "judul": "Attack on Titan",
    "genre": "Action",
    "tahun_rilis": 2013,
    "sinopsis": "Manusia hidup di dalam kota yang dikelilingi oleh tembok raksasa untuk melindungi diri dari serangan Titan."
  },
  {
    "id": 9,
    "judul": "Violet Evergarden",
    "genre": "Drama",
    "tahun_rilis": 2018,
    "sinopsis": "Seorang mantan tentara yang kehilangan ingatannya berusaha untuk memahami arti cinta melalui pekerjaannya sebagai penulis surat."
  },
  {
    "id": 10,
    "judul": "Your Lie in April",
    "genre": "Drama",
    "tahun_rilis": 2014,
    "sinopsis": "Seorang pianis jenius yang kehilangan kemampuannya untuk bermain piano mencoba untuk menemukan kembali semangatnya."
  }
]


const getMovies = () => {
  return movies
}

const getMovie = (movieId) => {
  return movies.find((movie) => movie.id === movieId)
}


module.exports = {
  getMovie, getMovies
}