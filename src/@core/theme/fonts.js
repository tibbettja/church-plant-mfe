import { Julius_Sans_One, Urbanist } from 'next/font/google'


const header = Julius_Sans_One({
  weight: '400',
  subsets: ['latin'],
  display: 'auto',
  style: ['normal'],
  variable: '--font-header'
})

const body = Urbanist({
  weight: ['100','200','300','400','500','600','700','800','900'],
  subsets: ['latin'],
  display: 'auto',
  style: ['normal','italic'],
  variable: '--font-body'
})

const fonts = {
  header,
  body
}

export default fonts
