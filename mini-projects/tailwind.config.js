/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",'./**/*.html', "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
      extend: {
          // screens: {
          //     sm: '576px',
          //     md: '768px',
          //     lg: '976px',
          //     xl: '1440px',
          //   },
          fontFamily: {
              'Roboto': ['Roboto', 'sans-serif']
          },
          colors: {
              'custom-blue': '#60a5fa',
              'custom-purple': '#a78bfa',
              'header': 'rgb(137, 196, 196)',
              'box': '#1e293b',
              'border': '#334155',
              'tip': 'linear-gradient(to right, #351d54, #bdabf4)',
              'tip-para': 'rgba(89, 43, 150, 0.8)',
              'tip-text': 'rgba(44,41,88,255)',
              'tip-shadow': 'rgba(167, 181, 226, 0.4)',
              'tipCalc': 'rgb(148, 164, 219)',
              'savings': 'linear-gradient(180deg, rgba(15, 23, 42, 0) 0%, #0f172a 100%)',
              
          },
          backgroundImage: {
              'header': "linear-gradient(135deg, rgba(84, 146, 146, 0.95)20%, rgba(1, 72, 72, 0.95)100%)",
              'loan': "linear-gradient(to left, #2b342f, #697c72)",
              'loanCalc': 'linear-gradient(to left, #818985, #adbcb3)',
              'tip-buddy': "url('./images/tipBuddy.jpg')",
              'text-gradient': 'linear-gradient(to right, #351d54, #bdabf4)',
              'calc-gradient': 'linear-gradient(to right, #906ac1, #a78bfa)',
              'save-gradient': 'linear-gradient(to right, #906ac1, #a78bfa)',

          },
          fontSize: {
              '1.5xl': '1.3rem'
          },
          backgroundSize: {
              '40': '40%',
              '55': '55%'
          },
          animation: {
              'progress-move': 'move 2s linear infinite',
          },
          keyframes: {
              move: {
                  '0%': { backgroundPosition: '0 0' },
                  '100%': { backgroundPosition: '50px 50px' },
              },
          }
      }
  },
    plugins: [
        function ({ addUtilities }) {
            addUtilities({
                '.text-gradient': {
                    backgroundImage: 'linear-gradient(to right, #351d54, #bdabf4)',
                    '-webkit-background-clip': 'text',
                    '-webkit-text-fill-color': 'transparent',
                },
                '.calc-gradient': {
                    backgroundImage: 'linear-gradient(to right, #906ac1, #a78bfa)',
                    '-webkit-background-clip': 'text',
                    '-webkit-text-fill-color': 'transparent',
                },
                '.save-gradient': {
                    backgroundImage: 'linear-gradient(to right, #60a5fa, #a78bfa)',
                    '-webkit-background-clip': 'text',
                    '-webkit-text-fill-color': 'transparent',
                }
            });
        },
  ],
}
