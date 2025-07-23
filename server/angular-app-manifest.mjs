
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://Vishwa2004-S.github.io/Tracking/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Tracking"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1183, hash: '9bd37dd96666bb6bfff25514d7389189ae6c740b37f7b2cbdcd77b267852415b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 991, hash: 'c7d8047f185a6be973c738d22a3b84ccea4f51fa53fa630b587b13a20ef0bb17', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 9307, hash: 'a01b58dcab45128b1b4622bc24421dac4c6f90bd0adcb374e4b22a2866918ab6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-AT5HTVJG.css': {size: 997, hash: '26p+JqdsIto', text: () => import('./assets-chunks/styles-AT5HTVJG_css.mjs').then(m => m.default)}
  },
};
