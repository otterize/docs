// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/oceanicNext");
const darkCodeTheme = require("prism-react-renderer/themes/oceanicNext");
const path = require("path");

const platformLinks = `
<div class="tw-self-stretch tw-h-20 tw-flex-col tw-justify-start tw-items-start tw-flex tw-text-left">
    <div class="tw-self-stretch tw-py-2 tw-justify-start tw-items-start tw-inline-flex">
    <a href="/" class="tw-grow tw-shrink tw-basis-0 tw-text-sky-950 tw-text-base tw-font-medium tw-font-sans tw-leading-normal tw-cursor-pointer !tw-no-underline">Documentation</a>
  </div>
</div>
`


const resourcesLinks = `
<div class="tw-self-stretch tw-h-40 tw-flex-col tw-justify-start tw-items-start tw-flex tw-text-left">
  <div class="tw-self-stretch tw-py-2 tw-justify-start tw-items-start tw-inline-flex">
    <a href="https://www.otterize.com/resources" class="tw-grow tw-shrink tw-basis-0 tw-text-sky-950 tw-text-base tw-font-medium tw-font-sans tw-leading-normal tw-cursor-pointer !tw-no-underline">Blog</a>
  </div>
  <div class="tw-self-stretch tw-py-2 tw-justify-start tw-items-start tw-inline-flex">
    <a href="https://www.otterize.com/team" class="tw-grow tw-shrink tw-basis-0 tw-text-sky-950 tw-text-base tw-font-medium tw-font-sans tw-leading-normal tw-cursor-pointer !tw-no-underline">About us</a>
  </div>
</div>
`


/** Components */

const footerSocialLinks = `
<a href="https://github.com/otterize">
  <img
  width='30'
  height='30'
  loading='lazy'
  src="/img/footer/github.svg"
  alt="GitHub logo"
  className='w-5 h-5 relative'
  />
</a>
<a href="https://www.linkedin.com/company/otterize">
  <img
  width='30'
  height='30'
  loading='lazy'
  src="/img/footer/linkedin.svg"
  alt="LinkedIn logo"
  className='w-5 h-5 relative'
  />
</a>
<a href="https://x.com/TheOtterize">
  <img
  width='30'
  height='30'
  loading='lazy'
  src="/img/footer/x.svg"
  alt="X logo"
  className='w-5 h-5 relative'
  />
</a>
<a href="https://joinslack.otterize.com/">
  <img
  width='30'
  height='30'
  loading='lazy'
  src="/img/footer/slack.svg"
  alt="Slack logo"
  className='w-5 h-5 relative'
  />
</a>
<a href="https://www.youtube.com/@OtterizeOfficial">
  <img
  width='30'
  height='30'
  loading='lazy'
  src="/img/footer/youtube.svg"
  alt="YouTube logo"
  className='w-5 h-5 relative'
  />
</a>
`

const getNavDropdownItem = ({label, icon, description}) => `
<div class="tw-flex tw-px-3 tw-items-start tw-gap-4 tw-self-stretch tw-rounded-xl">
<img class="tw-h-6" src="/img/menu/${icon}.svg"/>
<div class="tw-flex tw-flex-col tw-items-start tw-gap-2 lg:tw-max-w-[270px] tw-pr-3">
  <div class="tw-text-gray-900 tw-font-semibold tw-text-base">${label}</div>
  <p class="tw-text-gray-600 tw-whitespace-pre-wrap	tw-min-w-[225px] tw-mb-0">${description}</p>
</div>
</div>
`

const dropdownChevron = `<div class='tw-flex'><img src='/img/menu/chevron-down.svg' class='group-hover:tw-hidden'/><img src='/img/menu/chevron-up.svg' class='tw-hidden group-hover:tw-block'/></div>`
/** Components - End */


// /** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Otterize",
  url: process.env.NODE_ENV === "production" ? "https://docs.otterize.com" : "http://localhost:3003/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  // onBrokenAnchors: "throw",
  onBrokenMarkdownLinks: "throw",
  favicon: "img/favicon.svg",
  trailingSlash: false,
  onDuplicateRoutes: "throw",

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
    { src: "/ui.js", async: true },
    { src: "/pixels.js", async: true },
    { src: "https://app.otterize.com/static/hs.js", async: true }
  ],
  plugins: [
    path.resolve(__dirname, 'plugins', 'verify-includes'),
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
            position: "left",
            target: "_self",
            href:'https://docs.otterize.com/',
            html: "<div class='tw-inline tw-font-normal tw-text-base'>Documentation</div>",
          },
          {
            position: "left",
            target: "_self",
            href:'https://otterize.com/resources?categories=Lab&page=1&search=',
            html: "<div class='tw-inline tw-font-normal tw-text-base'>Labs</div>",
          },
          {
            position: "left",
            target: "_self",
            href:'https://www.otterize.com/resources',
            html: "<div class='tw-inline tw-font-normal tw-text-base'>Blog</div>",
          },
          {
            href: "https://app.otterize.com",
            html: "<button class='tw-cursor-pointer tw-inline-flex tw-items-center tw-justify-center tw-gap-2 tw-rounded-xl tw-bg-gradient-to-b tw-px-3 tw-py-2.5 tw-text-sm lg:tw-text-base tw-font-semibold tw-leading-normal tw-no-underline tw-shadow tw-font-sans -tw-mr-2 tw-from-indigo-500 tw-bg-indigo-500 tw-to-indigo-600 tw-h-11 tw-border-none  tw-text-white tw-w-full'><img src='/img/menu/cloud.svg' />Log in<span></button>",
            position: "right",
          },
          {
            href: "mailto:support@otterize.com",
            html: "<div class='tw-cursor-pointer tw-font-sans tw-flex tw-items-center tw-rounded-xl tw-h-11 tw-border tw-border-solid tw-border-gray-300 tw-bg-white tw-px-3 tw-text-gray-900 tw-shadow tw-font-medium tw-text-sm lg:tw-text-base tw-w-full tw-justify-center'><span id='request-demo-full-text'>Contact us</span><span id='request-demo-partial-text'>Demo</span><img class='tw-ml-2' src='/img/menu/right-arrow.svg' /></div>",
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
                        <form name="embedded-subscribe-form" id="mailchimp_form" class="tw-self-stretch tw-pl-3 tw-pr-1.5 tw-py-1.5 tw-bg-gray-50 tw-rounded-2xl tw-shadow tw-justify-start tw-items-center tw-gap-2 tw-inline-flex">
                          <input id="mailchimp_email_input" type="email" name="EMAIL" placeholder="Enter your email" required="" class="tw-w-full tw-text-gray-600 tw-text-base tw-font-normal tw-leading-normal tw-bg-gray-50 tw-border-none tw-h-12 tw-justify-start tw-items-center tw-gap-2 tw-flex tw-focus:outline-none tw-rounded-none tw-shadow-none tw-px-0 focus:tw-outline-none"/>
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
                    <div style="display:flex;">
                      <img src="/img/footer/cloud-native.svg" style="margin-right:20px;"/>
                      <a href="https://otterize.com/soc2-request" target="_blank" style="height:50px;">
                        <img src="/img/footer/soc.png" style="width:50px;"/>
                      </a>
                    </div>
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
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    }),
};

if (process.env.ADD_REDIRECTS === 'production') {
  console.log("ADDED REDIRECTS")
  // This plugin keeps the broken link validation from successfully running,
  // however it only functions when someone browses directly to one of these paths, so we
  // still need to update internal links when changing paths.
  config.plugins.push(['@docusaurus/plugin-client-redirects',
    {
      redirects: [
        {
          from: ['/getting-started/oss-installation', '/installation'],
          to: '/overview/installation',
        },
        {
          from: ['/reference/service-identities'],
          to: '/reference/workload-identities',
        },
        {
          from: ['/intent-based-access-control', '/reference/intents-and-intents-files'],
          to: '/overview/intent-based-access-control'
        },
        {
          from: ['/otterize-oss'],
          to: '/overview/otterize-oss'
        },
        {
          from: ['/reference/access-controls/network-policies'],
          to: '/features/network-mapping-network-policies/reference/Network-Policies-Deep-Dive'
        },
        {
          from: ['/shadow-vs-active-enforcement'],
          to: '/reference/shadow-vs-active-enforcement'
        },
        {
          from: ['/otterize-cloud'],
          to: '/overview/otterize-cloud'
        },
        {
          from: '/quick-tutorials',
          to: '/',
        },
        {
          from: ['/otterize-oss/usage-telemetry'],
          to: '/overview/otterize-oss/usage-telemetry'
        },
        {
          from: ['/otterize-oss/error-telemetry'],
          to: '/overview/otterize-oss/error-telemetry'
        },
        {
          from: ['/otterize-cloud/object-model'],
          to: '/reference/terminology'
        },
        {
          from: ['/guides/protect-1-service-network-policies'],
          to: '/features/network-mapping-network-policies/tutorials/protect-1-service-network-policies'
        },
        {
          from: ['/quick-tutorials/k8s-kafka-mtls', '/quickstart/access-control/k8s-kafka-mtls'],
          to: '/features/kafka/tutorials/k8s-kafka-mtls',
        },
        {
          from: ['/quickstart/access-control/aws-iam-eks'],
          to: '/features/aws-iam/tutorials/aws-iam-eks',
        },
        {
          from: ['/troubleshooting'],
          to: '/reference/troubleshooting',
        },
        {
          from: ['/quickstart/access-control/k8s-network-policies'],
          to: '/features/network-mapping-network-policies/tutorials/k8s-network-policies',
        },
        {
          from: ['/quick-tutorials/aws-eks-cni-mini','/quickstart/access-control/aws-eks-cni-mini'],
          to: '/features/network-mapping-network-policies/tutorials/aws-eks-cni-mini',
        },
        {
          from: ['/quick-tutorials/k8s-kafka-mtls-cert-manager', '/quickstart/access-control/k8s-kafka-mtls-cert-manager', '/quick-tutorials/k8s-mtls'],
          to: '/features/kafka/tutorials/k8s-kafka-mtls-cert-manager',
        },
        {
          from: ['/quick-tutorials/k8s-istio-watcher', '/quickstart/visualization/k8s-istio-watcher'],
          to: '/features/istio/tutorials/k8s-istio-watcher',
        },
        {
          from: ['/quick-visual-tutorials/visual-ibac-istio-authorization-policies','/quickstart/access-control/k8s-istio-authorization-policies', '/quickstart/k8s-istio-authorization-policies', '/quick-tutorials/k8s-istio-authorization-policies'],
          to: '/features/istio/tutorials/k8s-istio-authorization-policies',
        },
        {
          from: ['/quick-visual-tutorials/visual-ibac-kafka-k8s'],
          to: '/features/kafka/tutorials/k8s-kafka-mapping',
        },
        {
          from: ['/quickstart/visualization/postgresql'],
          to: '/features/postgresql/tutorials/postgres-mapping'
        },
        {
          from: ['/quickstart/access-control/postgresql'],
          to: '/features/postgresql/tutorials/postgres'
        },
        {
          from: ['/quick-visual-tutorials/visual-ibac-network-policies', '/quick-tutorials/k8s-network-policies'],
          to: '/features/network-mapping-network-policies/tutorials/k8s-network-policies',
        },
        {
          from: ['/quick-visual-tutorials/visual-k8s-cluster-mapping', '/quickstart/visualization/k8s-network-mapper', '/quick-tutorials/k8s-network-mapper'],
          to: '/features/network-mapping-network-policies/tutorials/k8s-network-mapper',
        },
        {
          from: '/reference/configuration/intents-operator',
          to: '/reference/intents-operator'
        },
        {
          from: '/reference/configuration/intents-operator/helm-chart',
          to: '/reference/intents-operator/helm-chart'
        },
        {
          from: '/reference/configuration/credentials-operator',
          to: '/reference/credentials-operator'
        },
        {
          from: '/reference/configuration/credentials-operator/helm-chart',
            to: '/reference/credentials-operator/helm-chart'
        },
        {
          from: '/reference/configuration/network-mapper',
          to: '/reference/network-mapper'
        },
        {
          from: '/reference/configuration/network-mapper/helm-chart',
            to: '/reference/network-mapper/helm-chart'
        }
        // Redirect from multiple old paths to the new path
        // {
        //   to: '/docs/newDoc2',
        //   from: ['/docs/oldDocFrom2019', '/docs/legacyDocFrom2016'],
        // },
      ],
    }])
}

module.exports = config;
