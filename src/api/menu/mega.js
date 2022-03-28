import sample from './sample-pages';
import imgAPI from 'assets/images/imgAPI';

const grandChild = [
  {
    name: 'Vivamus Condimentum',
    link: '#'
  },
  {
    name: 'Lorem',
    link: '#'
  },
  {
    name: 'Eu Rhoncus Odio',
    link: '#'
  },
  {
    name: 'Praesent Tristique',
    link: '#'
  }
];

const mega = [
  {
    id: 'menu1',
    name: 'First Menu',
    child: [
      {
        name: 'Eu Rhoncus Odio',
        thumb: imgAPI.ui[6],
        child: grandChild
      },
      {
        name: 'In Lorem',
        thumb: imgAPI.ui[7],
        child: grandChild
      },
      {
        name: 'Eu Rhoncus Odio',
        thumb: imgAPI.ui[8],
        child: grandChild
      },
      {
        name: 'Praesent Tristique',
        thumb: imgAPI.ui[9],
        child: grandChild
      },
      {
        name: 'Eu Rhoncus Odio',
        thumb: imgAPI.ui[10],
        child: grandChild
      },
      {
        name: 'In Lorem',
        thumb: imgAPI.ui[11],
        child: grandChild
      },
      {
        name: 'Eu Rhoncus Odio',
        thumb: imgAPI.ui[12],
        child: grandChild
      },
      {
        name: 'Praesent Tristique',
        thumb: imgAPI.ui[13],
        child: grandChild
      }
    ]
  },
  {
    id: 'menu2',
    name: 'Second Menu',
    child: [
      {
        name: 'Eu Rhoncus Odio',
        thumb: imgAPI.ui[6],
        child: grandChild
      },
      {
        name: 'In Lorem',
        thumb: imgAPI.ui[15],
        child: grandChild
      },
      {
        name: 'Eu Rhoncus Odio',
        thumb: imgAPI.ui[16],
        child: grandChild
      },
      {
        name: 'Praesent Tristique',
        thumb: imgAPI.ui[17],
        child: grandChild
      },
      {
        name: 'Eu Rhoncus Odio',
        thumb: imgAPI.ui[6],
        child: grandChild
      },
      {
        name: 'In Lorem',
        thumb: imgAPI.ui[7],
        child: grandChild
      },
      {
        name: 'Eu Rhoncus Odio',
        thumb: imgAPI.ui[8],
        child: grandChild
      },
      {
        name: 'Praesent Tristique',
        thumb: imgAPI.ui[9],
        child: grandChild
      }
    ]
  },
  {
    id: 'menu3',
    name: 'Third Menu',
    child: [
      {
        name: 'Eu Rhoncus Odio',
        thumb: imgAPI.ui[10],
        child: grandChild
      },
      {
        name: 'In Lorem',
        thumb: imgAPI.ui[11],
        child: grandChild
      },
      {
        name: 'Eu Rhoncus Odio',
        thumb: imgAPI.ui[12],
        child: grandChild
      },
      {
        name: 'Praesent Tristique',
        thumb: imgAPI.ui[13],
        child: grandChild
      },
      {
        name: 'Eu Rhoncus Odio',
        thumb: imgAPI.ui[14],
        child: grandChild
      },
      {
        name: 'In Lorem',
        thumb: imgAPI.ui[15],
        child: grandChild
      },
      {
        name: 'Eu Rhoncus Odio',
        thumb: imgAPI.ui[16],
        child: grandChild
      },
      {
        name: 'Praesent Tristique',
        thumb: imgAPI.ui[17],
        child: grandChild
      }
    ]
  },
  {
    id: 'menu4',
    name: 'Fourth Menu',
    child: [
      {
        name: 'Eu Rhoncus Odio',
        thumb: imgAPI.ui[6],
        child: grandChild
      },
      {
        name: 'In Lorem',
        thumb: imgAPI.ui[7],
        child: grandChild
      },
      {
        name: 'Eu Rhoncus Odio',
        thumb: imgAPI.ui[8],
        child: grandChild
      },
      {
        name: 'Praesent Tristique',
        thumb: imgAPI.ui[9],
        child: grandChild
      },
    ]
  },
  {
    id: 'sample',
    name: 'Sample Pages',
    child: sample
  }
];

export default mega;
