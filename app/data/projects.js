const data = [
    {
        title: 'Bulletin Board',
        subtitle: 'Bulletin Board application',
        link: 'https://bulletin-board-react.herokuapp.com/',
        img: '/images/projects/bulletin-board.png',
        git: 'https://github.com/vishalbedi/bulletin-board',
        date: '2018-6-20',
        desc: 'Built for understanding react components. '
            + 'The application can Add, Remove, and Edit Notes from the board. '
            + 'The notes are placed over a board in randamized order.'
    },
    {
        title: 'Activity Tracker',
        subtitle: 'Ski Activity Tracking application',
        link: 'https://activity-tracker-react.herokuapp.com',
        img: '/images/projects/activity-tracker.png',
        git: 'https://github.com/vishalbedi/activity-tracker',
        date: '2018-7-20',
        desc: 'Built for understanding react routing. '
            + 'The application is a simple Ski activity tracker. '
            + 'New activities can be logged and filtered.'
    },
    {
        title: 'Nautical Distance Calculator',
        subtitle: 'Nautical distance calculator between any two airports of USA',
        link: 'https://dist-calculator.herokuapp.com/',
        img: '/images/projects/dist-calculator.png',
        git: 'https://github.com/vishalbedi/dist-calculator',
        date: '2018-3-20',
        desc: 'A vanilla javascript implementation of nautical distance calculator between any two airports of USA. '
            + 'The airports can be searched using city name or airport name. '
            + 'The distance is calculated and displayed in nautical miles. This application was programmed to play '
            + `with Google Maps API for JavaScript.`
    },
    {
        title: 'SubGraph Matching by Postponing Cartesian Products using NEO4J Graph DB and Proteins dataset',
        subtitle: 'SubGraph Matching',
        link: 'https://docs.google.com/document/d/1ancDae5FRr7KJKv8YufLCCEHjxfLOVEDSd-bTYG-l0s/edit?usp=sharing',
        img: '/images/projects/neo4j.png',
        git: 'https://github.com/vishalbedi/neo4j.cpi',
        date: '2017-11-20',
        desc: 'Implemented the sub graph matching algorithm in paper Efficient Subgraph Matching by Postponing '
            + 'Cartesian Products by Fei Biy, Lijun Changy, Xuemin Liny, Lu Qinz, Wenjie Zhangy. '
            + 'The Proteins dataset was used for testing the implementation. The dataset was provided with ground truth '
            + 'files for sub-queries. Designed and implemented Compact Path-Index (CPI) using Neo4j along with root '
            + 'node selection described in Appendix A.6. '
            + 'Using the ground truth in Proteins, decomposed the different query graphs, computed CPIs for the '
            + 'decompositions, and provided a Java program that automatically checks if all the expected solutions are ' +
            'contained in the computed CPIs.'
    },
    {
        title: 'Cat Clicker',
        subtitle: 'Cat Clicker',
        link: 'https://cat-clicker-ng.herokuapp.com/',
        img: '/images/projects/cat-clicker.png',
        git: 'https://github.com/vishalbedi/cat-clicker',
        date: '2018-2-20',
        desc: 'Angular 4.0 based application to count the number of times a cat clicked. This application is created to '
            + 'have a hands on with Angular 4.0. The application fetches cats from cat-api and displays the images. '
    },
    {
        title: 'Connect-2',
        subtitle: 'Video Chat application useing WebRTC',
        link: 'https://connect2.herokuapp.com/#/home',
        img: '/images/projects/connect-2.png',
        git: 'https://github.com/vishalbedi/connect2',
        date: '2016-5-20',
        desc: 'WebRTC application for video chat across any device running chrome or firefox on it. '
            + 'The application uses free STUN and TURN server hosted by google. '
            + 'Can be used only in HTTPS mode as WebRTC requires SSL for operation. '
            + 'Two devices can start communicating by entering the same room number. '
    }
];

export default data;