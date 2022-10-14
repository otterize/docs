// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/oceanicNext');
const darkCodeTheme = require('prism-react-renderer/themes/oceanicNext');

// /** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Otterize',
    url: 'https://docs.otterize.com',
    baseUrl: '/',
    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.svg',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'otterize', // Usually your GitHub org/user name.
    projectName: 'docs', // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },
    plugins: [
        [
            'docusaurus-plugin-includes',
            {},
        ],
        [
            'docusaurus-plugin-hotjar',
            {}
        ],
        [
            '@docusaurus/plugin-google-gtag',
            {
                trackingID: 'G-2EG876ZREF',
                anonymizeIP: false,
            },
        ]
    ],
    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    routeBasePath: '/',
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/otterize/docs/edit/main/',
                },
                blog: false,
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            announcementBar: {
                id: 'support_us',
                content:
                    //'<script>document.getElementsByClassName("announcementBar_node_modules-@docusaurus-theme-classic-lib-theme-AnnouncementBar-styles-module")[0].style.height = 0;debugger</script>' +
                    '<link rel="stylesheet" href="build/_assets/banner.css">' +
                    '<link rel="stylesheet" href="build/_assets/tailwind-66SK735S.css">' +
                    '<link rel="stylesheet" href="build/_assets/global-L7YORHY5.css">' +
                    '<link rel="stylesheet" href="/build/_assets/atom-one-light-U6ILR3FW.css">' +
                    '<link rel="stylesheet" href="/build/_assets/atom-one-light-U6ILR3FW.css">' +
                    '<header class="fixed z-50 flex w-full items-center justify-between border-b border-gray-300 bg-white transition duration-300 ease-in-out md:border-b-0 lg:px-16 2xl:px-32"><nav class="relative w-full"><div class="flex w-full items-center justify-between py-3 px-4 font-semibold md:py-6 lg:px-20"><a href="/"><img src="/img/logo.svg" class="h-8" alt="Otterize Logo"></a><div class="-my-2 -mr-2 xl:hidden"><button class="inline-flex items-center justify-center rounded-md focus:outline-none" id="headlessui-disclosure-button-:Ra:" type="button" aria-expanded="false"><span class="sr-only">Open<!-- --> menu</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="w-8"><path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16"></path></svg></button></div><div class="hidden items-center justify-between space-x-2 lg:space-x-8 xl:flex"><a class="undefined\n' +
                    '         hover:text-otterize-gray-600" id="headlessui-disclosure-button-:Ra:" aria-expanded="false" href="https://web.otterize.com/open-source" style="font-family:Inter;text-decoration:none;font-weight:600;font-size:16px;">Open source</a><a class="undefined\n' +
                    '         hover:text-otterize-gray-600" id="headlessui-disclosure-button-:Ra:" aria-expanded="false" href="https://web.otterize.com/product" style="font-family:Inter;text-decoration:none;font-weight:600;font-size:16px;">Product</a><a class="undefined\n' +
                    '         hover:text-otterize-gray-600" id="headlessui-disclosure-button-:Ra:" aria-expanded="false" href="https://web.otterize.com/IBAC" style="font-family:Inter;text-decoration:none;font-weight:600;font-size:16px;">IBAC</a>' +
                    '         <a href="/" rel="noreferrer" class="hover:text-otterize-gray-600"  style="color:rgb(129,174,217);font-family:Inter;text-decoration:none;font-weight:600;font-size:16px;">Docs</a><a class="undefined\n' +
                    '         hover:text-otterize-gray-600" id="headlessui-disclosure-button-:Ra:" aria-expanded="false" href="https://web.otterize.com/pricing" style="font-family:Inter;text-decoration:none;font-weight:600;font-size:16px;">Pricing</a><a class="undefined\n' +
                    '         hover:text-otterize-gray-600" id="headlessui-disclosure-button-:Ra:" aria-expanded="false" href="https://web.otterize.com/team" style="font-family:Inter;text-decoration:none;font-weight:600;font-size:16px;">Team</a><a class="undefined\n' +
                    '         hover:text-otterize-gray-600" id="headlessui-disclosure-button-:Ra:" aria-expanded="false" href="https://web.otterize.com/blog" style="font-family:Inter;text-decoration:none;font-weight:600;font-size:16px;">Blog</a></div>' +
                    '         <div class="hidden items-center space-x-2 md:flex lg:space-x-5"><a href="https://github.com/otterize" target="_blank" rel="noreferrer"><img src="/build/_assets/github-round-logo-SPDASYZL.svg" alt="GitHub Round Icon" class="w-9"></a>' +
                    '         <a href="https://otterizeusers.slack.com" target="_blank" rel="noreferrer"><img src="/build/_assets/slack-logo-no-border-GHYHVT3A.svg" alt="Slack Round Icon" class="w-9"></a>' +
                    '         ' +
                    '         </div></div></nav></header>',
                backgroundColor: '#fafbfc',
                textColor: '#091E42',
                isCloseable: false,
            },
            algolia: {
                apiKey: '0f80eacea40a917650f73d6eee3e9bb3',
                indexName: 'otterize',
                appId: '69PZ47MO2R',
                algoliaOptions: {}
            },
            hotjar: {
                applicationId: '3152141',
            },
            navbar: {
                // logo: {
                //     alt: 'Otterize',
                //     src: 'img/otterize-logo-dark.svg',
                //     srcDark: 'img/otterize-logo-light.svg',
                // },
                items: [
                    // {
                    //     type: 'custom-myAwesomeNavbarItem',
                    //     position: "left",
                    //     itemProp: 44,
                    //     anotherProp: "xyz"
                    // },
                    // {
                    //     type: 'doc',
                    //     docId: 'getting-started/README',
                    //     position: 'left',
                    //     label: 'Documentation',
                    // },
                    // {
                    //     href: 'https://github.com/otterize',
                    //     label: 'GitHub',
                    //     position: 'right',
                    // },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Docs',
                        items: [
                            {
                                label: 'Tutorial',
                                to: '/docs/intro',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Join us on Slack',
                                href: '...',
                            },
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'Otterize',
                                to: 'https://otterize.com',
                            },
                            {
                                label: 'Blog',
                                to: 'https://otterize.com/blog',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/otterize',
                            },
                        ],
                    },
                ],
                copyright: `Built with Docusaurus`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
            colorMode: {
                defaultMode: 'light',
                disableSwitch: true,
                respectPrefersColorScheme: false,
            },
        }),
};

module.exports = config;
