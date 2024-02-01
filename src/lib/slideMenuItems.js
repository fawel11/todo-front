module.exports = [
  /*   {
    type: 'item',
    isHeader: true,
    name: 'MAIN NAVIGATION'
  }, */
  {
    icon_name: "fa fa-dashboard",
    menu_name: "Dashboard",
    route_name: "admin",
  },
  {
    icon_name: "fa fa-th",
    menu_name: "My Att",
    route_name: "#admin",
    items: [
      {
        icon_name: "fa fa-circle-o",
        menu_name: "Attendance",
        route_name: "DashboardV1",
      },
      {
        icon_name: "fa fa-apple",
        menu_name: "Exam",
        route_name: "Sample",
        items: [
          {
            icon_name: "fa fa-circle-o",
            menu_name: "Attendance",
            route_name: "DashboardV1",
          },
          {
            icon_name: "fa fa-circle-o",
            menu_name: "Exam",
            route_name: "Sample",
          },
        ],
      },
    ],
  },


];
