import imgAPI from 'assets/images/imgAPI';
import link from 'assets/text/link';

const sample = [
  {
    id: 'company',
    name: 'company',
    thumb: imgAPI.ui[3],
    child: [
      {
        name: 'about',
        link: link.about
      },
      {
        name: 'team',
        link: link.team
      },
      {
        name: 'blog',
        link: link.blog
      },
      {
        name: 'blog detail',
        link: link.blogDetail
      }
    ],
  },
  {
    id: 'form',
    name: 'Form',
    thumb: imgAPI.ui[1],
    child: [
      {
        name: 'login',
        link: link.login
      },
      {
        name: 'register',
        link: link.register
      },
      {
        name: 'contact',
        link: link.contact
      },
      {
        name: 'contact map',
        link: link.contactMap
      }
    ],
  },
  {
    id: 'items',
    name: 'items',
    thumb: imgAPI.ui[0],
    child: [
      {
        name: 'card',
        link: link.card
      },
      {
        name: 'product',
        link: link.product
      },
      {
        name: 'product detail',
        link: link.productDetail
      }
    ],
  },
  {
    id: 'utilities',
    name: 'utilities',
    thumb: imgAPI.ui[2],
    child: [
      {
        name: 'pricing',
        link: link.pricing
      },
      {
        name: 'faq',
        link: link.faq
      },
      {
        name: 'maintenance',
        link: link.maintenance
      },
      {
        name: 'coming soon',
        link: link.comingSoon
      },
      {
        name: 'error',
        link: '/error'
      }
    ]
  }
];

export default sample;
