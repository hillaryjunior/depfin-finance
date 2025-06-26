import dynamic from 'next/dynamic'

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

const Footer = dynamic(() => import('../components/Footer'), {
  loading: () => <div>Loading Footer...</div>,
})

function PolicyLayout({ content, title }) {
  return (
    <div>
      <Header />
      <Hero content={`Depfin Finance ${title}`} />

      <div className="policy" dangerouslySetInnerHTML={{ __html: content }} />

      <Queries
        image="https://res.cloudinary.com/de0gawheh/image/upload/v1645273968/pexels-photo-8867630_1_hxo02o.jpg"
        contact
      />
      <Footer />
    </div>
  )
}

export default PolicyLayout
