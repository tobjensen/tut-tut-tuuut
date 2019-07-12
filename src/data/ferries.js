const getData = () => ([
  {
    ferry: 'Alexander',
    class: 'First Fleet',
    route: 'F2',
    destination: 'Taronga Zoo',
    location: 'Taronga Zoo Wharf',
    speed: '4.6 km/h',
    heading: '112° SE',
    coordinates: {lat: '-33.838466', lon: '151.231931'},
    stops: [
      {stop: 'Taronga Zoo', eta: 'Now'},
      {stop: 'Cremorne Point', eta: '12 min'},
      {stop: 'Circular Quay', eta: '20 min'}
      ],
    ferry_info: 'Something about this ferry. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At volutpat diam ut venenatis tellus. Non arcu risus quis varius quam quisque id. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed. Morbi tristique senectus et netus et malesuada fames ac. Consequat interdum varius sit amet mattis vulputate enim. Elementum integer enim neque volutpat ac tincidunt vitae semper quis.\nVel quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Suspendisse ultrices gravida dictum fusce ut placerat orci. Enim sed faucibus turpis in. Magna fringilla urna porttitor rhoncus dolor purus non enim praesent. Facilisi cras fermentum odio eu feugiat. Sem integer vitae justo eget magna fermentum iaculis eu. Turpis cursus in hac habitasse platea dictumst quisque sagittis. Bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim.\nLuctus accumsan tortor posuere ac ut consequat semper viverra nam. In aliquam sem fringilla ut morbi tincidunt augue interdum velit. Hac habitasse platea dictumst vestibulum rhoncus. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus. Orci nulla pellentesque dignissim enim sit amet venenatis.',
    class_info: 'This ferry class is great! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At volutpat diam ut venenatis tellus. Non arcu risus quis varius quam quisque id. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed. Morbi tristique senectus et netus et malesuada fames ac. Consequat interdum varius sit amet mattis vulputate enim. Elementum integer enim neque volutpat ac tincidunt vitae semper quis.\nVel quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Suspendisse ultrices gravida dictum fusce ut placerat orci. Enim sed faucibus turpis in. Magna fringilla urna porttitor rhoncus dolor purus non enim praesent. Facilisi cras fermentum odio eu feugiat. Sem integer vitae justo eget magna fermentum iaculis eu. Turpis cursus in hac habitasse platea dictumst quisque sagittis. Bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim.\nLuctus accumsan tortor posuere ac ut consequat semper viverra nam. In aliquam sem fringilla ut morbi tincidunt augue interdum velit. Hac habitasse platea dictumst vestibulum rhoncus. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus. Orci nulla pellentesque dignissim enim sit amet venenatis.',
    images: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150'] 
  },
  {
    ferry: 'Borrowdale',
    class: 'First Fleet',
    route: 'F5',
    destination: 'Neutral Bay',
    location: 'Neutral Bay',
    speed: '15.6 km/h',
    heading: '183° S',
    coordinates: {lat: '-33.838466', lon: '151.231931'},
    stops: [
      {stop: 'Neutral Bay', eta: 'Now'},
      {stop: 'Kurraba', eta: '5 min'},
      {stop: 'North Sydney', eta: '7 min'},
      {stop: 'Kirribilli', eta: '12 min'},
      {stop: 'Circular Quay', eta: '20 min'}
      ],
    ferry_info: 'Something about this ferry. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At volutpat diam ut venenatis tellus. Non arcu risus quis varius quam quisque id. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed. Morbi tristique senectus et netus et malesuada fames ac. Consequat interdum varius sit amet mattis vulputate enim. Elementum integer enim neque volutpat ac tincidunt vitae semper quis.\nVel quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Suspendisse ultrices gravida dictum fusce ut placerat orci. Enim sed faucibus turpis in. Magna fringilla urna porttitor rhoncus dolor purus non enim praesent. Facilisi cras fermentum odio eu feugiat. Sem integer vitae justo eget magna fermentum iaculis eu. Turpis cursus in hac habitasse platea dictumst quisque sagittis. Bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim.\nLuctus accumsan tortor posuere ac ut consequat semper viverra nam. In aliquam sem fringilla ut morbi tincidunt augue interdum velit. Hac habitasse platea dictumst vestibulum rhoncus. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus. Orci nulla pellentesque dignissim enim sit amet venenatis.',
    class_info: 'This ferry class is great! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At volutpat diam ut venenatis tellus. Non arcu risus quis varius quam quisque id. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed. Morbi tristique senectus et netus et malesuada fames ac. Consequat interdum varius sit amet mattis vulputate enim. Elementum integer enim neque volutpat ac tincidunt vitae semper quis.\nVel quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Suspendisse ultrices gravida dictum fusce ut placerat orci. Enim sed faucibus turpis in. Magna fringilla urna porttitor rhoncus dolor purus non enim praesent. Facilisi cras fermentum odio eu feugiat. Sem integer vitae justo eget magna fermentum iaculis eu. Turpis cursus in hac habitasse platea dictumst quisque sagittis. Bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim.\nLuctus accumsan tortor posuere ac ut consequat semper viverra nam. In aliquam sem fringilla ut morbi tincidunt augue interdum velit. Hac habitasse platea dictumst vestibulum rhoncus. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus. Orci nulla pellentesque dignissim enim sit amet venenatis.',
    images: [] 
  },
  {
    ferry: 'Charlotte',
    class: 'First Fleet',
    route: 'OS',
    destination: 'Out of Service',
    location: 'Balmain Shipyard',
    speed: '0.2 km/h',
    heading: '202° SW',
    coordinates: {lat: '-33.838466', lon: '151.231931'},
    stops: [],
    ferry_info: 'Something about this ferry. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At volutpat diam ut venenatis tellus. Non arcu risus quis varius quam quisque id. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed. Morbi tristique senectus et netus et malesuada fames ac. Consequat interdum varius sit amet mattis vulputate enim. Elementum integer enim neque volutpat ac tincidunt vitae semper quis.\nVel quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Suspendisse ultrices gravida dictum fusce ut placerat orci. Enim sed faucibus turpis in. Magna fringilla urna porttitor rhoncus dolor purus non enim praesent. Facilisi cras fermentum odio eu feugiat. Sem integer vitae justo eget magna fermentum iaculis eu. Turpis cursus in hac habitasse platea dictumst quisque sagittis. Bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim.\nLuctus accumsan tortor posuere ac ut consequat semper viverra nam. In aliquam sem fringilla ut morbi tincidunt augue interdum velit. Hac habitasse platea dictumst vestibulum rhoncus. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus. Orci nulla pellentesque dignissim enim sit amet venenatis.',
    class_info: 'This ferry class is great! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At volutpat diam ut venenatis tellus. Non arcu risus quis varius quam quisque id. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed. Morbi tristique senectus et netus et malesuada fames ac. Consequat interdum varius sit amet mattis vulputate enim. Elementum integer enim neque volutpat ac tincidunt vitae semper quis.\nVel quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Suspendisse ultrices gravida dictum fusce ut placerat orci. Enim sed faucibus turpis in. Magna fringilla urna porttitor rhoncus dolor purus non enim praesent. Facilisi cras fermentum odio eu feugiat. Sem integer vitae justo eget magna fermentum iaculis eu. Turpis cursus in hac habitasse platea dictumst quisque sagittis. Bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim.\nLuctus accumsan tortor posuere ac ut consequat semper viverra nam. In aliquam sem fringilla ut morbi tincidunt augue interdum velit. Hac habitasse platea dictumst vestibulum rhoncus. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus. Orci nulla pellentesque dignissim enim sit amet venenatis.',
    images: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150'] 
  },
  {
    ferry: 'Freshwater',
    class: 'Freshwater',
    route: 'F1',
    destination: 'Manley',
    location: 'Circular Quay',
    speed: '24.6 km/h',
    heading: '274° W',
    coordinates: {lat: '-33.838466', lon: '151.231931'},
    stops: [
      {stop: 'Circular Quay', eta: '8 min'}
      ],
    ferry_info: 'Something about this ferry. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At volutpat diam ut venenatis tellus. Non arcu risus quis varius quam quisque id. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed. Morbi tristique senectus et netus et malesuada fames ac. Consequat interdum varius sit amet mattis vulputate enim. Elementum integer enim neque volutpat ac tincidunt vitae semper quis.\nVel quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Suspendisse ultrices gravida dictum fusce ut placerat orci. Enim sed faucibus turpis in. Magna fringilla urna porttitor rhoncus dolor purus non enim praesent. Facilisi cras fermentum odio eu feugiat. Sem integer vitae justo eget magna fermentum iaculis eu. Turpis cursus in hac habitasse platea dictumst quisque sagittis. Bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim.\nLuctus accumsan tortor posuere ac ut consequat semper viverra nam. In aliquam sem fringilla ut morbi tincidunt augue interdum velit. Hac habitasse platea dictumst vestibulum rhoncus. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus. Orci nulla pellentesque dignissim enim sit amet venenatis.',
    class_info: 'This ferry class is great! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At volutpat diam ut venenatis tellus. Non arcu risus quis varius quam quisque id. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed. Morbi tristique senectus et netus et malesuada fames ac. Consequat interdum varius sit amet mattis vulputate enim. Elementum integer enim neque volutpat ac tincidunt vitae semper quis.\nVel quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Suspendisse ultrices gravida dictum fusce ut placerat orci. Enim sed faucibus turpis in. Magna fringilla urna porttitor rhoncus dolor purus non enim praesent. Facilisi cras fermentum odio eu feugiat. Sem integer vitae justo eget magna fermentum iaculis eu. Turpis cursus in hac habitasse platea dictumst quisque sagittis. Bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim.\nLuctus accumsan tortor posuere ac ut consequat semper viverra nam. In aliquam sem fringilla ut morbi tincidunt augue interdum velit. Hac habitasse platea dictumst vestibulum rhoncus. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus. Orci nulla pellentesque dignissim enim sit amet venenatis.',
    images: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150'] 
  },
  {
    ferry: 'Friendship',
    class: 'First Fleet',
    route: 'F6',
    destination: 'Mosman Bay',
    location: 'Mosman Bay Wharf',
    speed: '11.6 km/h',
    heading: '46° NE',
    coordinates: {lat: '-33.838466', lon: '151.231931'},
    stops: [
      {stop: 'Mosman Bay Wharf', eta: 'Now'},
      {stop: 'Old Cremorne', eta: '5 min'},
      {stop: 'South Mosman', eta: '7 min'},
      {stop: 'Cremorne Point', eta: '12 min'},
      {stop: 'Circular Quay', eta: '20 min'}
      ],
    ferry_info: 'Something about this ferry. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At volutpat diam ut venenatis tellus. Non arcu risus quis varius quam quisque id. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed. Morbi tristique senectus et netus et malesuada fames ac. Consequat interdum varius sit amet mattis vulputate enim. Elementum integer enim neque volutpat ac tincidunt vitae semper quis.\nVel quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Suspendisse ultrices gravida dictum fusce ut placerat orci. Enim sed faucibus turpis in. Magna fringilla urna porttitor rhoncus dolor purus non enim praesent. Facilisi cras fermentum odio eu feugiat. Sem integer vitae justo eget magna fermentum iaculis eu. Turpis cursus in hac habitasse platea dictumst quisque sagittis. Bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim.\nLuctus accumsan tortor posuere ac ut consequat semper viverra nam. In aliquam sem fringilla ut morbi tincidunt augue interdum velit. Hac habitasse platea dictumst vestibulum rhoncus. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus. Orci nulla pellentesque dignissim enim sit amet venenatis.',
    class_info: 'This ferry class is great! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At volutpat diam ut venenatis tellus. Non arcu risus quis varius quam quisque id. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed. Morbi tristique senectus et netus et malesuada fames ac. Consequat interdum varius sit amet mattis vulputate enim. Elementum integer enim neque volutpat ac tincidunt vitae semper quis.\nVel quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Suspendisse ultrices gravida dictum fusce ut placerat orci. Enim sed faucibus turpis in. Magna fringilla urna porttitor rhoncus dolor purus non enim praesent. Facilisi cras fermentum odio eu feugiat. Sem integer vitae justo eget magna fermentum iaculis eu. Turpis cursus in hac habitasse platea dictumst quisque sagittis. Bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim.\nLuctus accumsan tortor posuere ac ut consequat semper viverra nam. In aliquam sem fringilla ut morbi tincidunt augue interdum velit. Hac habitasse platea dictumst vestibulum rhoncus. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus. Orci nulla pellentesque dignissim enim sit amet venenatis.',
    images: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150'] 
  }
]);

export default getData;
