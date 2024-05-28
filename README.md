# WATonomous Wiki website

The [website](https://wiki.watonomous.ca) for WATonomous. Website skeleton provided by proud members of the WATonomous WATcloud.

## Contributing

### Getting started

1. Clone the repo
2. Install dependencies:
    ```bash
    pip install -r requirements.txt
    npm install
    ```
3. Run the development server:
    ```bash
    npm run dev
    ```

### Image optimization

Images should be added to `public/assets`. To reduce the size of the code base while we work on an image server, images should be optimized before being checked in. To do this, run:

```bash
./node_modules/.bin/optimizt <path_to_image> --avif
```

this will create a `.avif` file next to the original image. Place the optimized image in `public/assets`.

During the build process, the `.avif` file will be converted to a `.webp` file and a `.jpg` file, a Typescript file will be generated to
statically import the images. In the code, images should be used like this:

```tsx
import Picture from '@/components/picture'
import { ComputerDark } from '@/build/fixtures/images'

<Picture alt="Abstract Computer (Dark)" image={ComputerDark} />
```

The Picture component will tell the browser to automatically choose the best image format for the user's device.
