export interface MenuItem {
    name: string;
    path: string;
}

const menuItems: MenuItem[] = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Skills",
      path: "/skills",
    },
    {
      name: "Journey",
      path: "/journey",
    },
    {
      name: "Projects",
      path: "/projects",
    },
    {
      name: "Contact",
      path: "/contact",
    },
    // {
    //   name: "Resume",
    //   path: "/resume",
    // },
  ];

export default menuItems;
