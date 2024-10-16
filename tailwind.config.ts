import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme"
const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	maxWidth: {
		container: "1440px",
		contentContainer: "1140px",
		containerSmall: "1024px",
		containerxs: "768px",
	},
  	extend: {
		fontFamily: {
			bodyFont: ["Poppins", "sans-serif"],
			titleFont: ["Poppins", "sans-serif"],
		},
		screens: {
			xs: "320px",
			sm: "375px",
			sml: "500px",
			md: "667px",
			mdl: "768px",
			lg: "960px",
			lgl: "1024px",
			xl: "1280px",
		},
		
  		colors: {
			bodyColor: "#0A192F",
			textGreen: "#64ffda",
			textLight: "#ccd6f6",
			textDark: "#8892b0",
			hoverColor: "rgba(100,255,218,0.1)",
			bgLight: "#112240",
			
			bgColor: "#ffffff",
			bodyColorLight: "#224d5a",
			textWall: "#224d5a",
			hoverDark: "#36866b",
			textPlant: "#63be47",
			textBright: "#99c9d1",
			textHolo: "#5a2222",
			hoverLight: "#eeeeee",
			textDarker: "#224d5a",

  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
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
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		animation: {
			"spin-slow": "spin 100s linear infinite",
			"reverse-spin": "reverse-spin 15s linear infinite",
			"spin-ease": "reverse-spin 5s ease-in-out",
			"border": "spin 4s linear infinite"
		},
		keyframes: {
			"reverse-spin": {
				from : {
					transform: "rotate(360deg)"
					}
			},
			"border": {
				from : {
				transform: "rotate(0deg)"
				},
				to : {
				transform: "rotate(360deg)"
				}
			}
		},
		boxShadow: {
			greenShadow: "0px 0px 188px -14px rgba(237, 255, 32, 1)",
			testShadow: "11px 0px 13px -15px rgba(0, 0, 0, 1)",
		}
  	},
	plugins: [require("tailwindcss-animate")],
  },
};
export default config;
