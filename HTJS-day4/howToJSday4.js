let api = 'http://www.omdbapi.com/?apikey=61e576a4&t='
let google1 = 'https://www.google.com/search?q='
let google2 = '&rlz=1C1CHBF_enIN1085IN1085&oq=avengers&gs_lcrp=EgZjaHJvbWUqBwgAEAAYjwIyBwgAEAAYjwIyDQgBEC4YgwEYsQMYgAQyCggCEC4YsQMYgAQyCggDEAAYsQMYgAQyCggEEC4YsQMYgAQyCggFEAAYsQMYgAQyDQgGEC4YgwEYsQMYgAQyCggHEAAYsQMYgAQyCggIEAAYsQMYgAQyCggJEC4YsQMYgATSAQk0MjY4ajBqMTWoAgCwAgA&sourceid=chrome&ie=UTF-8'


function searchMovie() {
	let query = document.getElementById('movieName').value;
	let search = api + query;
	fetch(search).then(function(data) {
		return data.json()
	}).then(function(data) {
		document.getElementById('title').innerText = data.Title;
		document.getElementById('desc').innerText = data.Plot;
		document.getElementById('genre').innerText = data.Genre;
		document.getElementById('actors').innerText = data.Actors;
		document.getElementById('directors').innerText = data.Director;
		document.getElementById('awards').innerText = data.Awards;
		document.getElementById('collection').innerText = data.BoxOffice;
		document.getElementById('ratings').innerText = data.imdbRating;
		document.getElementById('writers').innerText = data.Writer;
		document.getElementById('poster').src = data.Poster;
		document.getElementById('google').href = google1+data.Title+google2;
		console.log(google1+data.Title+google2)
	})
}