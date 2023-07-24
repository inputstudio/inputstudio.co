export default function () {
  const socials = [
    {
      title: 'Email',
      text: 'hello@inputstudio.co',
      url: 'mailto:hello@inputstudio.co',
      icon: 'mdi:email',
    },
    {
      title: 'Instagram',
      text: '@input.studio',
      url: 'https://instagram.com/input.studio',
      icon: 'mdi:instagram',
    },
    {
      title: 'LinkedIn',
      text: 'inputstudio',
      url: 'https://www.linkedin.com/company/inputstudio',
      icon: 'mdi:linkedin',
    },
    {
      title: 'GitHub',
      text: 'inputstudio',
      url: 'https://github.com/inputstudio',
      icon: 'mdi:github',
    },
  ];

  const pages = [
    {
      name: 'Studio',
      url: '/studio',
    },
    {
      name: 'Projets',
      url: '/projects',
    },
    {
      name: 'Carrières',
      url: '/careers',
    },
    {
      name: 'Nous contacter',
      url: '/contact',
    },
  ];

  return { pages, socials };
}
