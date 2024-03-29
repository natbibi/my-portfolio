const projectData = [
    {
        "id": 1,
        "name": "XOXO",
        "description": "A Gossip Girl inspired anonymous journaling mobile app with client and server integration where users can post entries of up to 300 characters and a GIPHY. Users can engage with the content using reactions and comments, and share posts.",
        "technologies": "html // css // javascript // express.js // giphy api // jest",
        "github": "https://github.com/natbibi/gossip-girl-xoxo",
        "netlify": "https://gossip-girl-xoxo.netlify.app/",
        "image": "https://user-images.githubusercontent.com/58271566/115692587-08336400-a357-11eb-942b-3774b904e0c7.gif",
        "alt": "a gif to show a short demo of xoxo app and the main features",
        "display": ""
    },
    {
        "id": 2,
        "name": "Habité",
        "description": "A habit tracker that allows users to register for their own account. They can easily login and record their progress for any habits they wish to track, mark habits as complete for the day, and see their most recent completion streaks.",
        "technologies": "html // css // javascript // postgres // jwt // bcrypt // express.js // jest",
        "github": "https://github.com/natbibi/habite",
        "netlify": "https://habite.netlify.app/",
        "image": "https://user-images.githubusercontent.com/58271566/114206025-cf58bf80-9952-11eb-9d02-2afd378417ab.png",
        "alt": "a screenshot to show an overview of Habité habit tracker's main features",
        "display": ""
    },
    {
        "id": 3,
        "name": "Belieber",
        "description": "A react website to discover all about Justin Bieber; including albums, bio, photos and song lyrics from an API. There is also a quiz where you can test your JB knowlege and see if you are a true fan!",
        "technologies": "react // react-bootstrap // lyrics.ovh api // html // css // javascript // jest // react testing library",
        "github": "https://github.com/natbibi/belieber",
        "netlify": "https://beliebers.netlify.app/",
        "image": "https://user-images.githubusercontent.com/58271566/115690469-fea8fc80-a354-11eb-9215-eaf38b98c5c0.png",
        "alt": "a screenshot to show an overview of Justin Bieber fanpage website",
        "display": ""
    },
    {
        "id": 4,
        "name": "Github Repo Finder",
        "description": "A minimalist react website to track any Github user's repos. A search will return all of a Github user's repos with info on each repo's forks, stargazers (favourites) and number of open issues. For each repo, a link to each repo's collaborators will open up on new page.",
        "technologies": "react // html // css // js // github api //jest // react testing library",
        "github": "https://github.com/natbibi/challenge-github",
        "netlify": "https://better-github.netlify.app/",
        "image": "https://user-images.githubusercontent.com/58271566/115594211-63207900-a2cd-11eb-9fd1-1efa2070d8d9.gif",
        "alt": "a gif to show a short demo of how github repo finder works",
        "display": ""
    },
    {
        "id": 5,
        "name": "Let's Get Quizzical",
        "description": "An online quiz game built in react with redux. A host can create a game which others can join (max 4 players). Users can choose how many questions, difficulty and the topic, fetching from OpenTrivia API. A winner is declared at the end of every game and scores are stored in a mongoDB database.",
        "technologies": "react // redux // socket.io // mongodb // html // css // js // express.js // opentrivia api // jest // react testing library",
        "github": "https://github.com/natbibi/quizzical",
        "netlify": "https://letsgetquizzical.netlify.app/",
        "image": "https://user-images.githubusercontent.com/58271566/116745868-a24c7980-a9f3-11eb-8030-166b0d5532d3.gif",
        "alt": "a gif to show a short demo of how quizzical works",
        "display": ""
    },
    {
        "id": 6,
        "name": "Lenny Kravitz",
        "description": "A Lenny Kravitz fan page built in fullstack with react on the client, flask on the server and is connected to an email service using flask-mail. Users can join the mailing list, view all albums and suggest a name and release date for a new album. Subscribers will receive a welcome email and updates of new albums.",
        "technologies": "react // flask // flask-mail // html // css // js // python // pytest // jest // react testing library",
        "github": "https://github.com/natbibi/lennykravitz",
        "netlify": "null",
        "image": "https://user-images.githubusercontent.com/58271566/118308160-8b258580-b4e3-11eb-900a-9bd4d3afaa81.gif",
        "alt": "Lenny Kravitz fan page demo",
        "display": "none"
    },
    {
        "id": 7,
        "name": "JobbaHunt",
        "description": "JobbaHunt is a job search application built in full stack with react, django REST framework, and is connected to PostgreSQL database and AWS. Users can create an account, search jobs on Reed API, save jobs, update progress of job applications. Interactions with the app allows the user to collect points that can be exchanged for rewards.",
        "technologies": "react // django // django rest framework // postgres // jwt // aws // html // css // js // python // reed api // jest // react testing library",
        "github": "https://github.com/natbibi/jobbahunt",
        "netlify": "http://jobbahunt.netlify.app/",
        "image": "https://user-images.githubusercontent.com/58271566/119194826-96485a80-ba7b-11eb-9fef-efdb83e4b007.gif",
        "alt": "jobbahunt job search app demo",
        "display": ""
    },
    {
        "id": 8,
        "name": "Popcorn",
        "description": "Popcorn is a social media app for movies and tv shows using the MERNG stack. Users can create posts and have discussions related to tv series and movies, see list of top trending hashtags, search for something to watch, and add to a watchlist. 🥇Popcorn is a winning project for Hashnode's Auth0 Hackathon 🥇",
        "technologies": "apollo-client // graphql // apollo-server // react // mongodb // express.js // auth0 // semantic-ui // themoviedb api",
        "github": "https://github.com/natbibi/popcorn/",
        "netlify": "https://nat-popcorn.netlify.app/",
        "image": "https://user-images.githubusercontent.com/58271566/132389231-923a8591-6d48-4d00-8d2a-2ae0374d93ee.gif",
        "alt": "popcorn social media app demo",
        "display": ""
    },
    {
        "id": 9,
        "name": "Species Reintroduction",
        "description": "The app is a directory to search for animals that have been reintroduced to the wild. It is a full-stack app with React on the front-end connecting to Google Maps JavaScript API, and Java11, Spring and Gradle on the back-end.",
        "technologies": "react // google-maps-api // material-ui // axios // java11 // springboot // gradle // cucumber",
        "github": "https://github.com/natbibi/species-reintroduction",
        "netlify": "null",
        "image": "https://user-images.githubusercontent.com/58271566/186718237-649c014a-ad9e-4c95-bb52-4624d419c733.png",
        "alt": "species introduction app landing",
        "display": "none"
    },

];

export default projectData;