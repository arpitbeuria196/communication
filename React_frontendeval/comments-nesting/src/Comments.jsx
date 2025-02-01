export const comments = [
    {
      id: 1,
      text: 'This is the first comment!',
      replies: [
        {
          id: 2,
          text: 'This is a reply to the first comment.',
          replies: [
            {
              id: 3,
              text: 'This is a nested reply!',
              replies: [], // No further replies
            },
          ],
        },
      ],
    },
    {
      id: 4,
      text: 'This is another top-level comment.',
      replies: [],
    },
  ];