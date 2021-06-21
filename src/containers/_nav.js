
const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Faisons connaissance',
    to: '/faisonsconnaissance',
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Patisseries sans gluten',
    icon: 'cil-drop',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Biscuites et sablés',
        to: '/biscuitsetsables',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Tartes et gâteaux',
        to: '/tartesetgateaux',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Pâtes lereés',
        to: '/pateslerees',
      }
    ]
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Patisseries traditionnelles',
    icon: 'cil-drop',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Biscuites et sablés',
        to: '/biscuitsetsables',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Tartes et gâteaux',
        to: '/tartesetgateaux',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Pâtes lereés',
        to: '/pateslerees',
      }
]
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Petites histoires',
    to: '/petiteshistoires',
  }
]

export default _nav
