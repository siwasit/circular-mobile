import React from 'react'

const room = () => {
    const room = {
        name: 'Study Room 1',
        campus: 'Rangsit Campus',
        location: 'Puey Ungpakorn Library',
        periods: [
          { time: '09:00 - 12:00', status: 'OPEN' },
          { time: '12:00 - 15:00', status: 'NOT' },
          { time: '15:00 - 18:00', status: 'NOT' },
          { time: '18:00 - 21:00', status: 'CLOSED' }
        ],
        facilities: [
          { name: 'TV', icon: require('../img/svg/Frame.svg'), number: 'Standard' },
          { name: 'Marker', icon: require('../img/svg/home.svg'), number: 'Library of things' },
          { name: 'HDMI', icon: require('../img/svg/cable.svg'), number: 'Library of things' },
          { name: 'WIFI', icon: require('../img/svg/wifi.svg'), number: 'Support' },
          { name: '', icon: require('../img/svg/people.svg'), number: '6-16' }
        ]
      };
  return (
    <div>
      
    </div>
  )
}

export default room
