// 1. Getting the "white cross"
// F R' D' R F2

export default {
  whiteCross: [
    'FS-right',
    'RM-right',
    'DE-left',
    'RM-left',
    'FS-right',
    'FS-right',
  ],
}

export const STEPS = [
  { name: 'white cross' },
  { name: 'white corners' },
  { name: 'second layer' },
  { name: 'yellow cross' },
  { name: 'yellow edges' },
  { name: 'permute corners' },
  { name: 'orient corners' },
]
