import('./bootstrap').then(({ mount }: any) => {
  const localRoot = document.getElementById('profile_root');

  mount({
    mountPoint: localRoot!,
    routingStrategy: 'browser',
  })
})

export { };
