import {
  AntDesignOutlined,
  BookOutlined,
  DashboardOutlined,
  DotChartOutlined,
  FileUnknownOutlined,
  FundOutlined,
  MailOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { APP_PREFIX_PATH } from "configs/AppConfig";

const extraNavTree = [
  {
    key: "extra",
    path: `${APP_PREFIX_PATH}/pages`,
    title: "Users",
    icon: PlusCircleOutlined,
    breadcrumb: true,
    isGroupTitle: true,
    submenu: [
      {
        key: "extra-pages-list",
        path: `${APP_PREFIX_PATH}/pages/user-list`,
        title: "sidenav.pages.userlist",
        icon: "",
        breadcrumb: true,
        submenu: [
          {
            key: "extra-pages-list",
            path: `${APP_PREFIX_PATH}/pages/user-list`,
            title: "Subscribed Users",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "extra-unsubscribed-list",
            path: `${APP_PREFIX_PATH}/pages/unsubscribed-list`,
            title: "Unsubscribed Users",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
        ],
      },
    ],
  },
];

const dashBoardNavTree = [
  {
    key: "dashboards",
    path: `${APP_PREFIX_PATH}/dashboards`,
    title: "sidenav.dashboard",
    icon: DashboardOutlined,
    breadcrumb: false,
    isGroupTitle: true,
    submenu: [
      {
        key: "dashboards-default",
        path: `${APP_PREFIX_PATH}/dashboards/default`,
        title: "sidenav.dashboard.default",
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: [],
      },
      // {
      //   key: "dashboards-analytic",
      //   path: `${APP_PREFIX_PATH}/dashboards/analytic`,
      //   title: "sidenav.dashboard.analytic",
      //   icon: DotChartOutlined,
      //   breadcrumb: false,
      //   submenu: [],
      // },
      // {
      //   key: "dashboards-sales",
      //   path: `${APP_PREFIX_PATH}/dashboards/sales`,
      //   title: "sidenav.dashboard.sales",
      //   icon: FundOutlined,
      //   breadcrumb: false,
      //   submenu: [],
      // },
    ],
  },
];

const appsNavTree = [
  {
    key: "sales",
    path: `/sales`,
    title: "Sales",
    icon: "DollarOutlined",
    breadcrumb: true,
    isGroupTitle: true,
    submenu: [
      {
        key: "dashboards-sales",
        path: `${APP_PREFIX_PATH}/dashboards/sales`,
        title: "Total Sales",
        icon: FundOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: "dashboards-sales",
            path: `${APP_PREFIX_PATH}/dashboards/sales`,
            title: "Active Sales",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "sales-new",
            path: `/sales/new`,
            title: "New Subscribers",
            breadcrumb: true,
          },
          {
            key: "sales-upsells",
            path: `/sales/upsells`,
            title: "Upsells",
            breadcrumb: true,
          },
          {
            key: "sales-unsubscribed",
            path: `/sales/unsubscribed`,
            title: "Unsubscribed Users",
            breadcrumb: true,
          },
        ],
      },
    ],
  },
];

const componentsNavTree = [
  {
    key: "Analytics",
    path: `${APP_PREFIX_PATH}/components`,
    title: "Analytics",
    icon: AntDesignOutlined,
    breadcrumb: true,
    isGroupTitle: true,
    submenu: [
      {
        key: "dashboards-analytic",
        path: `${APP_PREFIX_PATH}/dashboards/analytic`,
        title: "Visitors (Total, New, Returning)",
        icon: DotChartOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "analytics-bounce-rate",
        path: `/analytics/bounce-rate`,
        title: "Bounce Rate",
        breadcrumb: true,
      },
      {
        key: "analytics-cart-abandonment",
        path: `/analytics/cart-abandonment`,
        title: "Cart Abandonment Rate",
        breadcrumb: true,
      },
      {
        key: "analytics-social-visitors",
        path: `/analytics/social-visitors`,
        title: "Social Visitors",
        breadcrumb: true,
      },
    ],
  },
];

const docsNavTree = [
  {
    key: "docs",
    path: `${APP_PREFIX_PATH}/docs`,
    title: "Customer Support",
    icon: BookOutlined,
    breadcrumb: false,
    isGroupTitle: true,
    submenu: [
      {
        key: "docs-documentation",
        path: `${APP_PREFIX_PATH}/docs/documentation`,
        title: "Customer Support",
        icon: FileUnknownOutlined,
        breadcrumb: true,
        isGroupTitle: false,
        submenu: [
          {
            key: "support-ticket-system",
            path: `/customer-support/ticket-system`,
            title: "Ticketing System",
            breadcrumb: true,
          },
          {
            key: "support-pending-tickets",
            path: `/customer-support/pending-tickets`,
            title: "Pending/Open Tickets",
            breadcrumb: true,
          },
          {
            key: "support-closed-tickets",
            path: `/customer-support/closed-tickets`,
            title: "Closed Tickets",
            breadcrumb: true,
          },
        ],
      },
    ],
  },
];
const emailNavTree = [
  {
    key: "docs",
    path: `${APP_PREFIX_PATH}/docs`,
    title: "Email Activity",
    icon: BookOutlined,
    breadcrumb: false,
    isGroupTitle: true,
    submenu: [
      {
        key: "docs-documentation",
        path: `${APP_PREFIX_PATH}/docs/documentation`,
        title: "Newsletters (Opens, Clicks, Bounces, etc.)",
        icon: FileUnknownOutlined,
        breadcrumb: false,
        isGroupTitle: false,
        submenu: [],
      },
    ],
  },
];
const menuNavTree = [
  {
    key: "docs",
    path: `${APP_PREFIX_PATH}/docs`,
    title: "sidenav.docs",
    icon: BookOutlined,
    breadcrumb: false,
    isGroupTitle: true,
    submenu: [
      {
        key: "dashboard",
        path: `/dashboard`,
        title: "Dashboard",
        icon: "DashboardOutlined",
        breadcrumb: true,
        isGroupTitle: false,
        submenu: [],
      },
      {
        key: "users",
        path: `/users`,
        title: "Users",
        icon: "UserOutlined",
        breadcrumb: true,
        isGroupTitle: false,
        submenu: [
          {
            key: "extra-pages-list",
            path: `${APP_PREFIX_PATH}/pages/user-list`,
            title: "All Users",
            breadcrumb: true,
          },
          {
            key: "users-subscribed",
            path: `/users/subscribed`,
            title: "Subscribed Users",
            breadcrumb: true,
          },
          {
            key: "users-unsubscribed",
            path: `/users/unsubscribed`,
            title: "Unsubscribed Users",
            breadcrumb: true,
          },
        ],
      },
      {
        key: "sales",
        path: `/sales`,
        title: "Sales",
        icon: "DollarOutlined",
        breadcrumb: true,
        isGroupTitle: false,
        submenu: [
          {
            key: "dashboards-sales",
            path: `${APP_PREFIX_PATH}/dashboards/sales`,
            title: "Total Sales",
            breadcrumb: true,
          },
          {
            key: "sales-active",
            path: `/sales/active`,
            title: "Active Users",
            breadcrumb: true,
          },
          {
            key: "sales-new",
            path: `/sales/new`,
            title: "New Subscribers",
            breadcrumb: true,
          },
          {
            key: "sales-upsells",
            path: `/sales/upsells`,
            title: "Upsells",
            breadcrumb: true,
          },
          {
            key: "sales-unsubscribed",
            path: `/sales/unsubscribed`,
            title: "Unsubscribed Users",
            breadcrumb: true,
          },
        ],
      },
      {
        key: "analytics",
        path: `/analytics`,
        title: "Analytics",
        icon: "BarChartOutlined",
        breadcrumb: true,
        isGroupTitle: false,
        submenu: [
          {
            key: "dashboards-analytic",
            path: `${APP_PREFIX_PATH}/dashboards/analytic`,
            title: "Visitors (Total, New, Returning)",
            breadcrumb: true,
          },
          {
            key: "analytics-bounce-rate",
            path: `/analytics/bounce-rate`,
            title: "Bounce Rate",
            breadcrumb: true,
          },
          {
            key: "analytics-cart-abandonment",
            path: `/analytics/cart-abandonment`,
            title: "Cart Abandonment Rate",
            breadcrumb: true,
          },
          {
            key: "analytics-social-visitors",
            path: `/analytics/social-visitors`,
            title: "Social Visitors",
            breadcrumb: true,
          },
        ],
      },
      {
        key: "customer-support",
        path: `/customer-support`,
        title: "Customer Support",
        icon: "CustomerServiceOutlined",
        breadcrumb: true,
        isGroupTitle: false,
        submenu: [
          {
            key: "support-ticket-system",
            path: `/customer-support/ticket-system`,
            title: "Ticketing System",
            breadcrumb: true,
          },
          {
            key: "support-pending-tickets",
            path: `/customer-support/pending-tickets`,
            title: "Pending/Open Tickets",
            breadcrumb: true,
          },
          {
            key: "support-closed-tickets",
            path: `/customer-support/closed-tickets`,
            title: "Closed Tickets",
            breadcrumb: true,
          },
        ],
      },
      {
        key: "referral-affiliate",
        path: `/referral-affiliate`,
        title: "Referral/Affiliate System",
        icon: "ShareAltOutlined",
        breadcrumb: true,
        isGroupTitle: false,
        submenu: [
          {
            key: "referral-affiliate",
            path: `${APP_PREFIX_PATH}/referral-affiliate/dashboard`,
            title: "Affiliate Dashboard",
            breadcrumb: true,
          },
          {
            key: "affiliate-tracking-links",
            path: `${APP_PREFIX_PATH}/referral-affiliate/tracking-links`,
            title: "Tracking Links",
            breadcrumb: true,
          },
          {
            key: "affiliate-stats",
            path: `${APP_PREFIX_PATH}/referral-affiliate/stats`,
            title: "Affiliate Stats",
            breadcrumb: true,
          },
        ],
      },
      {
        key: "billing-orders",
        path: `/billing-orders`,
        title: "Billing & Orders",
        icon: "WalletOutlined",
        breadcrumb: true,
        isGroupTitle: false,
        submenu: [
          {
            key: "extra-pages-invoice",
            path: `${APP_PREFIX_PATH}/pages/invoice`,
            title: "Invoices",
            breadcrumb: true,
          },
          {
            key: "billing-refunds",
            path: `/billing-orders/refunds`,
            title: "Refunds",
            breadcrumb: true,
          },
          {
            key: "billing-transactions",
            path: `/billing-orders/transactions`,
            title: "Transactions",
            breadcrumb: true,
          },
        ],
      },

      {
        key: "email-activity",
        path: `/email-activity`,
        title: "Email Activity",
        icon: "MailOutlined",
        breadcrumb: true,
        isGroupTitle: false,
        submenu: [
          {
            key: "apps-mail",
            path: `${APP_PREFIX_PATH}/apps/mail/inbox`,
            title: "Newsletters (Opens, Clicks, Bounces)",
            icon: MailOutlined,
            breadcrumb: false,
            submenu: [],
          },
        ],
      },
      {
        key: "settings",
        path: `/settings`,
        title: "Settings",
        icon: "SettingOutlined",
        breadcrumb: true,
        isGroupTitle: false,
        submenu: [
          {
            key: "extra-pages-profile",
            path: `${APP_PREFIX_PATH}/pages/profile`,
            title: "Profile Management",
            breadcrumb: true,
          },
          {
            key: "settings-authentication",
            path: `/settings/authentication`,
            title: "Authentication & Permissions",
            breadcrumb: true,
          },

          {
            key: "settings-access-roles",
            path: `/settings/access-roles`,
            title: "Access Roles (Admin, Subadmin, etc.)",
            breadcrumb: true,
          },
        ],
      },
    ],
  },
];

const navigationConfig = [
  // ...dashBoardNavTree,
  // ...extraNavTree,
  // ...appsNavTree,
  // ...componentsNavTree,
  // ...docsNavTree,
  // ...emailNavTree,
  ...menuNavTree,
];

export default navigationConfig;
