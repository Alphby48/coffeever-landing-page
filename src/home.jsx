/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LandingPages = () => {
  const [quantity, setQuantity] = useState(3);
  const [email, setEmail] = useState("");
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "products", "newsletter"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileMenuOpen(false);
  };

  const decreaseQty = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQty = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="bg-light text-dark min-h-screen overflow-x-hidden">
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-light shadow-sm fixed w-full top-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <img
                src="/coffeever/coffeever-logo1.png"
                alt="coffeever"
                className="w-32"
              />
            </motion.div>
            <motion.div
              className="hidden md:flex space-x-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <button
                onClick={() => scrollToSection("home")}
                className={`text-sm font-medium transition ${
                  activeSection === "home"
                    ? "text-primary"
                    : "text-gray-600 hover:text-primary"
                }`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className={`text-sm font-medium transition ${
                  activeSection === "products"
                    ? "text-primary"
                    : "text-gray-600 hover:text-primary"
                }`}
              >
                Product
              </button>
              <button
                onClick={() => scrollToSection("newsletter")}
                className={`text-sm font-medium transition ${
                  activeSection === "newsletter"
                    ? "text-primary"
                    : "text-gray-600 hover:text-primary"
                }`}
              >
                Contact
              </button>
              <button className="text-sm font-medium text-gray-600 hover:text-primary transition">
                Shop
              </button>
            </motion.div>
            <motion.div
              className="flex items-center space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-600 hover:text-primary"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-600 hover:text-primary"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-gray-600 hover:text-primary"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {mobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </motion.button>
            </motion.div>
          </div>
        </div>
        {/* Mobile Menu */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: mobileMenuOpen ? "auto" : 0,
            opacity: mobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden overflow-hidden bg-light border-t"
        >
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection("home")}
              className={`block w-full text-left px-4 py-2 rounded transition ${
                activeSection === "home"
                  ? "bg-accent text-primary font-medium"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className={`block w-full text-left px-4 py-2 rounded transition ${
                activeSection === "products"
                  ? "bg-accent text-primary font-medium"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Product
            </button>
            <button
              onClick={() => scrollToSection("newsletter")}
              className={`block w-full text-left px-4 py-2 rounded transition ${
                activeSection === "newsletter"
                  ? "bg-accent text-primary font-medium"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Contact
            </button>
            <button className="block w-full text-left px-4 py-2 rounded text-gray-600 hover:bg-gray-100 transition">
              Shop
            </button>
          </div>
        </motion.div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-12 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div>
                <motion.h1
                  className="font-bebas text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-none text-primary mb-4"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  //   viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  SINGLE ORIGIN FROM LAWU MOUNTAIN
                </motion.h1>
                <motion.p
                  className="text-gray-600 mb-2 text-sm"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  //   viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  BEST QUALITY BEANS
                </motion.p>
                <motion.p
                  className="text-gray-700 mb-6 max-w-md text-sm leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  //   viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Biji kopi dipetik langsung dari perkebunan kopi di Gunung Lawu
                  dan kemudian disangrai menjadi kopi dengan kualitas terbaik.
                </motion.p>
                <motion.div
                  className="flex items-center space-x-4 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  //   viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <span className="text-2xl sm:text-3xl font-bold text-primary">
                    Rp 20.000
                  </span>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  //   viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-accent hover:opacity-90 text-[#fff] px-6 sm:px-10 py-2 rounded font-medium transition whitespace-nowrap"
                  >
                    BUY NOW
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              //   viewport={{ once: true }}
            >
              <div className="relative flex justify-center">
                <motion.img
                  src="/coffeever/single-origin2.jpg"
                  alt="Peanut Butter"
                  className="w-full max-w-md"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* New Merchandise Banner */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-primary py-8 my-12"
        // viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div
              className="text-secondary mb-6 md:mb-0"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              //   viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-sm uppercase tracking-wider mb-2">
                COFFEEVER PRODUCT
              </p>
              <h2 className="font-bebas text-3xl sm:text-4xl lg:text-5xl">
                IN NEW BEANS
                <br />
                IS READY FOR ORDER
              </h2>
            </motion.div>
            <div className="flex space-x-4">
              <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                // viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                src="/coffeever/arabica-3.jpg"
                alt="Product 1"
                className="w-24 sm:w-32 md:w-36 h-32 sm:h-36 md:h-44 object-cover rounded shadow-lg cursor-pointer"
              />
              <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                // viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.1, rotate: -5 }}
                src="/coffeever/robusta-3.jpg"
                alt="Product 2"
                className="w-24 sm:w-32 md:w-36 h-32 sm:h-36 md:h-44 object-cover rounded shadow-lg cursor-pointer"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Products Section */}
      <section id="products" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
            // viewport={{ once: true }}
          >
            <span className="font-bebas text-2xl tracking-wider text-primary">
              COFFEEVER
            </span>
            <p className="text-sm text-gray-600 mt-2 max-w-2xl mx-auto">
              Coffeever adalah spesialis penyedia biji kopi premium yang berasal
              dari salah satu gunung paling ikonik di Pulau Jawa, Gunung Lawu.
              Dengan kondisi tanah vulkanik yang kaya nutrisi dan iklim mikro
              yang ideal, kami menghasilkan biji kopi dengan profil rasa yang
              unik dan konsisten.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="order-2 md:order-1"
              //   viewport={{ once: true }}
            >
              <motion.img
                src="/coffeever/arabica-2.jpg"
                alt="Craft Beer Mix"
                className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: isMobile ? 10 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="order-1 md:order-2"
              //   viewport={{ once: true }}
            >
              <motion.h3
                className="font-bebas text-3xl sm:text-4xl text-primary mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                // viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                ARABICA COFFEE BEANS.
              </motion.h3>
              <motion.h5
                className="font-bebas  text-xl sm:text-2xl text-primary mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                // viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Rp 20.000/100 gr
              </motion.h5>
              <motion.p
                className="text-gray-700 mb-6 text-sm leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                // viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Arabika Lawu kami hadirkan langsung dari kemitraan dengan petani
                lokal di ketinggian 1.300+ mdpl lereng Gunung Lawu. Ditanam di
                tanah vulkanik yang kaya nutrisi, biji kopi ini menawarkan
                perpaduan sempurna antara aroma floral yang elegan, keasaman
                segar (citric), dan sentuhan rasa karamel yang manis di akhir.
                Pilihan tepat bagi Anda yang menginginkan kopi kualitas premium
                dengan karakter rasa yang bersih (clean) dan autentik.
              </motion.p>
              <motion.button
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.95 }}
                className="text-primary font-medium hover:underline text-sm whitespace-nowrap"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                // viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                LEARN MORE →
              </motion.button>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              //   viewport={{ once: true }}
            >
              <motion.h3
                className="font-bebas text-3xl sm:text-4xl text-primary mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                // viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                ROBUSTA COFFEE BEANS.
              </motion.h3>
              <motion.h5
                className="font-bebas  text-xl sm:text-2xl text-primary mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                // viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Rp 20.000/100 gr
              </motion.h5>
              <motion.p
                className="text-gray-700 mb-6 text-sm leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                // viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Robusta Lawu kami menawarkan kekuatan rasa khas pegunungan yang
                bold dan intens, namun tetap memiliki sensasi nutty serta
                aftertaste cokelat yang manis. Dipetik langsung dari kebun
                petani lokal di lereng bawah Gunung Lawu, biji kopi ini memiliki
                tingkat keasaman yang rendah dan tekstur (body) yang tebal.
                Sangat ideal bagi Anda yang mencari suntikan energi maksimal
                atau sebagai bahan dasar kopi susu kekinian yang kaya rasa.
              </motion.p>
              <motion.button
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.95 }}
                className="text-primary font-medium hover:underline text-sm whitespace-nowrap"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                // viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                LEARN MORE →
              </motion.button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              //   viewport={{ once: true }}
            >
              <motion.img
                src="/coffeever/robusta-2.jpg"
                alt="Milk Chocolate Raisins"
                className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
                whileHover={{ scale: 1.05, rotate: -2 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        id="newsletter"
        className="bg-[#f0efee9f] m-16 py-16 rounded-md max-sm:m-0"
        // viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div
              className="mb-6 md:mb-0 md:mr-6 lg:mr-8"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              //   viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="font-bebas text-xl tracking-wider text-primary block mb-2">
                COFFEEVER
              </span>
              <h3 className="font-bebas text-2xl sm:text-3xl lg:text-4xl text-primary">
                GET UPDATED NEWS
              </h3>
              <p className="text-gray-700 text-sm mt-2">
                Get the latest stories, product news and special offers
              </p>
            </motion.div>
            <motion.div
              className="flex w-full md:w-auto"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              //   viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <input
                type="email"
                placeholder="YOUR EMAIL ADDRESS"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-3 flex-1 md:w-48 lg:w-64 text-sm border-none outline-none rounded-l"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary hover:opacity-90 text-white px-4 sm:px-6 py-3 font-medium transition text-sm uppercase rounded-r whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-light py-12 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              className="mb-6 md:mb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              //   viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="/coffeever/coffeever-logo1.png"
                alt="coffeever"
                className="w-28"
              />
              {/* <div className="flex items-center space-x-4 mt-4">
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8 h-8 bg-dark rounded-full flex items-center justify-center text-white hover:opacity-80 transition"
                >
                  <span className="text-xs">f</span>
                </motion.button>
                <span className="text-sm text-gray-600">SERØY FOOD</span>
              </div> */}
            </motion.div>
            <motion.div
              className="flex flex-wrap justify-center md:justify-normal gap-6 md:gap-8 text-sm mb-6 md:mb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              //   viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-600 hover:text-primary transition whitespace-nowrap"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="text-gray-600 hover:text-primary transition whitespace-nowrap"
              >
                Product
              </button>
              <button
                onClick={() => scrollToSection("newsletter")}
                className="text-gray-600 hover:text-primary transition whitespace-nowrap"
              >
                Contact
              </button>
              <button className="text-gray-600 hover:text-primary transition whitespace-nowrap">
                Shop
              </button>
            </motion.div>
            <motion.div
              className="mt-6 md:mt-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              //   viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a
                href="https://wa.me/62881026636294"
                target="_blank"
                className="text-xl sm:text-2xl font-bold text-primary text-center md:text-left"
              >
                0881026636294
              </a>
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPages;
