export const SidebarContent = [
  {
    id: 1,
    name: "Home",
    icon: (
      <svg width="60" height="60" viewBox="0 0 16 16">
        <path
          fill-rule="evenodd"
          d="M16 9l-3-3V2h-2v2L8 1L0 9h2l1 5c0 .55.45 1 1 1h8c.55 0 1-.45 1-1l1-5h2zm-4 5H9v-4H7v4H4L2.81 7.69L8 2.5l5.19 5.19L12 14z"
          fill="#fff"
        />
      </svg>
    ),
    path: "/",
  },
  {
    id: 2,
    name: "team",
    icon: (
      <svg width="60" height="60" viewBox="0 0 24 24">
        <g
          fill="none"
          stroke="#ffffff"
          stroke-linecap="round"
          stroke-width="1.5"
        >
          <path d="M1 20v-1a7 7 0 0 1 7-7v0a7 7 0 0 1 7 7v1" />
          <path d="M13 14v0a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v.5" />
          <path
            stroke-linejoin="round"
            d="M8 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8m10-3a3 3 0 1 0 0-6a3 3 0 0 0 0 6"
          />
        </g>
      </svg>
    ),
    path: "/pages/team",
  },
];
