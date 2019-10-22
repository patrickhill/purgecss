module.exports = {
  whitelist: [
    'rtl',
    'home',
    'blog',
    'archive',
    'date',
    'error404',
    'logged-in',
    'admin-bar',
    'no-customize-support',
    'custom-background',
    'wp-custom-logo',
    'alignnone',
    'alignright',
    'alignleft',
    'wp-caption',
    'wp-caption-text',
    'screen-reader-text',
    'comment-list',
  ],
  whitelistPatterns: [
    /^search(-.*)?$/,
    /^(.*)-template(-.*)?$/,
    /^(.*)?-?single(-.*)?$/,
    /^postid-(.*)?$/,
    /^attachmentid-(.*)?$/,
    /^attachment(-.*)?$/,
    /^page(-.*)?$/,
    /^(post-type-)?archive(-.*)?$/,
    /^author(-.*)?$/,
    /^category(-.*)?$/,
    /^tag(-.*)?$/,
    /^tax-(.*)?$/,
    /^term-(.*)?$/,
    /^(.*)?-?paged(-.*)?$/,
  ],
};