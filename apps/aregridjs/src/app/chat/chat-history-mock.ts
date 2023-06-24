const ChatHistoryMock = {
  getMessages: () => {
    const messages = [
      {
        avatar:
          'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/005099b73f79ca48a6acf026c0021f93f323e9ba_full.jpg',
        userName: 'Tom',
        content:
          "I have some ideas for the new iteration of aregridjs. Let's discuss!",
      },
      {
        avatar:
          'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/0077f8c11bd1f32199710a0259c9873ce8e7b63b_full.jpg',
        userName: 'Jack',
        content:
          "Sure, I'm excited to hear your ideas. Let's make aregridjs even better!",
      },
      {
        avatar:
          'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/35/35547e0ab2d4ff89ed4d1b5347f2ec27170ee224_full.jpg',
        userName: 'Loius',
        content:
          "I'm also interested in the new iteration. We should focus on code collaboration features.",
      },
      {
        avatar:
          'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/005099b73f79ca48a6acf026c0021f93f323e9ba_full.jpg',
        userName: 'Tom',
        content: 'I think we should prioritize improving the documentation.',
      },
      {
        avatar:
          'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/0077f8c11bd1f32199710a0259c9873ce8e7b63b_full.jpg',
        userName: 'Jack',
        content: 'What about adding support for virtual scrolling?',
      },
      {
        avatar:
          'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/35/35547e0ab2d4ff89ed4d1b5347f2ec27170ee224_full.jpg',
        userName: 'Loius',
        content: 'We should consider integrating with popular UI frameworks.',
      },
      {
        avatar:
          'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/005099b73f79ca48a6acf026c0021f93f323e9ba_full.jpg',
        userName: 'Tom',
        content: 'I have some suggestions for improving the API design.',
      },
      {
        avatar:
          'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/0077f8c11bd1f32199710a0259c9873ce8e7b63b_full.jpg',
        userName: 'Jack',
        content: 'We can also optimize performance for large datasets.',
      },
      {
        avatar:
          'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/35/35547e0ab2d4ff89ed4d1b5347f2ec27170ee224_full.jpg',
        userName: 'Loius',
        content: 'Let me create a task board to manage our progress.',
      },
      {
        avatar:
          'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/005099b73f79ca48a6acf026c0021f93f323e9ba_full.jpg',
        userName: 'Tom',
        content: 'We should conduct user testing for better usability.',
      },
      {
        avatar:
          'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/0077f8c11bd1f32199710a0259c9873ce8e7b63b_full.jpg',
        userName: 'Jack',
        content: 'Let me create some sample demos for the documentation.',
      },
      {
        avatar:
          'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/35/35547e0ab2d4ff89ed4d1b5347f2ec27170ee224_full.jpg',
        userName: 'Loius',
        content: 'We can enhance the code editor with syntax highlighting.',
      },
      {
        avatar:
          'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/005099b73f79ca48a6acf026c0021f93f323e9ba_full.jpg',
        userName: 'Tom',
        content: 'I will prepare a roadmap for the next iteration.',
      },
      {
        avatar:
          'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/0077f8c11bd1f32199710a0259c9873ce8e7b63b_full.jpg',
        userName: 'Jack',
        content:
          'We can gather feedback from the community for feature requests.',
      },
      {
        avatar:
          'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/35/35547e0ab2d4ff89ed4d1b5347f2ec27170ee224_full.jpg',
        userName: 'Loius',
        content: 'Let me investigate potential performance optimizations.',
      },
      {
        avatar:
          'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/005099b73f79ca48a6acf026c0021f93f323e9ba_full.jpg',
        userName: 'Tom',
        content: 'We should consider integrating automated testing.',
      },
      {
        avatar:
          'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/0077f8c11bd1f32199710a0259c9873ce8e7b63b_full.jpg',
        userName: 'Jack',
        content: 'I will create a demo video showcasing the new features.',
      },
      {
        avatar:
          'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/35/35547e0ab2d4ff89ed4d1b5347f2ec27170ee224_full.jpg',
        userName: 'Loius',
        content: 'We should write comprehensive documentation for the APIs.',
      },
      {
        avatar:
          'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/005099b73f79ca48a6acf026c0021f93f323e9ba_full.jpg',
        userName: 'Tom',
        content: 'Let me create a design mockup for the new UI components.',
      },
      {
        avatar:
          'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/0077f8c11bd1f32199710a0259c9873ce8e7b63b_full.jpg',
        userName: 'Jack',
        content: 'We should optimize the bundle size for faster loading.',
      },
      {
        avatar:
          'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/35/35547e0ab2d4ff89ed4d1b5347f2ec27170ee224_full.jpg',
        userName: 'Loius',
        content: 'Let me investigate potential security enhancements.',
      },
    ];

    while (messages.length < 20) {
      const randomIndex = Math.floor(Math.random() * messages.length);
      const randomMessage = messages[randomIndex];
      messages.push(randomMessage);
    }
    return messages;
  },
};

export { ChatHistoryMock };