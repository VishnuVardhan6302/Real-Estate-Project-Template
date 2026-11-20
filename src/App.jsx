
import React, { useEffect, useState } from "react";
import {
  Menu, X, ArrowUpRight, ArrowRight, Instagram, Facebook, Linkedin,
  Play, BedDouble, Bath, Maximize, MapPin, CheckCircle, ArrowLeft,
  Building2, Car, Layers, Briefcase, Sofa
} from "lucide-react";

import "./App.css";

// --------------------------------------------------
// PROPERTY IMAGES
// --------------------------------------------------

const IMAGES_3D = {
  heroVilla: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85",

  modernHouse1: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85",
  modernHouse2: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
  modernHouse3: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=85",

  // NEW RENTAL PROPERTY IMAGES
  rentalHome1: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=85",
  rentalHome2: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
  rentalHome3: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=85",

  office3d: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85",
  retail3d: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
  building3d: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",

  interiorTour3d: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
  contactInterior3d: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85"
};

// --------------------------------------------------
// PROPERTY DATA - HOMES FOR SALE
// --------------------------------------------------

const properties = [
  {
    id: 1,
    category: "sale",
    image: IMAGES_3D.modernHouse1,
    type: "Residential",
    address: "123 Anywhere St., Any City",
    price: "$1,250,000",
    beds: "3 Beds",
    baths: "2 Baths",
    area: "1,840 Sq Ft",
    title: "Modern Luxury Family Home",
    description: "Modern architecture paired with open living spaces, natural light, and high-end interior finishes.",
    features: [
      "Open living & dining area",
      "Equipped modern kitchen",
      "Private outdoor space",
      "Dedicated parking"
    ]
  },
  {
    id: 2,
    category: "sale",
    image: IMAGES_3D.modernHouse2,
    type: "Residential",
    address: "123 Anywhere St., Any City",
    price: "$895,000",
    beds: "2 Beds",
    baths: "2 Baths",
    area: "1,420 Sq Ft",
    title: "Contemporary City Residence",
    description: "Thoughtfully planned urban residence with floor-to-ceiling windows and clean contemporary lines.",
    features: [
      "Open-plan layout",
      "Contemporary kitchen",
      "Floor-to-ceiling windows",
      "Ample storage"
    ]
  },
  {
    id: 3,
    category: "sale",
    image: IMAGES_3D.modernHouse3,
    type: "Residential",
    address: "123 Anywhere St., Any City",
    price: "$1,475,000",
    beds: "4 Beds",
    baths: "3 Baths",
    area: "2,160 Sq Ft",
    title: "Elegant Premium Family Estate",
    description: "Expansive multi-bedroom estate built for effortless family living and indoor-outdoor entertaining.",
    features: [
      "Generous living room",
      "Designer kitchen",
      "Landscaped yard",
      "Private garage"
    ]
  }
];

// --------------------------------------------------
// PROPERTY DATA - HOMES FOR RENT
// --------------------------------------------------

const rentalProperties = [
  {
    id: "rent-1",
    category: "rent",
    image: IMAGES_3D.rentalHome1,
    type: "Residential Rental",
    address: "45 Green Avenue, Any City",
    price: "$2,500 / Month",
    beds: "3 Beds",
    baths: "2 Baths",
    area: "1,650 Sq Ft",
    title: "Modern Family Home for Rent",
    description: "Beautiful modern family home featuring spacious interiors, elegant architecture, large windows, and a peaceful outdoor environment.",
    features: [
      "Spacious living room",
      "Modern kitchen",
      "Private parking",
      "Landscaped garden"
    ]
  },
  {
    id: "rent-2",
    category: "rent",
    image: IMAGES_3D.rentalHome2,
    type: "Apartment for Rent",
    address: "78 City Center Road, Any City",
    price: "$1,800 / Month",
    beds: "2 Beds",
    baths: "2 Baths",
    area: "1,200 Sq Ft",
    title: "Contemporary City Apartment",
    description: "Stylish contemporary apartment with premium interiors, comfortable living spaces, elegant furniture, and modern city convenience.",
    features: [
      "Premium interiors",
      "Modern kitchen",
      "City views",
      "Secure parking"
    ]
  },
  {
    id: "rent-3",
    category: "rent",
    image: IMAGES_3D.rentalHome3,
    type: "Luxury Rental",
    address: "90 Garden Street, Any City",
    price: "$3,200 / Month",
    beds: "4 Beds",
    baths: "3 Baths",
    area: "2,100 Sq Ft",
    title: "Luxury Villa for Rent",
    description: "Exclusive luxury villa featuring contemporary architecture, spacious interiors, beautiful outdoor spaces, and premium residential amenities.",
    features: [
      "Luxury interiors",
      "Private swimming pool",
      "Designer kitchen",
      "Covered parking"
    ]
  }
];

// --------------------------------------------------
// PROPERTY DATA - COMMERCIAL
// --------------------------------------------------

const commercialProperties = [
  {
    id: "commercial-1",
    category: "commercial",
    image: IMAGES_3D.office3d,
    type: "Office Space",
    address: "100 Business Avenue, Any City",
    price: "$750,000",
    area: "3,000 Sq Ft",
    title: "Corporate Office Space",
    description: "Flexible commercial floor plan with dedicated workstations, conference rooms, and reception.",
    commercialType: "Office Space",
    floors: "2 Floors",
    parking: "12 Spaces",
    furnishing: "Semi-Furnished",
    condition: "Ready to Occupy",
    suitableFor: ["Corporate Office", "Startup", "Consulting Firm"],
    features: [
      "Open office layout",
      "Conference room",
      "High-speed fiber",
      "Power backup"
    ]
  },
  {
    id: "commercial-2",
    category: "commercial",
    image: IMAGES_3D.retail3d,
    type: "Retail Shop",
    address: "25 Market Street, Any City",
    price: "$450,000",
    area: "1,800 Sq Ft",
    title: "Prime Retail Space",
    description: "High-visibility street-front retail unit with expansive display glass and customer parking.",
    commercialType: "Retail / Showroom",
    floors: "1 Floor",
    parking: "6 Spaces",
    furnishing: "Unfurnished",
    condition: "Recently Renovated",
    suitableFor: ["Retail Store", "Showroom", "Boutique"],
    features: [
      "Street visibility",
      "Full-height display windows",
      "Back storage",
      "Accessible entrance"
    ]
  },
  {
    id: "commercial-3",
    category: "commercial",
    image: IMAGES_3D.building3d,
    type: "Commercial Building",
    address: "55 Industrial Road, Any City",
    price: "$1,250,000",
    area: "5,000 Sq Ft",
    title: "Modern Commercial Building",
    description: "Standalone multi-level commercial complex suitable for headquarters, showrooms, or investment.",
    commercialType: "Standalone Building",
    floors: "3 Floors",
    parking: "20 Spaces",
    furnishing: "Partly Furnished",
    condition: "Good Condition",
    suitableFor: ["Headquarters", "Office Complex", "Showroom"],
    features: [
      "Multi-floor layout",
      "20-car lot",
      "Backup generator",
      "24/7 access"
    ]
  }
];

// --------------------------------------------------
// TESTIMONIALS
// --------------------------------------------------

const testimonials = [
  {
    quote: "Leah made the entire process simple and personal. Every question was answered with care.",
    name: "Aaron Lopez"
  },
  {
    quote: "From the first viewing to final paperwork, the guidance and attention to detail were exceptional.",
    name: "Juliana Silva"
  },
  {
    quote: "A thoughtful, professional experience. I found a home that feels right without the stress.",
    name: "Phyllis Sawhager"
  }
];

// --------------------------------------------------
// FORM STYLES
// --------------------------------------------------

const listingInputStyle = {
  width: "100%",
  boxSizing: "border-box",
  padding: "12px 13px",
  border: "1px solid #d7ddd7",
  borderRadius: 3,
  background: "#fff",
  color: "#273338",
  font: "inherit",
  fontWeight: 400,
  outlineColor: "#618764"
};

// --------------------------------------------------
// PROPERTY DETAIL PAGE STYLES
// --------------------------------------------------

const detailStyles = {
  page: {
    padding: "42px 7%",
    background: "#f7f6f2",
    minHeight: "100vh",
    color: "#273338"
  },
  back: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    background: "transparent",
    border: 0,
    cursor: "pointer",
    color: "#273338",
    fontSize: 14,
    fontWeight: 600,
    marginBottom: 28
  },
  heroImage: {
    width: "100%",
    height: "min(55vw, 540px)",
    minHeight: 280,
    overflow: "hidden",
    borderRadius: 5,
    marginBottom: 34
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  },
  eyebrow: {
    color: "#618764",
    textTransform: "uppercase",
    letterSpacing: 3,
    fontSize: 12,
    fontWeight: 600
  },
  heading: {
    color: "#273338",
    fontSize: "clamp(30px, 5vw, 48px)",
    fontWeight: 500,
    margin: "12px 0"
  },
  muted: {
    color: "#777",
    fontSize: 15
  },
  price: {
    color: "#2B5748",
    fontSize: 32,
    marginTop: 8
  },
  stats: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: 16,
    padding: 25,
    background: "#fff",
    borderRadius: 5,
    margin: "34px 0 44px"
  },
  contentGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 48,
    marginBottom: 52
  },
  subheading: {
    color: "#273338",
    fontSize: 29,
    fontWeight: 500,
    margin: "14px 0"
  },
  paragraph: {
    color: "#666",
    lineHeight: 1.9,
    fontSize: 15
  },
  features: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: 17
  },
  feature: {
    display: "flex",
    alignItems: "center",
    gap: 9,
    color: "#555",
    fontSize: 14
  },
  contactPanel: {
    background: "#273338",
    color: "#fff",
    padding: "42px 25px",
    textAlign: "center",
    borderRadius: 5
  },
  contactButton: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    padding: "14px 25px",
    background: "#618764",
    color: "#fff",
    textDecoration: "none",
    fontSize: 14
  }
};

// --------------------------------------------------
// REUSABLE INFO ITEM
// --------------------------------------------------

function InfoItem({ icon: Icon, label, value }) {
  return (
    <div style={{
      display: "flex",
      gap: 12,
      alignItems: "center",
      minWidth: 0
    }}>
      <Icon color="#618764" size={25} />
      <div>
        <strong>{value || "—"}</strong>
        <p style={{
          ...detailStyles.muted,
          margin: "5px 0 0"
        }}>
          {label}
        </p>
      </div>
    </div>
  );
}

// --------------------------------------------------
// PROPERTY DETAIL PAGE
// --------------------------------------------------

function PropertyDetail({ property, onBack }) {
  const isCommercial = property.category === "commercial";
  const isRental = property.category === "rent";

  return (
    <main className="property-detail-page">

      <header className="site-header">
        <a className="brand" href="#home" onClick={onBack}>
          <span className="brand-mark">◈</span>
          <span>
            LEAH BENNETT
            <small>REAL ESTATE</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          onClick={onBack}
          aria-label="Back"
        >
          <ArrowLeft />
        </button>

        <nav className="nav">
          <a href="#property-overview">Overview</a>
          <a href="#property-features">Features</a>
          <a className="nav-cta" href="#property-contact">
            Inquire <ArrowUpRight size={14} />
          </a>
        </nav>
      </header>

      <section style={detailStyles.page}>

        <button style={detailStyles.back} onClick={onBack}>
          <ArrowLeft size={18} /> Back
        </button>

        <div style={detailStyles.heroImage}>
          <img
            src={property.image}
            alt={property.title}
            style={detailStyles.image}
          />
        </div>

        <div
          id="property-overview"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 24,
            marginBottom: 30
          }}
        >
          <div>
            <p style={detailStyles.eyebrow}>
              {isCommercial
                ? "Commercial"
                : isRental
                  ? "For Rent"
                  : `${property.type} · For Sale`}
            </p>

            <h1 style={detailStyles.heading}>
              {property.title}
            </h1>

            <p style={{
              ...detailStyles.muted,
              display: "flex",
              alignItems: "center",
              gap: 8
            }}>
              <MapPin size={17} />
              {property.address}
            </p>
          </div>

          <div>
            <p style={{
              ...detailStyles.muted,
              letterSpacing: 2,
              textTransform: "uppercase",
              fontSize: 12
            }}>
              {isRental ? "Monthly Rent" : "Price"}
            </p>

            <h2 style={detailStyles.price}>
              {property.price}
            </h2>
          </div>
        </div>

        {isCommercial ? (
          <>
            <div style={detailStyles.stats}>
              <InfoItem
                icon={Maximize}
                label="Total Area"
                value={property.area}
              />
              <InfoItem
                icon={Layers}
                label="Floors"
                value={property.floors}
              />
              <InfoItem
                icon={Car}
                label="Parking"
                value={property.parking}
              />
              <InfoItem
                icon={Building2}
                label="Type"
                value={property.commercialType || property.type}
              />
            </div>

            <div style={detailStyles.contentGrid}>
              <div>
                <h2 style={detailStyles.subheading}>
                  Overview
                </h2>

                <p style={detailStyles.paragraph}>
                  {property.description}
                </p>

                <div style={{
                  display: "grid",
                  gap: 16,
                  marginTop: 24
                }}>
                  <InfoItem
                    icon={Sofa}
                    label="Furnishing"
                    value={property.furnishing}
                  />

                  <InfoItem
                    icon={CheckCircle}
                    label="Condition"
                    value={property.condition}
                  />

                  <InfoItem
                    icon={Briefcase}
                    label="Ideal For"
                    value={(property.suitableFor || []).join(", ")}
                  />
                </div>
              </div>

              <div id="property-features">
                <h2 style={detailStyles.subheading}>
                  Amenities
                </h2>

                <div style={detailStyles.features}>
                  {(property.features || []).map(feature => (
                    <div key={feature} style={detailStyles.feature}>
                      <CheckCircle size={17} color="#618764" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div style={detailStyles.stats}>
              <InfoItem
                icon={BedDouble}
                label="Bedrooms"
                value={property.beds}
              />

              <InfoItem
                icon={Bath}
                label="Bathrooms"
                value={property.baths}
              />

              <InfoItem
                icon={Maximize}
                label="Area"
                value={property.area}
              />
            </div>

            <div style={detailStyles.contentGrid}>
              <div>
                <h2 style={detailStyles.subheading}>
                  Overview
                </h2>

                <p style={detailStyles.paragraph}>
                  {property.description}
                </p>
              </div>

              <div id="property-features">
                <h2 style={detailStyles.subheading}>
                  Features
                </h2>

                <div style={detailStyles.features}>
                  {(property.features || []).map(feature => (
                    <div key={feature} style={detailStyles.feature}>
                      <CheckCircle size={17} color="#618764" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        <div id="property-contact" style={detailStyles.contactPanel}>
          <h2 style={{
            fontSize: "clamp(24px, 4vw, 36px)",
            fontWeight: 500,
            margin: "0 0 20px"
          }}>
            {isCommercial
              ? "Schedule a site visit"
              : "Arrange a private viewing"}
          </h2>

          <a
            href={`mailto:${property.sellerEmail || "hello@leahbennett.com"}?subject=${encodeURIComponent(`Enquiry: ${property.title}`)}`}
            style={detailStyles.contactButton}
          >
            Contact Agent <ArrowUpRight size={16} />
          </a>
        </div>

      </section>
    </main>
  );
}

// --------------------------------------------------
// REUSABLE PROPERTY SECTION
// --------------------------------------------------

function PropertySection({ id, title, properties, onOpen }) {
  return (
    <section className="properties section-light" id={id}>

      <div className="section-heading reveal">
        <h2>{title}</h2>
      </div>

      {properties.length === 0 ? (
        <p style={{
          textAlign: "center",
          padding: "35px 15px",
          color: "#777"
        }}>
          No listings available.
        </p>
      ) : (
        <div className="property-grid">

          {properties.map((property, index) => (
            <article
              className={`property-card reveal reveal-delay-${(index % 3) + 1}`}
              key={property.id}
              role="button"
              tabIndex={0}
              aria-label={property.title}
              onClick={() => onOpen(property)}
              onKeyDown={event => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  onOpen(property);
                }
              }}
              style={{ cursor: "pointer" }}
            >

              <div className="property-image">
                <img
                  src={property.image}
                  alt={property.title}
                />

                <span className="image-arrow">
                  <ArrowUpRight size={18} />
                </span>
              </div>

              <p className="property-type">
                {property.type}
              </p>

              <h3>{property.title}</h3>

              <p className="property-address">
                <MapPin size={13} />
                {property.address}
              </p>

              <p className="property-price">
                {property.price}
              </p>

              <div className="property-meta">
                {property.category === "commercial" ? (
                  <>
                    <span>
                      <Building2 size={14} />
                      Commercial
                    </span>

                    <span>
                      <Maximize size={14} />
                      {property.area}
                    </span>
                  </>
                ) : (
                  <>
                    <span>
                      <BedDouble size={14} />
                      {property.beds}
                    </span>

                    <span>
                      <Bath size={14} />
                      {property.baths}
                    </span>

                    <span>
                      <Maximize size={14} />
                      {property.area}
                    </span>
                  </>
                )}
              </div>

              <span className="property-card-link">
                Details <ArrowUpRight size={14} />
              </span>

            </article>
          ))}

        </div>
      )}

    </section>
  );
}

// --------------------------------------------------
// MAIN APP
// --------------------------------------------------

const App = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [tourOpen, setTourOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);

  const [listFormOpen, setListFormOpen] = useState(false);
  const [listingError, setListingError] = useState("");
  const [listingSuccess, setListingSuccess] = useState("");

  const [customProperties, setCustomProperties] = useState(() => {
    try {
      const saved = JSON.parse(
        localStorage.getItem("leahBennettListings") || "[]"
      );

      return Array.isArray(saved) ? saved : [];
    } catch {
      return [];
    }
  });

  const [newProperty, setNewProperty] = useState({
    title: "",
    address: "",
    price: "",
    type: "Residential",
    listingCategory: "sale",
    beds: "",
    baths: "",
    area: "",
    description: "",
    features: "",
    sellerName: "",
    sellerEmail: "",
    image: "",
    floors: "",
    parking: "",
    furnishing: "Unfurnished",
    condition: "",
    suitableFor: ""
  });

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const allProperties = [...properties, ...customProperties];

  const saleListings = allProperties.filter(
    p => !p.category || p.category === "sale"
  );

  const rentListings = [
    ...rentalProperties,
    ...customProperties.filter(p => p.category === "rent")
  ];

  const commercialListings = [
    ...commercialProperties,
    ...customProperties.filter(p => p.category === "commercial")
  ];

  // SAVE CUSTOM PROPERTIES

  useEffect(() => {
    try {
      localStorage.setItem(
        "leahBennettListings",
        JSON.stringify(customProperties)
      );
    } catch {
      setListingError("Storage limit reached. Try a smaller image.");
    }
  }, [customProperties]);

  // IMAGE UPLOAD

  const handleListingImage = event => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setListingError("Invalid image format.");
      return;
    }

    if (file.size > 1 * 1024 * 1024) {
      setListingError("Image must be under 1 MB.");
      event.target.value = "";
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      setNewProperty(current => ({
        ...current,
        image: String(reader.result)
      }));

      setListingError("");
    };

    reader.onerror = () => {
      setListingError("Could not read image.");
    };

    reader.readAsDataURL(file);
  };

  // PUBLISH PROPERTY

  const publishProperty = event => {
    event.preventDefault();
    setListingError("");

    if (!newProperty.image) {
      setListingError("Please upload a photo.");
      return;
    }

    const price = Number(newProperty.price);
    const area = Number(newProperty.area);

    if (!Number.isFinite(price) || price <= 0) {
      setListingError("Enter a valid price.");
      return;
    }

    if (!Number.isFinite(area) || area <= 0) {
      setListingError("Enter a valid area.");
      return;
    }

    const category = newProperty.listingCategory;

    const listing = {
      id: `owner-${Date.now()}`,
      category,
      image: newProperty.image,
      type: newProperty.type,
      address: newProperty.address.trim(),

      price: category === "rent"
        ? `$${price.toLocaleString("en-US")} / Month`
        : `$${price.toLocaleString("en-US")}`,

      beds: category === "commercial"
        ? "N/A"
        : `${newProperty.beds || 0} Beds`,

      baths: `${newProperty.baths || 0} Baths`,
      area: `${area.toLocaleString("en-US")} Sq Ft`,
      title: newProperty.title.trim(),
      description: newProperty.description.trim(),

      features: newProperty.features
        .split("\n")
        .map(item => item.trim())
        .filter(Boolean),

      sellerName: newProperty.sellerName.trim(),
      sellerEmail: newProperty.sellerEmail.trim(),
      floors: newProperty.floors.trim(),
      parking: newProperty.parking.trim(),
      furnishing: newProperty.furnishing,
      condition: newProperty.condition.trim(),

      commercialType: category === "commercial"
        ? newProperty.type
        : "",

      suitableFor: newProperty.suitableFor
        .split(",")
        .map(item => item.trim())
        .filter(Boolean)
    };

    setCustomProperties(current => [
      listing,
      ...current
    ]);

    setNewProperty({
      title: "",
      address: "",
      price: "",
      type: "Residential",
      listingCategory: "sale",
      beds: "",
      baths: "",
      area: "",
      description: "",
      features: "",
      sellerName: "",
      sellerEmail: "",
      image: "",
      floors: "",
      parking: "",
      furnishing: "Unfurnished",
      condition: "",
      suitableFor: ""
    });

    setListingSuccess("Property published.");
    setListFormOpen(false);

    window.setTimeout(() => {
      setListingSuccess("");
    }, 5000);

    window.setTimeout(() => {
      const target = category === "rent"
        ? "rent"
        : category === "commercial"
          ? "commercial"
          : "homes";

      document.getElementById(target)?.scrollIntoView({
        behavior: "smooth"
      });
    }, 100);
  };

  // SCROLL REVEAL ANIMATION

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach(element => {
        element.classList.add("is-visible");
      });

      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            currentObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -45px 0px"
      }
    );

    elements.forEach(element => {
      observer.observe(element);
    });

    return () => observer.disconnect();

  }, [selectedProperty, customProperties]);

  // MODAL BODY SCROLL

  useEffect(() => {
    document.body.classList.toggle(
      "modal-open",
      tourOpen || listFormOpen
    );

    return () => {
      document.body.classList.remove("modal-open");
    };

  }, [tourOpen, listFormOpen]);

  // NAVIGATION FUNCTIONS

  const closeMenu = () => setMenuOpen(false);

  const openProperty = property => {
    setSelectedProperty(property);
    closeMenu();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const closeProperty = () => {
    setSelectedProperty(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const submitForm = event => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (selectedProperty) {
    return (
      <PropertyDetail
        property={selectedProperty}
        onBack={closeProperty}
      />
    );
  }

  const updateNewProperty = (key, value) => {
    setNewProperty(current => ({
      ...current,
      [key]: value
    }));
  };

  return (
    <main>

      {/* HEADER */}

      <header className="site-header">

        <a
          className="brand"
          href="#home"
          onClick={closeMenu}
        >
          <span className="brand-mark">◈</span>

          <span>
            LEAH BENNETT
            <small>REAL ESTATE</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(open => !open)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? "nav open" : "nav"}>

          <a href="#homes" onClick={closeMenu}>
            Buy
          </a>

          <a href="#rent" onClick={closeMenu}>
            Rent
          </a>

          <a href="#commercial" onClick={closeMenu}>
            Commercial
          </a>

          <a href="#testimonials" onClick={closeMenu}>
            Reviews
          </a>

          <button
            type="button"
            className="nav-cta"
            style={{
              border: 0,
              background: "transparent",
              font: "inherit",
              cursor: "pointer"
            }}
            onClick={() => {
              closeMenu();
              setListFormOpen(true);
            }}
          >
            List Property <ArrowUpRight size={14} />
          </button>

          <a
            className="nav-cta"
            href="#contact"
            onClick={closeMenu}
          >
            Contact <ArrowUpRight size={14} />
          </a>

        </nav>
      </header>

      {/* HERO SECTION */}

      <section
        className="hero"
        id="home"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(39,51,56,.75), rgba(39,51,56,.2)), url(${IMAGES_3D.heroVilla})`
        }}
      >

        <div className="hero-copy">

          <h1 className="hero-animate hero-delay-1">
            Where Beautiful
            <br />
           Homes Meet
            <br />
            <em>Exceptional Living.</em>
          </h1>

          <div
            className="hero-animate hero-delay-2"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 24,
              flexWrap: "wrap",
              marginTop: 28
            }}
          >

            <a
              className="text-link light-link"
              href="#homes"
            >
              Explore Properties <ArrowUpRight size={15} />
            </a>

            <button
              type="button"
              onClick={() => setListFormOpen(true)}
              style={{
                border: "1px solid rgba(255,255,255,.75)",
                background: "transparent",
                color: "#fff",
                padding: "11px 16px",
                cursor: "pointer",
                font: "inherit"
              }}
            >
              List Property <ArrowUpRight size={14} />
            </button>

          </div>
        </div>
      </section>

      {/* LISTING SUCCESS MESSAGE */}

      {listingSuccess && (
        <p
          role="status"
          style={{
            maxWidth: 1100,
            margin: "22px auto",
            padding: "0 20px",
            color: "#2B5748",
            fontWeight: 600
          }}
        >
          <CheckCircle
            size={17}
            style={{
              verticalAlign: "middle",
              marginRight: 8
            }}
          />

          {listingSuccess}
        </p>
      )}

      {/* PROPERTY SECTIONS */}

      <PropertySection
        id="homes"
        title="Homes for Sale"
        properties={saleListings}
        onOpen={openProperty}
      />

      <PropertySection
        id="rent"
        title="Homes for Rent"
        properties={rentListings}
        onOpen={openProperty}
      />

      <PropertySection
        id="commercial"
        title="Commercial Spaces"
        properties={commercialListings}
        onOpen={openProperty}
      />

      {/* VIDEO TOUR */}

      <section
        className="video-section"
        style={{
          backgroundImage: `linear-gradient(rgba(39,51,56,.62), rgba(39,51,56,.62)), url(${IMAGES_3D.interiorTour3d})`
        }}
      >

        <div className="video-content reveal">

          <h2>3D Virtual Tour</h2>

          <button
            className="play-btn"
            onClick={() => setTourOpen(true)}
          >
            <Play size={13} fill="currentColor" />
            Watch Tour
          </button>

        </div>
      </section>

      {/* TESTIMONIALS */}

      <section
        className="testimonials section-light"
        id="testimonials"
      >

        <div className="reveal">
          <h2>Client Reviews</h2>
        </div>

        <div className="testimonial-grid">

          {testimonials.map((testimonial, index) => (
            <figure
              className={`reveal reveal-delay-${index + 1}`}
              key={testimonial.name}
            >

              <div className="quote-mark">“</div>

              <blockquote>
                {testimonial.quote}
              </blockquote>

              <figcaption>
                — {testimonial.name}
              </figcaption>

            </figure>
          ))}

        </div>
      </section>

      {/* FOOTER */}

      <footer className="footer" id="contact">

        <div className="footer-info">

          <a className="brand footer-brand" href="#home">
            <span className="brand-mark">◈</span>

            <span>
              LEAH BENNETT
              <small>REAL ESTATE</small>
            </span>
          </a>

          <div className="footer-actions">

            <a
              href="#homes"
              onClick={event => {
                event.preventDefault();
                setListFormOpen(true);
              }}
            >
              List Property
            </a>

            <a href="#homes" className="filled">
              Browse Homes
            </a>

          </div>

          <h2>Get in touch</h2>

          <p className="contact-line">
            123 Anywhere St., Any City
          </p>

          <p className="contact-line">
            (123) 456-7890 · hello@leahbennett.com
          </p>

          <div className="socials">

            <a
              href="https://instagram.com"
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram />
            </a>

            <a
              href="https://facebook.com"
              aria-label="Facebook"
              target="_blank"
              rel="noreferrer"
            >
              <Facebook />
            </a>

            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin />
            </a>

          </div>

          <p className="copyright">
            © 2026 Leah Bennett Real Estate
          </p>

        </div>

        <div
          className="footer-image"
          style={{
            backgroundImage: `url(${IMAGES_3D.contactInterior3d})`
          }}
          aria-label="3D interior render"
        />

        <form
          className="contact-form"
          onSubmit={submitForm}
        >

          <h3>Send a message</h3>

          {submitted ? (
            <div className="success-message" role="status">
              Thank you, {form.name || "there"}. We'll be in touch soon.
            </div>
          ) : (
            <>

              <label>
                Name

                <input
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={event => setForm({
                    ...form,
                    name: event.target.value
                  })}
                  placeholder="Your name"
                />
              </label>

              <label>
                Email

                <input
                  required
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={event => setForm({
                    ...form,
                    email: event.target.value
                  })}
                  placeholder="you@example.com"
                />
              </label>

              <label>
                Message

                <textarea
                  required
                  rows="3"
                  value={form.message}
                  onChange={event => setForm({
                    ...form,
                    message: event.target.value
                  })}
                  placeholder="How can we help?"
                />
              </label>

              <button className="dark-btn" type="submit">
                Send <ArrowUpRight size={15} />
              </button>

            </>
          )}

        </form>
      </footer>

      {/* LIST PROPERTY MODAL */}

      {listFormOpen && (
        <div
          role="presentation"
          onClick={() => setListFormOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1200,
            background: "rgba(20, 30, 32, .72)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 18,
            overflowY: "auto"
          }}
        >

          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="listing-form-title"
            onClick={event => event.stopPropagation()}
            style={{
              width: "min(760px, 100%)",
              maxHeight: "92vh",
              overflowY: "auto",
              background: "#f7f6f2",
              color: "#273338",
              padding: "clamp(22px, 4vw, 42px)",
              borderRadius: 6,
              position: "relative"
            }}
          >

            <button
              type="button"
              onClick={() => setListFormOpen(false)}
              aria-label="Close"
              style={{
                position: "absolute",
                top: 18,
                right: 18,
                border: 0,
                background: "transparent",
                cursor: "pointer",
                color: "#273338"
              }}
            >
              <X />
            </button>

            <h2
              id="listing-form-title"
              style={{
                fontSize: "clamp(26px, 4vw, 36px)",
                fontWeight: 500,
                margin: "0 0 20px"
              }}
            >
              List a Property
            </h2>

            <form
              onSubmit={publishProperty}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gap: 16
              }}
            >

              <label style={fieldStyle}>
                Category

                <select
                  required
                  value={newProperty.listingCategory}
                  onChange={event => updateNewProperty(
                    "listingCategory",
                    event.target.value
                  )}
                  style={listingInputStyle}
                >
                  <option value="sale">For Sale</option>
                  <option value="rent">For Rent</option>
                  <option value="commercial">Commercial</option>
                </select>
              </label>

              <label style={fieldStyle}>
                Title

                <input
                  required
                  placeholder="Modern Family Villa"
                  value={newProperty.title}
                  onChange={event => updateNewProperty(
                    "title",
                    event.target.value
                  )}
                  style={listingInputStyle}
                />
              </label>

              <label style={{
                ...fieldStyle,
                gridColumn: "1 / -1"
              }}>
                Address

                <input
                  required
                  placeholder="Street, City, State"
                  value={newProperty.address}
                  onChange={event => updateNewProperty(
                    "address",
                    event.target.value
                  )}
                  style={listingInputStyle}
                />
              </label>

              <label style={fieldStyle}>
                {newProperty.listingCategory === "rent"
                  ? "Monthly Rent ($)"
                  : "Price ($)"}

                <input
                  required
                  type="number"
                  min="1"
                  step="1"
                  placeholder="450000"
                  value={newProperty.price}
                  onChange={event => updateNewProperty(
                    "price",
                    event.target.value
                  )}
                  style={listingInputStyle}
                />
              </label>

              <label style={fieldStyle}>
                Property Type

                <select
                  required
                  value={newProperty.type}
                  onChange={event => updateNewProperty(
                    "type",
                    event.target.value
                  )}
                  style={listingInputStyle}
                >
                  <option value="Residential">Residential</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Villa">Villa</option>
                  <option value="Townhouse">Townhouse</option>
                  <option value="Land">Land</option>
                  <option value="Office Space">Office Space</option>
                  <option value="Retail Shop">Retail Shop</option>
                  <option value="Warehouse">Warehouse</option>
                  <option value="Commercial Building">Commercial Building</option>
                </select>
              </label>

              {newProperty.listingCategory !== "commercial" && (
                <>

                  <label style={fieldStyle}>
                    Bedrooms

                    <input
                      type="number"
                      min="0"
                      placeholder="3"
                      value={newProperty.beds}
                      onChange={event => updateNewProperty(
                        "beds",
                        event.target.value
                      )}
                      style={listingInputStyle}
                    />
                  </label>

                  <label style={fieldStyle}>
                    Bathrooms

                    <input
                      type="number"
                      min="0"
                      placeholder="2"
                      value={newProperty.baths}
                      onChange={event => updateNewProperty(
                        "baths",
                        event.target.value
                      )}
                      style={listingInputStyle}
                    />
                  </label>

                </>
              )}

              <label style={fieldStyle}>
                Area (Sq Ft)

                <input
                  required
                  type="number"
                  min="1"
                  placeholder="1800"
                  value={newProperty.area}
                  onChange={event => updateNewProperty(
                    "area",
                    event.target.value
                  )}
                  style={listingInputStyle}
                />
              </label>

              {newProperty.listingCategory === "commercial" && (
                <>

                  <label style={fieldStyle}>
                    Floors

                    <input
                      placeholder="2 Floors"
                      value={newProperty.floors}
                      onChange={event => updateNewProperty(
                        "floors",
                        event.target.value
                      )}
                      style={listingInputStyle}
                    />
                  </label>

                  <label style={fieldStyle}>
                    Parking

                    <input
                      placeholder="10 Spaces"
                      value={newProperty.parking}
                      onChange={event => updateNewProperty(
                        "parking",
                        event.target.value
                      )}
                      style={listingInputStyle}
                    />
                  </label>

                  <label style={fieldStyle}>
                    Furnishing

                    <select
                      value={newProperty.furnishing}
                      onChange={event => updateNewProperty(
                        "furnishing",
                        event.target.value
                      )}
                      style={listingInputStyle}
                    >
                      <option>Unfurnished</option>
                      <option>Semi-Furnished</option>
                      <option>Fully Furnished</option>
                    </select>
                  </label>

                  <label style={fieldStyle}>
                    Condition

                    <input
                      placeholder="Ready to Occupy"
                      value={newProperty.condition}
                      onChange={event => updateNewProperty(
                        "condition",
                        event.target.value
                      )}
                      style={listingInputStyle}
                    />
                  </label>

                  <label style={{
                    ...fieldStyle,
                    gridColumn: "1 / -1"
                  }}>
                    Suitable Uses (comma separated)

                    <input
                      placeholder="Office, Retail, Showroom"
                      value={newProperty.suitableFor}
                      onChange={event => updateNewProperty(
                        "suitableFor",
                        event.target.value
                      )}
                      style={listingInputStyle}
                    />
                  </label>

                </>
              )}

              <label style={fieldStyle}>
                Your Name

                <input
                  required
                  placeholder="Full name"
                  value={newProperty.sellerName}
                  onChange={event => updateNewProperty(
                    "sellerName",
                    event.target.value
                  )}
                  style={listingInputStyle}
                />
              </label>

              <label style={fieldStyle}>
                Email

                <input
                  required
                  type="email"
                  placeholder="you@example.com"
                  value={newProperty.sellerEmail}
                  onChange={event => updateNewProperty(
                    "sellerEmail",
                    event.target.value
                  )}
                  style={listingInputStyle}
                />
              </label>

              <label style={{
                ...fieldStyle,
                gridColumn: "1 / -1"
              }}>
                Description

                <textarea
                  required
                  rows={3}
                  placeholder="Key property highlights..."
                  value={newProperty.description}
                  onChange={event => updateNewProperty(
                    "description",
                    event.target.value
                  )}
                  style={{
                    ...listingInputStyle,
                    resize: "vertical"
                  }}
                />
              </label>

              <label style={{
                ...fieldStyle,
                gridColumn: "1 / -1"
              }}>
                Features (one per line)

                <textarea
                  rows={3}
                  placeholder={"Parking\nSecurity\nAir conditioning"}
                  value={newProperty.features}
                  onChange={event => updateNewProperty(
                    "features",
                    event.target.value
                  )}
                  style={{
                    ...listingInputStyle,
                    resize: "vertical"
                  }}
                />
              </label>

              <label style={{
                ...fieldStyle,
                gridColumn: "1 / -1"
              }}>
                Photo (max 1 MB)

                <input
                  required={!newProperty.image}
                  type="file"
                  accept="image/*"
                  onChange={handleListingImage}
                  style={{
                    ...listingInputStyle,
                    padding: 10
                  }}
                />

                {newProperty.image && (
                  <img
                    src={newProperty.image}
                    alt="Preview"
                    style={{
                      width: "100%",
                      maxHeight: 220,
                      objectFit: "cover",
                      borderRadius: 4
                    }}
                  />
                )}
              </label>

              {listingError && (
                <p
                  role="alert"
                  style={{
                    color: "#a33b32",
                    gridColumn: "1 / -1",
                    margin: 0
                  }}
                >
                  {listingError}
                </p>
              )}

              <div style={{
                display: "flex",
                gap: 12,
                justifyContent: "flex-end",
                gridColumn: "1 / -1",
                flexWrap: "wrap",
                marginTop: 8
              }}>

                <button
                  type="button"
                  onClick={() => setListFormOpen(false)}
                  style={{
                    padding: "13px 20px",
                    border: "1px solid #aeb8b0",
                    background: "transparent",
                    color: "#273338",
                    cursor: "pointer"
                  }}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="dark-btn"
                  style={{ cursor: "pointer" }}
                >
                  Publish <ArrowUpRight size={15} />
                </button>

              </div>

            </form>
          </section>
        </div>
      )}

      {/* VIDEO TOUR MODAL */}

      {tourOpen && (
        <div
          className="modal-backdrop"
          role="presentation"
          onClick={() => setTourOpen(false)}
        >

          <div
            className="tour-modal"
            role="dialog"
            aria-modal="true"
            aria-label="3D Virtual Tour"
            onClick={event => event.stopPropagation()}
          >

            <button
              className="modal-close"
              onClick={() => setTourOpen(false)}
              aria-label="Close"
            >
              <X />
            </button>

            <img
              src={IMAGES_3D.interiorTour3d}
              alt="3D Interior Walkthrough"
            />

            <h2>3D Walkthrough</h2>

            <p>
              Embed your Matterport or 3D tour URL here,
              or book an in-person showing.
            </p>

            <a
              className="dark-btn"
              href="#contact"
              onClick={() => setTourOpen(false)}
            >
              Book a Viewing <ArrowRight size={15} />
            </a>

          </div>
        </div>
      )}

    </main>
  );
};

// --------------------------------------------------
// FIELD STYLE
// --------------------------------------------------

const fieldStyle = {
  display: "flex",
  flexDirection: "column",
  gap: 7,
  color: "#3f4946",
  fontSize: 13,
  fontWeight: 600
};

export default App;
