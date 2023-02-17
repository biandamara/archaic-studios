import React from "react";

// import components
import Navigation from "../components/Navigation";
// import Hero from "../components/Hero";
import Follow from "../components/Follow";
import Footer from "../components/Footer";

function Home() {
  return (
    <body>
      {/* header - start */}
      <header>
        {/* navigation bar - start */}
        <Navigation />
        {/* navigation bar - end */}

        {/* hero - start */}
        {/* <Hero /> */}
        {/* hero - end */}
      </header>
      {/* header - end */}

      {/* section - start */}
      <section>
        {/* follow us - start */}
        <Follow />
        {/* follow us - end */}
      </section>
      {/* section - end */}

      {/* footer - start */}
      <footer>
        <Footer />
      </footer>
      {/* footer - end */}
    </body>
  );
}

export default Home;
