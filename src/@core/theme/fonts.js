import { Alumni_Sans_Pinstripe, Sulphur_Point } from 'next/font/google'


const logo = Alumni_Sans_Pinstripe({
  weight: '400',
  subsets: ['latin'],
  display: 'auto',
  style: ['normal'],
  variable: '--font-logo'
})

const header = Sulphur_Point({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  display: 'auto',
  style: 'normal',
  variable: '--font-header'
})

const fonts = {
  logo,
  header,
  body: header,
  subtitle: header
}

export default fonts
