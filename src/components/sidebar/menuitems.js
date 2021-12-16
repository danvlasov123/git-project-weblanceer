const MenuItems = [
  {
    key: "APPS",
    data: [
      {
        key: "Mail",
        icon: "mail outline",
        path: "/content1",
        submenu: [],
      },
      {
        key: "Chat",
        icon: "comment alternate outline",
        path: "/content2",
        submenu: [],
      },
      {
        key: "Calendar",
        icon: "calendar outline",
        path: "/content2",
        submenu: [],
      },
      {
        key: "Project",
        icon: "calendar outline",
        path: "/content2",
        index: "project",
        submenu: [
          {
            key: "List",
            path: "/content1",
          },
          {
            key: "List",
            path: "/content2",
          },
        ],
      },
      {
        key: "E-Commerce",
        icon: "shopping cart",
        path: "/content2",
        index: "ecommerce",
        submenu: [
          {
            key: "List",
            path: "/content1",
          },
          {
            key: "List",
            path: "/content2",
          },
        ],
      },
    ],
  },
  {
    key: "COMPONENTS",
    data: [
      {
        key: "General",
        icon: "info circle",
        path: "/content2",
        index: "general",
        submenu: [
          {
            key: "List",
            path: "/content1",
          },
          {
            key: "List",
            path: "/content1",
          },
        ],
      },
      {
        key: "Layout",
        icon: "table",
        path: "/content2",
        index: "layout",
        submenu: [
          {
            key: "List",
            path: "/content1",
          },
          {
            key: "List",
            path: "/content1",
          },
        ],
      },
      {
        key: "Navigation",
        icon: "compass outline",
        path: "/content2",
        index: "navigation",
        submenu: [
          {
            key: "List",
            path: "/content1",
          },
          {
            key: "List",
            path: "/content1",
          },
        ],
      },
      {
        key: "Data Entry",
        icon: "file text outline",
        path: "/content2",
        index: "dataEntry",
        submenu: [
          {
            key: "List",
            path: "/content1",
          },
          {
            key: "List",
            path: "/content1",
          },
        ],
      },
      {
        key: "Data Display",
        icon: "computer",
        path: "/content2",
        index: "dataDisplay",
        submenu: [
          {
            key: "List",
            path: "/content1",
          },
          {
            key: "List",
            path: "/content1",
          },
        ],
      },
      {
        key: "Feedback",
        icon: "comments outline",
        path: "/content2",
        index: "feedback",
        submenu: [
          {
            key: "List",
            path: "/content1",
          },
          {
            key: "List",
            path: "/content1",
          },
        ],
      },
      {
        key: "Other",
        icon: "hourglass half",
        path: "/content2",
        index: "other",
        submenu: [
          {
            key: "List",
            path: "/content1",
          },
          {
            key: "List",
            path: "/content1",
          },
        ],
      },
      {
        key: "Charts",
        icon: "chart pie",
        path: "/content2",
        index: "charts",
        submenu: [
          {
            key: "List",
            path: "/content1",
          },
          {
            key: "List",
            path: "/content1",
          },
        ],
      },
    ],
  },
];

export default MenuItems;
