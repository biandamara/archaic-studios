import React from "react";

// import components
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

function Home() {
  return (
    <body>
      {/* header - start */}
      <header>
        <Navigation />
      </header>
      {/* header - end */}

      {/* sacrion - start */}
      <div></div>
      {/* sacrion - end */}

      {/* footer - start */}
      <Footer />
      {/* footer - end */}
    </body>
  );
}

export default Home;
