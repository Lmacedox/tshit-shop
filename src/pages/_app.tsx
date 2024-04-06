import { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import LogoSvg from '../assets/logo.svg'
import Image from 'next/image'
import { Container, Header } from '@/styles/pages/app'

export default function App({ Component, pageProps }: AppProps) {
  globalStyles()
  return (
    <Container>
      <Header>
        <Image src={LogoSvg} alt='Logo T-ShirtShop' />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
