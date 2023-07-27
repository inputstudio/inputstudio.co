export default function () {
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
      name: t('navigation.home'),
      url: '/studio',
    },
    {
      name: t('navigation.projects'),
      url: '/projects',
    },
    {
      name: t('navigation.careers'),
      url: '/careers',
    },
    {
      name: t('navigation.contact'),
      url: '/contact',
    },
  ];

  return { pages, socials };
}
