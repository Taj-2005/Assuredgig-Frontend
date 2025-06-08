/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			dark: {
  				DEFAULT: '#0a0f1a',
  				surface: '#181f2a',
  				card: '#131926'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				dark: '#155e75',
  				light: '#a7f3d0',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				light: '#003B52',
  				dark: '#00141B',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				light: '#ff5efc',
  				dark: '#cc00b8',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			glass: 'rgba(20, 30, 50, 0.7)',
  			border: 'hsl(var(--border))',
  			background: 'hsl(var(--background))',
  			surface: {
  				DEFAULT: '#FFFFFF'
  			},
  			success: {
  				DEFAULT: '#00D9A6'
  			},
  			warning: {
  				DEFAULT: '#FFB627'
  			},
  			error: {
  				DEFAULT: '#FF4757'
  			},
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			sans: [
  				'Inter',
  				'sans-serif'
  			],
  			display: [
  				'Poppins',
  				'sans-serif'
  			]
  		},
  		boxShadow: {
  			'neo-flat': '0 4px 32px 0 rgba(0,230,255,0.10), 0 1.5px 4px 0 rgba(0,0,0,0.10)',
  			'neo-glow': '0 0 16px 2px #00e6ff, 0 0 32px 8px #ff00ea33',
  			glass: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  			float: '0 22px 40px rgba(0, 30, 41, 0.2)',
  			hover: '0 30px 60px rgba(0,230,255,0.18)',
  			'neo-subtle': '0 2px 8px 0 rgba(0,0,0,0.08), 0 1.5px 4px 0 rgba(0,0,0,0.06)',
  			'neo-pressed': 'inset 0 2px 8px 0 rgba(0,0,0,0.12)'
  		},
  		borderRadius: {
  			xl: '1rem',
  			'2xl': '1.5rem',
  			'3xl': '2rem',
  			'4xl': '3rem',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		animation: {
  			float: 'float 6s ease-in-out infinite',
  			'pulse-subtle': 'pulse-subtle 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  			'slide-up': 'slide-up 0.6s ease-out',
  			'fade-in': 'fade-in 0.8s ease-out',
  			'gradient-x': 'gradient-x 15s ease infinite',
  			'gradient-y': 'gradient-y 15s ease infinite',
  			'gradient-xy': 'gradient-xy 15s ease infinite'
  		},
  		keyframes: {
  			float: {
  				'0%, 100%': {
  					transform: 'translateY(0)'
  				},
  				'50%': {
  					transform: 'translateY(-10px)'
  				}
  			},
  			'pulse-subtle': {
  				'0%, 100%': {
  					opacity: 1
  				},
  				'50%': {
  					opacity: 0.8
  				}
  			},
  			'slide-up': {
  				'0%': {
  					transform: 'translateY(20px)',
  					opacity: 0
  				},
  				'100%': {
  					transform: 'translateY(0)',
  					opacity: 1
  				}
  			},
  			'fade-in': {
  				'0%': {
  					opacity: 0
  				},
  				'100%': {
  					opacity: 1
  				}
  			},
  			'gradient-y': {
  				'0%, 100%': {
  					'background-size': '400% 400%',
  					'background-position': 'center top'
  				},
  				'50%': {
  					'background-size': '200% 200%',
  					'background-position': 'center center'
  				}
  			},
  			'gradient-x': {
  				'0%, 100%': {
  					'background-size': '200% 200%',
  					'background-position': 'left center'
  				},
  				'50%': {
  					'background-size': '200% 200%',
  					'background-position': 'right center'
  				}
  			},
  			'gradient-xy': {
  				'0%, 100%': {
  					'background-size': '400% 400%',
  					'background-position': 'left center'
  				},
  				'50%': {
  					'background-size': '200% 200%',
  					'background-position': 'right center'
  				}
  			}
  		},
  		backdropBlur: {
  			xs: '2px'
  		},
  		backgroundImage: {
  			'hero-gradient': 'radial-gradient(ellipse at 50% 0%, #00e6ff33 0%, #0a0f1a 80%)'
  		},
  		backgroundSize: {
  			'size-200': '200% 200%'
  		},
  		backgroundPosition: {
  			'pos-0': '0% 0%',
  			'pos-100': '100% 100%'
  		}
  	}
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
      require("tailwindcss-animate")
],
} 