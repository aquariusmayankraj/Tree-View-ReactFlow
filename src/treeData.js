const treeData = {
  id: "root",
  label: "Root",
  children: [
    {
      id: "A",
      label: "A",
      children: [
        {
          id: "A1",
          label: "A1",
          children: [
            {
              id: "A1a",
              label: "A1a",
              children: [
                {
                  id: "A1a-i",
                  label: "A1a-i",
                  children: [
                    { id: "A1a-i-1", label: "A1a-i-1" },
                    { id: "A1a-i-2", label: "A1a-i-2" },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "A2",
          label: "A2",
          children: [
            {
              id: "A2a",
              label: "A2a",
              children: [{ id: "A2a-i", label: "A2a-i" }],
            },
          ],
        },
      ],
    },
    {
      id: "B",
      label: "B",
      children: [
        {
          id: "B1",
          label: "B1",
          children: [
            {
              id: "B1a",
              label: "B1a",
              children: [
                {
                  id: "B1a-i",
                  label: "B1a-i",
                },
              ],
            },
          ],
        },
        {
          id: "B2",
          label: "B2",
          children: [
            {
              id: "B2a",
              label: "B2a",
            },
          ],
        },
      ],
    },
  ],
};

export default treeData;
