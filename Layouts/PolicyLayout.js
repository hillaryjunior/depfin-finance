import dynamic from 'next/dynamic'
import Footer from '../components/Footer'

// 🔹 Dynamic imports with loading placeholders
const Header = dynamic(() => import('../components/Header'), {
  loading: () => <div>Loading Header...</div>,
})

const Hero = dynamic(() => import('../components/Hero'), {
  loading: () => <div>Loading Hero...</div>,
})

const Queries = dynamic(() => import('../components/Queries'), {
  loading: () => <div>Loading Queries...</div>,
})

function PolicyLayout({ content, title }) {
  return (
    <div>
      <Header />
      <Hero content={`Depfin Finance ${title}`} />

      <div className='policy' dangerouslySetInnerHTML={{ __html: content }} />

      <Queries contact />
      <Footer />
    </div>
  )
}

export default PolicyLayout
