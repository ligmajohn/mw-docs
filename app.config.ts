export default defineAppConfig({
  docus: {
    title: 'movie-web',
    description:
      'movie-web is a free and open source streaming site, no ads, no tracking, no nonsense.',
    url: 'https://docs.movie-web.app',
    image: '/cover.png',
    socials: {
      github: 'movie-web/movie-web',
    },
    github: {
      repo: 'docs',
      owner: 'movie-web',
      branch: 'master',
      dir: 'content',
      edit: true,
    },
    aside: {
      level: 0,
      exclude: [],
    },
    header: {
      logo: true,
    },
    footer: {
      credits: {
        icon: '',
        text: 'Made with 💜',
        href: 'https://github.com/movie-web',
      },
      textLinks: [
        {
          text: 'movie-web',
          href: 'https://movie-web.app',
          target: '_blank',
          rel: 'noopener',
        },
      ],
    },
  },
});
