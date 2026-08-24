import { useState } from "react";

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const galleryItems = [
    {
      title: "Luxury Living Room",
      category: "Living Room",
      image:
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    },
    {
      title: "Modern Modular Kitchen",
      category: "Kitchen",
      image:
        "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg",
    },
    {
      title: "Elegant Master Bedroom",
      category: "Bedroom",
      image:
        "https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg",
    },
    {
      title: "Contemporary Dining Space",
      category: "Dining",
      image:
        "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg",
    },
    {
      title: "Modern Office Interior",
      category: "Office",
      image:
        "https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg",
    },
    {
      title: "Premium Living Space",
      category: "Living Room",
      image:
        "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
    },
    {
      title: "Contemporary Kitchen",
      category: "Kitchen",
      image:
        "https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg",
    },
    {
      title: "Modern Bedroom",
      category: "Bedroom",
      image:
        "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg",
    },
    {
      title: "Minimal Living Room",
      category: "Living Room",
      image:
        "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg",
    },
    {
      title: "Warm Wooden Kitchen",
      category: "Kitchen",
      image:
        "https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg",
    },
    {
      title: "Luxury Bedroom Suite",
      category: "Bedroom",
      image:
        "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
    },
    {
      title: "Elegant Dining Interior",
      category: "Dining",
      image:
        "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg",
    },
    {
      title: "Creative Workspace",
      category: "Office",
      image:
        "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg",
    },
    {
      title: "Modern Family Lounge",
      category: "Living Room",
      image:
        "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg",
    },
    {
      title: "Luxury Home Interior",
      category: "Living Room",
      image:
        "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
    },
  ];

  const categories = [
    "All",
    "Living Room",
    "Kitchen",
    "Bedroom",
    "Dining",
    "Office",
  ];

  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === selectedCategory
        );

  return (
    <div className="gallery-page">

      {/* HERO */}

      <section className="gallery-hero">

        <div className="gallery-hero-overlay">

          <div className="container text-center text-white">

            <span className="gallery-label">
              OUR PORTFOLIO
            </span>

            <h1>
              Inspiration For
              <br />
              Your Dream Space
            </h1>

            <p>
              Explore our collection of thoughtfully
              designed interiors.
            </p>

          </div>

        </div>

      </section>


      {/* GALLERY */}

      <section className="gallery-section">

        <div className="container">

          {/* HEADING */}

          <div className="gallery-heading">

            <span className="section-label">
              DESIGN COLLECTION
            </span>

            <h2>
              Explore Our Interiors
            </h2>

            <p>
              From modern kitchens to luxurious bedrooms,
              discover ideas and inspiration for every space.
            </p>

          </div>


          {/* FILTER BUTTONS */}

          <div className="gallery-filters">

            {categories.map((category) => (

              <button
                key={category}
                type="button"
                className={
                  selectedCategory === category
                    ? "gallery-filter active"
                    : "gallery-filter"
                }
                onClick={() =>
                  setSelectedCategory(category)
                }
              >
                {category}
              </button>

            ))}

          </div>


          {/* GALLERY GRID */}

          <div className="row g-4">

            {filteredItems.map((item, index) => (

              <div
                className="col-xl-4 col-lg-4 col-md-6"
                key={index}
              >

                <div className="gallery-card">

                  <img
                    src={item.image}
                    alt={item.title}
                  />

                  <div className="gallery-overlay">

                    <span>
                      {item.category}
                    </span>

                    <h3>
                      {item.title}
                    </h3>

                  </div>

                </div>

              </div>

            ))}

          </div>


          {/* BOTTOM CTA */}

          <div className="gallery-bottom-cta">

            <div>

              <span>
                FOUND SOMETHING YOU LIKE?
              </span>

              <h3>
                Let&apos;s create a similar space for you.
              </h3>

            </div>

            <a href="/contact">
              Get Free Consultation →
            </a>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Gallery;