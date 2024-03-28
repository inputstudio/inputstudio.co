export const useNav = () => {
  const { t } = useI18n();

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
      name: t('navigation.studio'),
      url: '/studio',
    },
    {
      name: t('navigation.blog'),
      url: 'https://inputstudio.co/blog',
      external: true,
    },
    {
      name: t('navigation.careers'),
      url: 'https://inputstudio.notion.site/Careers-a4866eda2bc54b00b0be6d94d2a3b19e',
      external: true,
    },
    {
      name: t('navigation.contact'),
      url: '/contact',
    },
  ];

  return { pages, socials };
};
