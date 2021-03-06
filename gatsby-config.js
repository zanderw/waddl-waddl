module.exports = {
    siteMetadata: {
        title: 'Waddl',
        description: 'Endurance resources gifted by the most generous community of athletes',
        keywords: 'Endurance, Marathons, Ultra, Races, Athlete, Triathlon, Resources'
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-styled-components',
        'gatsby-plugin-nprogress',
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                precision: 8,
            },
        },
        {
            resolve: `gatsby-plugin-nprogress`,
            options: {
                color: `#2D7FF9`,
                trickle: false,
                showSpinner: false
            },
        },
    ],
};
