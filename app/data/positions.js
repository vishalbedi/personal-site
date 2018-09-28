const positions = [
    {
        company: 'RIT',
        position: 'Research Assistant',
        link: 'https://www.rit.edu/programs/packaging-science-ms',
        daterange: 'January 2017 - Present',
        /*
        We built an in-house inexpensive sensor module that communicates with a C\# WPF based standalone application and an Angular SPA powered by LAMP.
         It logs the data and represent that data over a meaningful dashboard.
         The sensor module captures vibrations and shocks highlighting any mishandling of the package during transit.
        * */
        points: [
            'Created a web and desktop based monitoring application that provides insight to customers about packages in transit.',
            'Developed comprehensive modules that display state of packages in well informed Graphs.',
            'WPF and C# power the desktop application and the web application is a Angular SPA powered by LAMP',
            'Vibration, Shock, Pressure, Temperature, Light, Humidity are the physical parameters that are monitored by the application.',
        ],
    }, {
        company: 'Chess Health',
        position: 'Software Engineer Intern ',
        link: 'https://www.chess.health/',
        daterange: 'July 2016 - December 2016',
        points: [
            'Contributed to enhancement and development of A-Chess platform by adding RESTful APIs that provide statistics about patient health.',
            'Built dashboards to visualize patient health information using Angular and D3.',
            'Worked on the Android platform adding features like medication reminder, management of appointments with ' +
            'caregiver, tracking sobriety by use of geo-location services, streamlining the individual and group chat feature.'
        ],
    }, {
        company: 'VoiceReach (NexSales)',
        position: 'Software Engineer',
        link: 'https://www.voicereach.us',
        daterange: 'August 2014 - July 2015',
        points: [
            'Co-developed the first version of cloud based agent assisted dialer platform with real-time CRM integration  ' +
            'using technologies like WebRTC, web-sockets and stateless RESTful node based API.',
            'Added real-time data integration with Salesforce using the Salesforce-API.',
            'Wrote scripts to find memory leaks in the web-application that caused unexpected server crashes and fixed' +
            ' it by migrating from restify to express, reducing memory footprint by 80%'
        ],
    }, {
        company: 'CitiusTech',
        position: 'Software Engineer',
        link: 'https://www.citiustech.com/',
        daterange: 'October 2011 - July 2014',
        points: [
            'Co-developed a native JavaScript SPA to display and manipulate DICOM images, which was later converted into' +
            ' a product for leading health-care company. The application was migrated into Knockout and later into Angular.',
            'Co-developed the imaging pipeline, caching framework, and annotation work-flow.',
            'Invested actively in fixing memory leaks and supporting browsers that lacked HTML5 features like web-sockets and WebGL.',
        ]
    }
];

export default positions;