# lab-to-xyz

Converts CIE L\*a\*b\* colors to CIE 1931 XYZ.

## Installation

```sh
npm install --save lab-to-xyz
# or
yarn add lab-to-xyz
```

## Usage

```js
import labToXyz from "lab-to-xyz";

labToXyz([97.13824698129729, -21.555908334832285, 94.48248544644461]);
// [77, 92.78, 13.850000000000003];
```

You can also use UMD builds from unpkg:

```html
<script src="https://unpkg.com/lab-to-xyz/lib/lab-to-xyz.js"></script>
<script src="https://unpkg.com/lab-to-xyz/lib/lab-to-xyz.min.js"></script>
```

## License

MIT
