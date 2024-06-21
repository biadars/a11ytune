import { SnackAssetFile } from 'snack-sdk';

const assets: { [name: string]: SnackAssetFile } = {
  'assets/image.png': {
    type: 'ASSET',
    contents:
      'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/2f7d32b1787708aba49b3586082d327b'
  },
  'assets/audio.mp3': {
    type: 'ASSET',
    contents:
      'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/c9c43b458d6daa9771a7287cae9f5b47'
  },
  'assets/fonts/Inter-Black.otf': {
    type: 'ASSET',
    contents:
      'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/44b1541a96341780b29112665c66ac67'
  }
};

export default assets;
