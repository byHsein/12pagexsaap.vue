/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'Custom':'#747474',
      'white':'#ffff',
      'red-600':'rgb(220 38 38)',
      'orange-ctm':'#FF3D00',
      'blue-violet':'#3B00AD',
      'dark':'#1F1F1F'
    },
    backgroundColor:{
      'blue-violet':'#3B00AD',
      'Custom-orange':'#FF3D00',
      'violet-700':'rgb(109 40 217)',
      'orange-600':' rgb(234 88 12)',
      'orange-500':'rgb(249 115 22)',
      'blue-200':' #91E2F9',
      'yellow-400':' rgb(250 204 21)',
      'orange-800':'rgb(154 52 18)',
      'white':'#ffff',
      'indigo-800':'rgb(55 48 163)',
      'white-custom':'#F9FAFF',
      'slate-200':' rgb(226 232 240)',
      'white-500':' #EDF0FF',
      'orange-400':' rgb(251 146 60)',
      'gray-800':'rgb(31 41 55) '
    },
    padding:{
      '42':'42px',
      '32':'128px',
      '5':'20px',
      '36':'114px',
      '40':'160',
      '10':'40px',
      '3':'12px',
      '4':'16px',
      '8':'32px',
      '14':'56px',
      '0':'0px',
      '6':'24px',
      '7':'28px',
      '96':'96px'
    }
  },
  plugins: [],
}

