/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'marquee': 'marquee 50s linear infinite',
        'spin':'spin 1s linear infinite',
        'ping':'ping 0.6s cubic-bezier(0, 0, 0.2, 1) infinite;',
        'upping':'upping 1s linear',
        'fadding':'fadding 1s linear',
      },

      keyframes: {
        marquee: {
          
          '100%': { transform: 'translateY(-50%)' },
         
        },

        spin :{
          '0%': {transform:'rotate(0deg)'},
          '100%': {transform:'rotate(360deg)'},
        },

        ping:{
          '75%':{transform: 'scale(2)'},
          '100%':{opacity:'0'},
        },

        upping:{
          '0%':{transform:'translateY(10%)', opacity:'0'},
          '100%':{transform:'translate(0%)', opacity:'1'},
        },

        fadding:{
          '0%':{opacity:'O'},
          '100%':{opacity:'1'},
        }

      },

      screens: {
        'sm': '340px',
        // => @media (max-width: 340px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },

      colors:{
        'useabl':'#144f93',
        'useayl':'#fcb040',
      },
      fontSize: {
      sm: ['24px', '24px'],
      '2sm':['34px','34px'],
      '4sm':['40px','40px'],
      base: ['16px', '24px'],
      lg: ['4vw', '5vw'],
      xl: ['26px', '33px'],
      '1xl':['2.2vw', '2.2vw'],
      '2xl': ['3.5vw', '3.8vw'],
      '4xl': ['4vw', '5vw'],
      },

      fontFamily:{
      'prompt': ['Prompt', 'sans-serif'],
      },

      fontWeight:{
        light :'300',
        medium : '500',
        semibold:'500',
        bold : '600',
      },

      
      
    },
  },

  plugins: [
    
  ],
}
