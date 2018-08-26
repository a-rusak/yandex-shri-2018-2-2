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
  ],
  devices: [
    {
      id: 101,
      isActive: true,
      title: 'Xiaomi Yeelight LED Smart Bulb',
      label: 'включено',
      icon: 'sun'
    },
    {
      id: 102,
      isActive: false,
      title: 'D-Link Omna 180 Cam',
      label: 'Включится в 17:00',
      icon: 'sun'
    },
    {
      id: 103,
      isActive: false,
      title: 'Elgato Eve Degree Connected',
      label: 'Выключено до 17:00',
      icon: 'temperature'
    },
    {
      id: 104,
      isActive: false,
      title: 'LIFX Mini Day & Dusk A60 E27',
      label: 'Включится в 17:00',
      icon: 'sun'
    },
    {
      id: 105,
      isActive: true,
      title: 'Xiaomi Mi Air Purifier 2S',
      label: 'Выключено до 17:00',
      icon: 'sun'
    },
    {
      id: 106,
      isActive: false,
      title: 'Philips Zhirui',
      label: 'Выключено до 17:00',
      icon: 'sun'
    },
    {
      id: 107,
      isActive: true,
      title: 'Xiaomi Mi Air Purifier 2S',
      label: 'Выключено до 17:00',
      icon: 'sun'
    }
  ]
  // layoutMain: {
  //   bg: {
  //     '@1x': require('@/images/bg@1x.png'),
  //     '@2x': require('@/images/bg@2x.png')
  //   }
  // }
}
