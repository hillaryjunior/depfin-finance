import dynamic from "next/dynamic"
import Header from "../components/Header"
import Banner from '../components/Banner'

const Section = dynamic(() => import("../components/Section"), {
  loading: () => <div style={{ minHeight: "600px" }}>Loading section...</div>,
  ssr: false,
})

const Queries = dynamic(() => import("../components/Queries"), {
  loading: () => <div style={{ minHeight: "400px" }}>Loading queries...</div>,
  ssr: false,
})

const Fab = dynamic(() => import("../utils/Fab"), {
  ssr: false, // ❌ no need for SSR here; it's a floating button
})

const Footer = dynamic(() => import("../components/Footer"), {
  loading: () => <div>Loading footer...</div>,
  ssr: false,
})

function HomeLayout() {
  return (
    <>
      <Header />
      <Banner />
      <Section />
      <Fab />
      <Queries/>
      <Footer />
    </>
  );
}

export default HomeLayout;
