const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '5dcf7f28a88be0edc01bbbde06f024ab',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;