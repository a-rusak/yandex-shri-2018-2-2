module.exports = {
  benefits: ['Fast', 'Secure'],
  logo: {
    '@1x': require('@/images/YandexHome@1x.png'),
    '@2x': require('@/images/YandexHome@2x.png')
  },
  actions: [
    {
      id: 1,
      isActive: true,
      title: 'Выключить весь свет в доме и во дворе',
      icon: 'sun'
    },
    {
      id: 2,
      isActive: false,
      title: 'Я устал, я мухожук',
      icon: 'scheduled'
    },
    {
      id: 3,
      isActive: true,
      title: 'Включить свет в коридоре',
      icon: 'sun'
    },
    {
      id: 4,
      isActive: true,
      title: 'Набрать горячую ванну',
      label: 'Начнётся в 18:00',
      icon: 'temperature'
    },
    {
      id: 5,
      isActive: true,
      title: 'Сделать пол тёплым во всей квартире',
      icon: 'temperature'
    }
  ]
  // layoutMain: {
  //   bg: {
  //     '@1x': require('@/images/bg@1x.png'),
  //     '@2x': require('@/images/bg@2x.png')
  //   }
  // }
}
