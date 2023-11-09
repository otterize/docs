// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/oceanicNext");
const darkCodeTheme = require("prism-react-renderer/themes/oceanicNext");
const path = require("path");

const platformLinks = `
<div class="tw-self-stretch tw-h-20 tw-flex-col tw-justify-start tw-items-start tw-flex tw-text-left">
  <div class="tw-self-stretch tw-py-2 tw-justify-start tw-items-start tw-inline-flex">
    <a href="https://www.otterize.com/open-source" class="tw-grow tw-shrink tw-basis-0 tw-text-sky-950 tw-text-base tw-font-medium tw-font-sans tw-leading-normal !tw-no-underline">Open Source</a>
  </div>
  <div class="tw-self-stretch tw-py-2 tw-justify-start tw-items-start tw-inline-flex">
    <a  href="https://www.otterize.com/cloud" class="tw-grow tw-shrink tw-basis-0 tw-text-sky-950 tw-text-base tw-font-medium tw-font-sans tw-leading-normal !tw-no-underline">Otterize Cloud</a>
  </div>
</div>
`


const resourcesLinks = `
<div class="tw-self-stretch tw-h-40 tw-flex-col tw-justify-start tw-items-start tw-flex tw-text-left">
  <div class="tw-self-stretch tw-py-2 tw-justify-start tw-items-start tw-inline-flex">
    <a href="/" class="tw-grow tw-shrink tw-basis-0 tw-text-sky-950 tw-text-base tw-font-medium tw-font-sans tw-leading-normal tw-cursor-pointer !tw-no-underline">Documentation</a>
  </div>
  <div class="tw-self-stretch tw-py-2 tw-justify-start tw-items-start tw-inline-flex">
    <a href="https://www.otterize.com/resources" class="tw-grow tw-shrink tw-basis-0 tw-text-sky-950 tw-text-base tw-font-medium tw-font-sans tw-leading-normal tw-cursor-pointer !tw-no-underline">Resource Hub</a>
  </div>
  <div class="tw-self-stretch tw-py-2 tw-justify-start tw-items-start tw-inline-flex">
    <a href="https://www.otterize.com/team" class="tw-grow tw-shrink tw-basis-0 tw-text-sky-950 tw-text-base tw-font-medium tw-font-sans tw-leading-normal tw-cursor-pointer !tw-no-underline">About Us</a>
  </div>
  <div class="tw-self-stretch tw-py-2 tw-justify-start tw-items-start tw-inline-flex">
    <a href="https://www.otterize.com/pricing" class="tw-grow tw-shrink tw-basis-0 tw-text-sky-950 tw-text-base tw-font-medium tw-font-sans tw-leading-normal tw-cursor-pointer !tw-no-underline">Pricing</a>
  </div>
</div>
`


/** Components */

const footerSocialLinks = `
<a href="https://github.com/otterize?view_as=public">
  <img
  width='30'
  height='30'
  loading='lazy'
  src="img/footer/github.svg"
  alt="GitHub logo"
  className='w-5 h-5 relative'
  />
</a>
<a href="https://www.linkedin.com/company/otterize">
  <img
  width='30'
  height='30'
  loading='lazy'
  src="img/footer/linkedin.svg"
  alt="LinkedIn logo"
  className='w-5 h-5 relative'
  />
</a>
<a href="https://x.com/TheOtterize">
  <img
  width='30'
  height='30'
  loading='lazy'
  src="img/footer/x.svg"
  alt="X logo"
  className='w-5 h-5 relative'
  />
</a>
<a href="https://joinslack.otterize.com/">
  <img
  width='30'
  height='30'
  loading='lazy'
  src="img/footer/slack.svg"
  alt="Slack logo"
  className='w-5 h-5 relative'
  />
</a>
<a href="https://www.youtube.com/@the-otterize/featured">
  <img
  width='30'
  height='30'
  loading='lazy'
  src="img/footer/youtube.svg"
  alt="YouTube logo"
  className='w-5 h-5 relative'
  />
</a>
`

const getNavDropdownItem = ({label, icon, description}) => `
<div class="tw-flex tw-px-3 tw-items-start tw-gap-4 tw-self-stretch tw-rounded-xl">
<img class="tw-h-6" src="/img/menu/${icon}.svg"/>
<div class="tw-flex tw-flex-col tw-items-start tw-gap-2 tw-max-w-[270px] tw-pr-3">
  <div class="tw-text-gray-900 tw-font-semibold tw-text-base">${label}</div>
  <p class="tw-text-gray-600 tw-whitespace-pre-wrap	tw-w-[225px] tw-mb-0">${description}</p>
</div>
</div>
`
/** Components - End */


// /** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Otterize",
  url: process.env.NODE_ENV === "production" ? "https://docs.otterize.com" : "http://localhost:3003/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  favicon: "img/favicon.svg",
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "otterize", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  scripts: [
    { src: "/newsLetterSubscription.js", async: true },
    { src: "/pixels.js", async: true },
  ],
  plugins: [
    path.resolve(__dirname, 'plugins', 'verify-includes'),
    ['@docusaurus/plugin-client-redirects',
    {
      redirects: [
        {
          from: '/getting-started/oss-installation',
          to: '/installation',
        },
        {
          from: '/quick-tutorials/k8s-network-policies',
          to: '/quickstart/access-control/k8s-network-policies',
        },
        {
          from: '/quick-tutorials/k8s-istio-authorization-policies',
          to: '/quickstart/access-control/k8s-istio-authorization-policies',
        },
        {
          from: '/quick-tutorials/k8s-kafka-mtls',
          to: '/quickstart/access-control/k8s-kafka-mtls',
        },
        {
          from: '/quick-tutorials/aws-eks-cni-mini',
          to: '/quickstart/access-control/aws-eks-cni-mini',
        },
        {
          from: '/quick-tutorials/k8s-kafka-mtls-cert-manager',
          to: '/quickstart/access-control/k8s-kafka-mtls-cert-manager',
        },
        {
          from: '/quick-tutorials/k8s-network-mapper',
          to: '/quickstart/visualization/k8s-network-mapper',
        },
        {
          from: '/quick-tutorials/k8s-istio-watcher',
          to: '/quickstart/visualization/k8s-istio-watcher',
        },
        {
          from: '/quick-visual-tutorials/visual-ibac-istio-authorization-policies',
          to: '/quickstart/access-control/k8s-istio-authorization-policies',
        },
        {
          from: '/quick-visual-tutorials/visual-ibac-kafka-k8s',
          to: '/quickstart/access-control/k8s-kafka-mtls',
        },
        {
          from: '/quick-visual-tutorials/visual-ibac-network-policies',
          to: '/quickstart/access-control/k8s-network-policies',
        },
        {
          from: '/quick-visual-tutorials/visual-k8s-cluster-mapping',
          to: '/quickstart/visualization/k8s-network-mapper',
        },
        // Redirect from multiple old paths to the new path
        // {
        //   to: '/docs/newDoc2',
        //   from: ['/docs/oldDocFrom2019', '/docs/legacyDocFrom2016'],
        // },
      ],
    }],
    ["docusaurus-plugin-includes", {}],
    [
      "@docusaurus/plugin-google-gtag",
      {
        trackingID: "G-2EG876ZREF",
        anonymizeIP: false,
      },
    ],
  ],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/otterize/docs/edit/main/",
        },
        blog: false,
        theme: {
          customCss: [require.resolve("./src/css/custom.css"), require.resolve('./src/css/tailwind.css')],
        },
      }),
    ],

  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        apiKey: "0f80eacea40a917650f73d6eee3e9bb3",
        indexName: "otterize",
        appId: "69PZ47MO2R",
        algoliaOptions: {},
      },
      hotjar: {
        applicationId: "3156902",
      },
      navbar: {
        logo: {
          alt: "Otterize",
          src: "img/otterize-logo-light.svg",
          srcDark: "img/otterize-logo-light.svg",
          href: "https://otterize.com",
          target: "_self",
          style: { paddingLeft: "15px" },
        },
        items: [
          {
            type: "dropdown",
            position: "left",
            html: "<div class='tw-inline tw-font-normal tw-text-base'>Platform</div>",
            items: [
              {
                href: "https://otterize.com/open-source",
                target: "_self",
                html: getNavDropdownItem({label: 'Open Source', icon: "open-source-menu", description: "Explore, contribute, and strengthen security with Otterize OSS."})
              },
              {
                href: "https://otterize.com/cloud",
                target: "_self",
                html: getNavDropdownItem({label: 'Otterize Cloud', icon: "cloud-menu", description: "Secure your infrastructure, your way! Eliminate the need to struggle with network policies, Kafka ACLs, certificates, and IAM."}),
              }
            ],
          },
          {
            position: "left",
            target: "_self",
            href:'https://docs.otterize.com/',
            html: "<div class='tw-inline tw-font-normal tw-text-base'>Documentation</div>",
          },
          {
            position: "left",
            target: "_self",
            href:'https://docs.otterize.com/pricing',
            html: "<div class='tw-inline tw-font-normal tw-text-base'>Pricing</div>",
          },
          {
            type: "dropdown",
            position: "left",
            html: "<div class='tw-inline tw-font-normal tw-text-base'>Learn</div>",
            items: [
              {
                href: "https://otterize.com/blog",
                html: getNavDropdownItem({label: 'Blog', icon: "blog-menu", description: ""}),
                target: "_self",
              },
              {
                href: "https://otterize.com/team",
                html: getNavDropdownItem({label: 'Our Story', icon: "resources-menu", description: "Dive into our company’s mission, our philosophy, and the team that makes it all possible."}),
                target: "_self",
              },
            ],
          },
          {
            href: "https://app.otterize.com/",
            html: "<div className='tw-inline-flex tw-h-11 tw-w-24 tw-items-center tw-justify-center tw-gap-2 tw-rounded-lg tw-px-4 tw-py-2.5 tw-text-sm lg:tw-text-base tw-font-semibold tw-leading-normal tw-text-gray-600 tw-no-underline -tw-mr-10'>Log in</div>",
            position: "right",
          },
          {
            href: "https://app.otterize.com",
            html: "<button class='tw-cursor-pointer tw-inline-flex tw-items-center tw-justify-center tw-gap-2 tw-rounded-xl tw-bg-gradient-to-b tw-px-3 tw-py-2.5 tw-text-sm lg:tw-text-base tw-font-semibold tw-leading-normal tw-no-underline tw-shadow tw-font-sans -tw-mr-2 tw-from-indigo-500 tw-bg-indigo-500 tw-to-indigo-600 tw-h-11 tw-border-none  tw-text-white  tw-max-w-[190px] tw-w-fit'><img src='img/menu/cloud.svg' />Signup <span class='tw-hidden lg:tw-inline'>for free<span></button>",
            position: "right",
          },
          {
            href: "https://calendly.com/otterize-team/kubecon-na",
            html: "<div class='tw-cursor-pointer tw-font-sans tw-flex tw-items-center tw-rounded-xl tw-h-11 tw-border tw-border-solid tw-border-gray-300 tw-bg-white tw-px-3 tw-text-gray-900 tw-shadow tw-font-medium tw-text-sm lg:tw-text-base'><span class='tw-hidden lg:tw-inline'>Request a demo</span><span class='lg:tw-hidden'>Demo</span> <img class='tw-ml-2' src='img/menu/right-arrow.svg' /></div>",
            position: "right",
          },
        ],
      },
      footer: {
        links: [
          {
            html: `
                <div class="footer_left">
                  <div class="tw-w-96 tw-h-60 tw-flex-col tw-justify-start tw-items-start tw-gap-6 tw-inline-flex">
                    <div class="tw-w-36 tw-h-8 tw-justify-start tw-items-start tw-inline-flex">
                      <img class="tw-w-40 tw-h-16 tw-relative tw-rounded-lg" src="/img/logo.svg"/>
                    </div>
                    <div id="mailchimp_title" class="tw-w-96 tw-text-gray-700 tw-text-xl tw-font-normal tw-font-sans tw-text-left">Join our newsletter to stay up to date on features and releases.</div>
                    <div class="tw-h-28 tw-flex-col tw-justify-start tw-items-start tw-gap-1.5 tw-flex">
                      <div class="tw-self-stretch tw-h-14 tw-flex-col tw-justify-start tw-items-start tw-gap-1.5 tw-flex">
                        <form name="embedded-subscribe-form" id="mailchimp_form" class="tw-self-stretch tw-pl-3 tw-pr-1.5 tw-py-1.5 tw-bg-gray-200 tw-rounded-2xl tw-shadow tw-justify-start tw-items-center tw-gap-2 tw-inline-flex">
                          <input id="mailchimp_email_input" type="email" name="EMAIL" placeholder="Enter your email" required="" class="tw-w-full tw-text-gray-600 tw-text-base tw-font-normal tw-leading-normal tw-bg-gray-200 tw-border-none tw-h-12 tw-justify-start tw-items-center tw-gap-2 tw-flex tw-focus:outline-none tw-rounded-none tw-shadow-none tw-px-0 focus:tw-outline-none"/>
                          <button id="mailchimp_cta" type="submit" class="tw-w-auto tw-text-base tw-font-medium tw-leading-normal tw-px-6 tw-py-3 tw-rounded-xl tw-border tw-justify-center tw-items-center tw-gap-2 tw-flex tw:max-h-12 tw-text-white tw-cursor-pointer" style="background: linear-gradient(180deg, #635DFF 0%, #4D3DF7 100%), #7069FB;">Subscribe</button>
                        </form>
                      </div>
                      <div class="tw-text-left tw-self-stretch tw-text-gray-600 tw-text-sm tw-font-normal tw-font-sans tw-leading-tight tw-mt-1">By subscribing you agree to with our Privacy Policy and to receive updates from us.</div>
                    </div>
                  </div>
                </div>
                `,
          },
          {
            html: `<div class="footer_right tw-w-auto">
                    <div class="tw-w-full tw-h-60 tw-justify-start tw-items-start tw-inline-flex tw-gap-32">
                      <div class="tw-grow tw-shrink tw-basis-0 tw-flex-col tw-justify-start tw-items-start tw-gap-4 tw-inline-flex tw-w-[120px] tw-max-w-[240px]">
                        <div class="tw-self-stretch tw-text-gray-500 tw-text-sm tw-font-semibold tw-font-sans tw-uppercase tw-leading-none tw-tracking-widest tw-text-left">Platform</div>
                          ${platformLinks}
                      </div>
                      <div class="tw-grow tw-shrink tw-basis-0 tw-flex-col tw-justify-start tw-items-start tw-gap-4 tw-inline-flex tw-w-[120px] tw-max-w-[240px]">
                        <div class="tw-self-stretch tw-text-gray-500 tw-text-sm tw-font-semibold tw-font-sans tw-uppercase tw-leading-none tw-tracking-widest tw-text-left">resources</div>
                        ${resourcesLinks}
                      </div>
                      <div class="tw-grow tw-shrink tw-basis-0 tw-flex-col tw-justify-start tw-items-start tw-gap-4 tw-inline-flex tw-w-[120px] tw-max-w-[240px]">
                        <div class="tw-self-stretch tw-text-gray-500 tw-text-sm tw-font-semibold tw-font-sans tw-uppercase tw-leading-none tw-tracking-widest tw-text-left">Follow Us</div>
                        <ul class='tw-relative tw-z-10 tw-flex-col tw-justify-between tw-items-start tw-flex tw-gap-4 tw-w-full tw-mt-2 tw-text-left'>
                        ${footerSocialLinks}
                        </ul>
                      </div>
                    </div>
                  </div>`,
          },
          {
            html: `<div class="footer_copyright tw-w-full">
                    <img src="img/footer/cloud-native.svg" class="tw-mr-[2000px]" />
                    <div class="tw-w-full tw-h-14 tw-flex-col tw-justify-start tw-items-start tw-gap-8 tw-inline-flex">
                    <div class="tw-self-stretch tw-h-px tw-bg-gray-300"></div>
                    <div class="tw-self-stretch tw-justify-between tw-items-start tw-inline-flex">
                      <div class="tw-text-gray-500 tw-text-sm tw-font-normal tw-font-sans tw-leading-tight">© ${new Date().getFullYear()} Otterize. All rights reserved.</div>
                      <div class="tw-justify-start tw-items-start tw-gap-6 tw-flex">
                        <a href="https://status.otterize.com/" class="tw-text-gray-500 tw-text-sm tw-font-medium tw-font-sans tw-leading-tight !tw-no-underline">Service Status</a >
                        <a href="https://otterize.com/privacy" class="tw-text-gray-500 tw-text-sm tw-font-medium tw-font-sans tw-leading-tight !tw-no-underline">Privacy Policy</a >
                        <a href="https://otterize.com/terms" class="tw-text-gray-500 tw-text-sm tw-font-medium tw-font-sans tw-leading-tight !tw-no-underline">Terms of Service</a >
                        <a href="" class="tw-text-gray-500 tw-text-sm tw-font-medium tw-font-sans tw-leading-tight !tw-no-underline">Cookies Settings</a>
                      </div>
                    </div>
                  </div>
                </div>`,
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    }),
};

module.exports = config;
