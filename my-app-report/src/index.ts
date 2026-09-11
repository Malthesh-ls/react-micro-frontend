import('./bootstrap').then(({ mount }: any) => {
  const localRoot = document.getElementById('report_root');

  mount({
    mountPoint: localRoot!,
    routingStrategy: 'browser',
  })
})

export { };
