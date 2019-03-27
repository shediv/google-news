module.exports = {
    ports: [5000],
    newsAPI: "https://newsapi.org/v2/top-headlines",
    newsAPIKey: "b716b542cff64c48a68f946325d45fd3",
    newsPageSize: 5,
    //format: 'https://newsapi.org/v2/top-headlines?country='+$scope.countryCode+'&pageSize=5&apiKey=b716b542cff64c48a68f946325d45fd3';

    diffBotAPI: "https://api.diffbot.com/v3/article",
    diffBotAPIToken: "8838f4cab8cb03773198988f371eb5a2",
    //format: 'https://api.diffbot.com/v3/article?token=8838f4cab8cb03773198988f371eb5a2&url='+ url;

    deepaiAPI: "https://api.deepai.org/api/summarization",
    deepaiAPIKey: "2f48bcb7-ae37-4ba8-9b3c-ed2bad081c93",
    //format: 'https://api.diffbot.com/v3/article?token=8838f4cab8cb03773198988f371eb5a2&url='+ url;

    dataLimit: "50mb",
    envDevelopment: "development",

    herokuURL: "https://trending-news-v.herokuapp.com",
    serverURL: "http://13.250.77.198:5000",
    localURL: "http://localhost:5000"
};