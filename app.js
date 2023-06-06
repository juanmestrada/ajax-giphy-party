
const searchInput = $('#search-input');
const searchBtn = $('#search-btn');
const clearBtn = $('.clear-btn');
const library = $('#library');

function createGif(response){
    const res = response.data;

    if(res.length){
        let randomNum = Math.floor(Math.random() * res.length);

        let newImg = $("<img>", {
            class: "res-img",
            src: res[randomNum].images.original.url,
            alt: res[randomNum].slug
        });
    
        library.append(newImg);
    }

}

async function getGiphyInfo(string) {
    const response = await axios.get('http://api.giphy.com/v1/gifs/search', {params: {q: string, api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym'}});
    
    createGif(response.data);
}

$('form').on('submit', function(e){
    e.preventDefault();

    const q = searchInput.val();

    searchInput.val('');

    getGiphyInfo(q);
});

searchBtn.on('click', function(e){
    const q = searchInput.val();

    searchInput.val('');

    getGiphyInfo(q);
});

clearBtn.on('click', function(e){
    library.empty();
});