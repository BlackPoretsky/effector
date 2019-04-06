//@flow

const common = {
  author: 'Zero Bias',
  maintainers: [
    {
      name: 'Zero Bias',
      email: 'ribkatt@gmail.com',
    },
    {
      name: 'goodmind',
      email: 'andwebar@gmail.com',
    },
  ],
  sideEffects: false,
  license: 'MIT',
  devDependencies: {},
  scripts: {},
  repository: 'https://github.com/zerobias/effector',
  bugs: 'https://github.com/zerobias/effector/issues',
  homepage: 'https://effector.now.sh',
  engines: {
    node: '>=6.0.0',
  },
}

const version = {
  effector: '0.18.5-beta.1',
  'effector-react': '0.18.7',
  'effector-vue': '0.18.3',

  'bs-effector': '0.18.2',
  'bs-effector-react': '0.18.3',

  '@effector/babel-plugin': '0.1.0',
  '@effector/babel-plugin-react': '0.0.3',
  '@effector/forms': '0.0.1',
}

const getFiles = name => [
  'README.md',
  'LICENSE',
  'index.d.ts',
  'index.js.flow',
  //js files
  `${name}.es.js`,
  `${name}.cjs.js`,
  `${name}.umd.js`,
  //mappings
  `${name}.es.js.map`,
  `${name}.cjs.js.map`,
  `${name}.umd.js.map`,
  //typings
  `${name}.cjs.js.flow`,
  `${name}.es.js.flow`,
  `${name}.umd.js.flow`,
]

const dependsOnEffector = {
  effector: `^${version.effector}`,
}

export default {
  effector: {
    name: 'effector',
    version: version['effector'],
    description: 'Application state manager',
    main: 'effector.cjs.js',
    module: 'effector.es.js',
    'umd:main': 'effector.umd.js',
    'jsnext:main': 'effector.es.js',
    typings: 'index.d.ts',
    dependencies: {
      'symbol-observable': '^1.2.0',
    },
    files: getFiles('effector'),
    keywords: [
      'data',
      'datastructure',
      'functional',
      'collection',
      'state',
      'store',
      'reactive',
      'streams',
      'actions',
      'effects',
      'redux',
    ],
    ...common,
  },
  'effector-react': {
    name: 'effector-react',
    version: version['effector-react'],
    description: 'React bindings for effector',
    main: 'effector-react.cjs.js',
    module: 'effector-react.es.js',
    'umd:main': 'effector-react.umd.js',
    'jsnext:main': 'effector-react.es.js',
    typings: 'index.d.ts',
    peerDependencies: {
      react: '^16.8.0',
      effector: '*',
    },
    files: getFiles('effector-react'),
    keywords: [
      'data',
      'datastructure',
      'functional',
      'collection',
      'state',
      'store',
      'reactive',
      'streams',
      'actions',
      'effects',
      'redux',
      'react',
    ],
    ...common,
  },
  'effector-vue': {
    name: 'effector-vue',
    version: version['effector-vue'],
    description: 'Vue bindings for effector',
    main: 'effector-vue.cjs.js',
    module: 'effector-vue.es.js',
    'umd:main': 'effector-vue.umd.js',
    'jsnext:main': 'effector-vue.es.js',
    typings: 'index.d.ts',
    peerDependencies: {
      vue: '*',
      effector: '*',
    },
    files: getFiles('effector-vue'),
    keywords: [
      'data',
      'datastructure',
      'functional',
      'collection',
      'state',
      'store',
      'reactive',
      'streams',
      'actions',
      'effects',
      'redux',
      'vue',
    ],
    ...common,
  },
  'bs-effector': {
    name: 'bs-effector',
    version: version['bs-effector'],
    description: 'Reason bindings for effector',
    dependencies: {},
    peerDependencies: dependsOnEffector,
    files: ['src/Effector.re', 'bsconfig.json', 'LICENSE', 'README.md'],
    keywords: [
      'bucklescript',
      'reason',
      'bsb',
      'data',
      'datastructure',
      'functional',
      'collection',
      'state',
      'store',
      'reactive',
      'streams',
      'actions',
      'effects',
      'redux',
    ],
    ...common,
  },
  'bs-effector-react': {
    name: 'bs-effector-react',
    version: version['bs-effector-react'],
    description: 'Reason bindings for effector-react',
    peerDependencies: {
      'reason-react': '*',
      effector: '*',
    },
    files: ['src/EffectorReact.re', 'bsconfig.json', 'LICENSE', 'README.md'],
    keywords: [
      'bucklescript',
      'reason',
      'bsb',
      'data',
      'datastructure',
      'functional',
      'collection',
      'state',
      'store',
      'reactive',
      'streams',
      'actions',
      'effects',
      'redux',
      'react',
    ],
    ...common,
  },
  '@effector/babel-plugin': {
    name: '@effector/babel-plugin',
    description: 'Call setStoreName on createStore calls',
    version: version['@effector/babel-plugin'],
    repository: 'https://github.com/zerobias/effector',
    main: 'index.js',
    files: ['index.js'],
    peerDependencies: dependsOnEffector,
    keywords: ['effector', 'babel-plugin', 'displayName'],
    publishConfig: {
      access: 'public',
    },
    ...common,
  },
  '@effector/babel-plugin-react': {
    name: '@effector/babel-plugin-react',
    description: 'Add displayName to createComponent call',
    version: version['@effector/babel-plugin-react'],
    repository: 'https://github.com/zerobias/effector',
    main: 'index.js',
    files: ['index.js'],
    peerDependencies: {
      'effector-react': '*',
    },
    keywords: ['effector', 'react', 'babel-plugin', 'displayName'],
    publishConfig: {
      access: 'public',
    },
    ...common,
  },
  '@effector/forms': {
    name: '@effector/forms',
    description: '',
    version: version['@effector/forms'],
    main: 'forms.cjs.js',
    module: 'forms.es.js',
    'umd:main': 'forms.umd.js',
    'jsnext:main': 'forms.es.js',
    typings: 'index.d.ts',
    repository: 'https://github.com/zerobias/effector',
    main: 'index.js',
    files: getFiles('forms'),
    dependencies: dependsOnEffector,
    keywords: ['effector', 'forms'],
    private: true,
    ...common,
  },
}
