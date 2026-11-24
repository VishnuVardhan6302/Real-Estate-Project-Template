import React, { useEffect, useMemo, useState } from "react";
import {
  Menu, X, ArrowUpRight, ArrowRight, Instagram, Facebook, Linkedin,
  Play, BedDouble, Bath, Maximize, MapPin, CheckCircle, ArrowLeft,
  Building2, Car, Layers, Briefcase, Sofa, ChevronLeft, ChevronRight,
  Search, Heart, SlidersHorizontal
} from "lucide-react";

// --------------------------------------------------
// PROPERTY IMAGES
// --------------------------------------------------

const IMAGES_3D = {
  heroVilla: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=90",

  modernHouse1: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85",
  modernHouse2: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
  modernHouse3: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=85",

  // RENTAL PROPERTY IMAGES
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
// HERO CAROUSEL SLIDES
// --------------------------------------------------

const HERO_SLIDES = [
  {
    image: IMAGES_3D.heroVilla,
    label: "Signature Architectural Villa",
    sublabel: "Curated Luxury Residences"
  },
  {
    image: IMAGES_3D.modernHouse1,
    label: "Modern Luxury Family Home",
    sublabel: "For Sale · $1,250,000"
  },
  {
    image: IMAGES_3D.modernHouse3,
    label: "Elegant Premium Family Estate",
    sublabel: "For Sale · $1,475,000"
  },
  {
    image: IMAGES_3D.rentalHome3,
    label: "Luxury Villa for Rent",
    sublabel: "For Rent · $3,200 / Month"
  },
  {
    image: IMAGES_3D.interiorTour3d,
    label: "Contemporary Living Interiors",
    sublabel: "3D Virtual Tours Available"
  }
];

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
// CATEGORY-BASED PROPERTY TYPES
// --------------------------------------------------

const PROPERTY_TYPES = {
  sale: [
    "Residential",
    "Apartment",
    "Villa",
    "Townhouse",
    "Land"
  ],

  rent: [
    "Residential Rental",
    "Apartment",
    "Villa",
    "Townhouse"
  ],

  commercial: [
    "Office Space",
    "Retail Shop",
    "Warehouse",
    "Commercial Building"
  ]
};

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
// HELPERS & STYLES
// --------------------------------------------------

const parseNumericValue = value => {
  if (typeof value === "number") return value;
  const cleaned = String(value || "").replace(/[^0-9.]/g, "");
  const parsed = Number(cleaned);
  return Number.isFinite(parsed) ? parsed : 0;
};

const getCategoryBadgeLabel = category => {
  if (category === "rent") return "For Rent";
  if (category === "commercial") return "Commercial";
  return "For Sale";
};

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

const toolbarInputStyle = {
  width: "100%",
  boxSizing: "border-box",
  padding: "11px 36px 11px 38px",
  border: "1px solid #d7ddd7",
  borderRadius: 999,
  background: "#fff",
  color: "#273338",
  font: "inherit",
  fontSize: 14,
  outlineColor: "#618764"
};

const toolbarSelectStyle = {
  padding: "11px 14px",
  border: "1px solid #d7ddd7",
  borderRadius: 999,
  background: "#fff",
  color: "#273338",
  font: "inherit",
  fontSize: 14,
  cursor: "pointer",
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
            <small>BUY · SELL · RENT · COMMERCIAL</small>
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

function PropertySection({
  id,
  title,
  properties,
  activeCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  savedIds,
  onToggleSave,
  showSavedOnly,
  onToggleSavedOnly,
  onOpen
}) {
  // Normalize legacy/custom listing data before counting or filtering. Older
  // saved listings may not contain every optional field.
  const safeProperties = useMemo(() => (Array.isArray(properties) ? properties : [])
    .filter(Boolean)
    .map((property, index) => ({
      ...property,
      id: property.id ?? `listing-${index}`,
      category: ["sale", "rent", "commercial"].includes(property.category)
        ? property.category : "sale",
      title: String(property.title || "Untitled Property"),
      address: String(property.address || "Address not provided"),
      type: String(property.type || "Property"),
      price: String(property.price || "Price on request"),
      image: String(property.image || ""),
      beds: String(property.beds || "—"),
      baths: String(property.baths || "—"),
      area: String(property.area || "—"),
      features: Array.isArray(property.features) ? property.features : []
    })), [properties]);

  const categoryCounts = useMemo(() => ({
    all: safeProperties.length,
    sale: safeProperties.filter(p => p.category === "sale").length,
    rent: safeProperties.filter(p => p.category === "rent").length,
    commercial: safeProperties.filter(p => p.category === "commercial").length
  }), [safeProperties]);

  const categories = [
    { value: "all", label: `All Properties (${categoryCounts.all})` },
    { value: "sale", label: `For Sale (${categoryCounts.sale})` },
    { value: "rent", label: `For Rent (${categoryCounts.rent})` },
    { value: "commercial", label: `Commercial (${categoryCounts.commercial})` }
  ];

  const visibleProperties = useMemo(() => {
    const query = String(searchQuery || "").trim().toLowerCase();

    const filtered = safeProperties.filter(property => {
      if (activeCategory !== "all" && property.category !== activeCategory) return false;
      if (showSavedOnly && !savedIds.some(id => String(id) === String(property.id))) return false;
      if (!query) return true;

      return [property.title, property.address, property.type, property.description]
        .some(value => String(value || "").toLowerCase().includes(query));
    });

    if (sortBy === "featured") return filtered;

    return [...filtered].sort((a, b) => {
      if (sortBy === "price-asc") {
        return parseNumericValue(a.price) - parseNumericValue(b.price);
      }
      if (sortBy === "price-desc") {
        return parseNumericValue(b.price) - parseNumericValue(a.price);
      }
      if (sortBy === "area-desc") {
        return parseNumericValue(b.area) - parseNumericValue(a.area);
      }
      return 0;
    });
  }, [safeProperties, activeCategory, searchQuery, sortBy, showSavedOnly, savedIds]);

  const hasActiveFilters =
    activeCategory !== "all" ||
    searchQuery.trim() !== "" ||
    sortBy !== "featured" ||
    showSavedOnly;

  const resetFilters = () => {
    onCategoryChange("all");
    onSearchChange("");
    onSortChange("featured");
    if (showSavedOnly) onToggleSavedOnly();
  };

  return (
    <section className="properties section-light" id={id}>

      <div className="section-heading reveal">
        <span className="section-kicker">CURATED REAL ESTATE</span>
        <h2>{title}</h2>
        <p>Discover residences, rentals and commercial spaces in one place.</p>
      </div>

      <div className="property-filters reveal" role="group" aria-label="Filter properties">
        {categories.map(category => (
          <button
            key={category.value}
            type="button"
            className={activeCategory === category.value ? "property-filter active" : "property-filter"}
            aria-pressed={activeCategory === category.value}
            onClick={() => onCategoryChange(category.value)}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* SEARCH, SORT & SAVED TOOLBAR */}

      <div
        className="reveal"
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          maxWidth: 1120,
          margin: "0 auto 28px"
        }}
      >
        <div style={{ position: "relative", flex: "1 1 260px", maxWidth: 420 }}>
          <Search
            size={16}
            color="#6b7773"
            style={{
              position: "absolute",
              left: 14,
              top: "50%",
              transform: "translateY(-50%)",
              pointerEvents: "none"
            }}
          />
          <input
            type="search"
            aria-label="Search properties by title, address, or type"
            placeholder="Search by title, street, or type..."
            value={searchQuery}
            onChange={event => onSearchChange(event.target.value)}
            style={toolbarInputStyle}
          />
          {searchQuery && (
            <button
              type="button"
              aria-label="Clear search"
              onClick={() => onSearchChange("")}
              style={{
                position: "absolute",
                right: 10,
                top: "50%",
                transform: "translateY(-50%)",
                border: 0,
                background: "transparent",
                color: "#6b7773",
                cursor: "pointer",
                padding: 4,
                display: "flex"
              }}
            >
              <X size={15} />
            </button>
          )}
        </div>

        <div style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: 10
        }}>
          <button
            type="button"
            onClick={onToggleSavedOnly}
            aria-pressed={showSavedOnly}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "10px 15px",
              borderRadius: 999,
              border: showSavedOnly ? "1px solid #2B5748" : "1px solid #d7ddd7",
              background: showSavedOnly ? "#2B5748" : "#fff",
              color: showSavedOnly ? "#fff" : "#273338",
              font: "inherit",
              fontSize: 13,
              fontWeight: 500,
              cursor: "pointer"
            }}
          >
            <Heart
              size={14}
              fill={showSavedOnly ? "currentColor" : "none"}
            />
            Saved ({savedIds.length})
          </button>

          <label style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            fontSize: 13,
            color: "#55615d"
          }}>
            <SlidersHorizontal size={15} />
            <select
              aria-label="Sort properties"
              value={sortBy}
              onChange={event => onSortChange(event.target.value)}
              style={toolbarSelectStyle}
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="area-desc">Area: Largest First</option>
            </select>
          </label>
        </div>
      </div>

      {visibleProperties.length === 0 ? (
        <div style={{
          textAlign: "center",
          padding: "42px 15px",
          color: "#66726e"
        }}>
          <p style={{ margin: "0 0 16px" }}>
            No properties match your current filters.
          </p>
          {hasActiveFilters && (
            <button
              type="button"
              onClick={resetFilters}
              style={{
                padding: "10px 20px",
                border: "1px solid #273338",
                borderRadius: 999,
                background: "transparent",
                color: "#273338",
                font: "inherit",
                fontSize: 14,
                cursor: "pointer"
              }}
            >
              Reset Filters
            </button>
          )}
        </div>
      ) : (
        <div className="property-grid">

          {visibleProperties.map((property, index) => {
            const isSaved = savedIds.some(id => String(id) === String(property.id));
            const badgeLabel = getCategoryBadgeLabel(property.category || "sale");

            return (
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

                <div className="property-image" style={{ position: "relative" }}>
                  <img
                    src={property.image || IMAGES_3D.heroVilla}
                    alt={property.title}
                    loading="lazy"
                  />

                  <span
                    style={{
                      position: "absolute",
                      top: 14,
                      left: 14,
                      padding: "5px 11px",
                      borderRadius: 999,
                      background: "rgba(25, 36, 38, 0.78)",
                      backdropFilter: "blur(6px)",
                      color: "#fff",
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase"
                    }}
                  >
                    {badgeLabel}
                  </span>

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
                        {property.floors || "Commercial"}
                      </span>

                      {property.parking && (
                        <span>
                          <Car size={14} />
                          {property.parking}
                        </span>
                      )}

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

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 12
                  }}
                >
                  <span className="property-card-link">
                    Details <ArrowUpRight size={14} />
                  </span>

                  <button
                    type="button"
                    aria-label={isSaved ? `Remove ${property.title} from saved` : `Save ${property.title}`}
                    aria-pressed={isSaved}
                    onClick={event => {
                      event.stopPropagation();
                      onToggleSave(property.id);
                    }}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 34,
                      height: 34,
                      borderRadius: "50%",
                      border: "1px solid #dfe5df",
                      background: isSaved ? "#f2f7f3" : "#fff",
                      color: isSaved ? "#b8443a" : "#66726e",
                      cursor: "pointer"
                    }}
                  >
                    <Heart
                      size={15}
                      fill={isSaved ? "currentColor" : "none"}
                    />
                  </button>
                </div>

              </article>
            );
          })}

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

  // HERO CAROUSEL STATE
  const [heroIndex, setHeroIndex] = useState(0);
  const [heroPaused, setHeroPaused] = useState(false);

  // PROPERTIES FILTER & TOOLBAR STATE
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [showSavedOnly, setShowSavedOnly] = useState(false);
  const [savedIds, setSavedIds] = useState(() => {
    try {
      const saved = JSON.parse(
        localStorage.getItem("leahBennettSaved") || "[]"
      );
      return Array.isArray(saved) ? saved : [];
    } catch {
      return [];
    }
  });

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

  // Commercial details
  floors: "",
  parking: "",
  furnishing: "Unfurnished",
  condition: "",
  suitableFor: "",

  // Land details
  zoning: "",
  frontage: "",
  roadAccess: "Yes"
});

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  // Build one source of truth for the property section. This avoids accidental
  // duplicate custom listings and keeps sale/rent/commercial filters consistent.
  const combinedListings = useMemo(() => {
    const merged = [...properties, ...rentalProperties, ...commercialProperties,
      ...(Array.isArray(customProperties) ? customProperties : [])];
    const byId = new Map();
    merged.filter(Boolean).forEach((property, index) => {
      const id = property.id ?? `listing-${index}`;
      byId.set(String(id), { ...property, id,
        category: ["sale", "rent", "commercial"].includes(property.category)
          ? property.category : "sale" });
    });
    return Array.from(byId.values());
  }, [customProperties]);

  // HERO CAROUSEL AUTO-ADVANCE

  useEffect(() => {
    if (selectedProperty || heroPaused || tourOpen || listFormOpen) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setHeroIndex(current => (current + 1) % HERO_SLIDES.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [selectedProperty, heroPaused, tourOpen, listFormOpen]);

  // SAVE FAVORITES

  useEffect(() => {
    try {
      localStorage.setItem(
        "leahBennettSaved",
        JSON.stringify(savedIds)
      );
    } catch {
      // Ignore storage quota errors for favorites
    }
  }, [savedIds]);

  const toggleSaveProperty = propertyId => {
    setSavedIds(current =>
      current.includes(propertyId)
        ? current.filter(id => id !== propertyId)
        : [...current, propertyId]
    );
  };

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

    const isCommercial = category === "commercial";
const isLand = newProperty.type === "Land";

   const listing = {
  id: `owner-${Date.now()}`,
  category,
  image: newProperty.image,
  type: newProperty.type,
  address: newProperty.address.trim(),

  price: category === "rent"
    ? `$${price.toLocaleString("en-US")} / Month`
    : `$${price.toLocaleString("en-US")}`,

  beds: isCommercial || isLand
    ? "N/A"
    : `${newProperty.beds || 0} Beds`,

  baths: isCommercial || isLand
    ? "N/A"
    : `${newProperty.baths || 0} Baths`,

  area: `${area.toLocaleString("en-US")} Sq Ft`,

  title: newProperty.title.trim(),
  description: newProperty.description.trim(),

  features: newProperty.features
    .split("\n")
    .map(item => item.trim())
    .filter(Boolean),

  sellerName: newProperty.sellerName.trim(),
  sellerEmail: newProperty.sellerEmail.trim(),

  floors: newProperty.floors
    ? `${newProperty.floors} Floors`
    : "",

  parking: newProperty.parking
    ? isCommercial
      ? `${newProperty.parking} Spaces`
      : newProperty.parking
    : "",

  furnishing: newProperty.furnishing,
  condition: newProperty.condition,

  commercialType: isCommercial
    ? newProperty.type
    : "",

  suitableFor: newProperty.suitableFor
    .split(",")
    .map(item => item.trim())
    .filter(Boolean),

  zoning: newProperty.zoning,
  frontage: newProperty.frontage,
  roadAccess: newProperty.roadAccess
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
  suitableFor: "",
  zoning: "",
  frontage: "",
  roadAccess: "Yes"
});

    setListingSuccess("Property published.");
    setListFormOpen(false);
    setActiveCategory(category);
    setShowSavedOnly(false);

    window.setTimeout(() => {
      setListingSuccess("");
    }, 5000);

    window.setTimeout(() => {
      document.getElementById("homes")?.scrollIntoView({
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
        threshold: 0.08,
        rootMargin: "0px 0px -20px 0px"
      }
    );

    elements.forEach(element => {
      observer.observe(element);
    });

    const fallbackTimer = window.setTimeout(() => {
      elements.forEach(element => {
        element.classList.add("is-visible");
      });
    }, 600);

    return () => {
      window.clearTimeout(fallbackTimer);
      observer.disconnect();
    };

  }, [selectedProperty, customProperties, activeCategory, searchQuery, sortBy, showSavedOnly]);

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

  const navigateToCategory = category => {
    setActiveCategory(category);
    setSearchQuery("");
    setSortBy("featured");
    setShowSavedOnly(false);
    closeMenu();
  };

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

  const prevHeroSlide = () => {
    setHeroIndex(current =>
      (current - 1 + HERO_SLIDES.length) % HERO_SLIDES.length
    );
  };

  const nextHeroSlide = () => {
    setHeroIndex(current => (current + 1) % HERO_SLIDES.length);
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


  const handleCategoryChange = category => {
  const defaultType = PROPERTY_TYPES[category][0];

  setNewProperty(current => ({
    ...current,
    listingCategory: category,
    type: defaultType,

    beds: "",
    baths: "",
    floors: "",
    parking: "",
    furnishing: "Unfurnished",
    condition: "",
    suitableFor: "",

    zoning: "",
    frontage: "",
    roadAccess: "Yes"
  }));

  setListingError("");
};

  const activeHeroSlide = HERO_SLIDES[heroIndex];

  return (
    <main>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; }
        body { margin: 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; background: #f7f6f2; color: #273338; }
        body.modal-open { overflow: hidden; }
        .site-header { position: sticky; top: 0; z-index: 900; display: flex; align-items: center; justify-content: space-between; padding: 18px 7%; background: rgba(247, 246, 242, 0.94); backdrop-filter: blur(10px); border-bottom: 1px solid rgba(39, 51, 56, 0.08); }
        .brand { display: inline-flex; align-items: center; gap: 10px; text-decoration: none; color: #273338; font-weight: 700; letter-spacing: 0.14em; font-size: 14px; }
        .brand small { display: block; font-size: 9px; font-weight: 500; letter-spacing: 0.24em; color: #618764; margin-top: 2px; }
        .brand-mark { color: #618764; font-size: 20px; }
        .nav { display: flex; align-items: center; gap: 22px; }
        .nav a, .nav button { text-decoration: none; color: #273338; font-size: 13px; font-weight: 600; letter-spacing: .01em; transition: color .2s ease, background .2s ease, border-color .2s ease; white-space: nowrap; }
        .nav a:hover, .nav button:hover { color: #618764; }
        .nav-list-cta, .nav-contact-cta { display: inline-flex; align-items: center; justify-content: center; gap: 7px; padding: 10px 15px; border: 1px solid #2B5748; border-radius: 999px; cursor: pointer; }
        .nav-list-cta { background: transparent; color: #2B5748 !important; font: inherit; }
        .nav-list-cta:hover { background: #e8eee8 !important; }
        .nav-contact-cta { background: #2B5748; color: #fff !important; }
        .nav-contact-cta:hover { background: #214638; color: #fff !important; border-color: #214638; }
        .menu-toggle { display: none; background: transparent; border: 0; color: #273338; cursor: pointer; }
        .hero { min-height: 82vh; display: flex; align-items: center; padding: 96px 7% 120px; color: #fff; isolation: isolate; }
        .hero [role="tablist"] button:focus-visible, .hero button:focus-visible { outline: 2px solid #fff; outline-offset: 4px; }
        .hero-copy { animation: heroCopyIn .55s ease both; }
        @keyframes heroCopyIn { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        .hero-copy { max-width: 680px; }
        .hero-copy h1 { font-size: clamp(38px, 6vw, 68px); font-weight: 500; line-height: 1.08; margin: 0; }
        .hero-copy em { font-style: italic; font-weight: 400; color: #d8e6da; }
        .text-link.light-link { display: inline-flex; align-items: center; gap: 8px; color: #fff; text-decoration: none; font-weight: 500; border-bottom: 1px solid rgba(255,255,255,0.75); padding-bottom: 4px; }
        .section-light { padding: 84px 7%; background: #f7f6f2; }
        .section-heading { text-align: center; max-width: 620px; margin: 0 auto 32px; }
        .section-kicker { display: block; color: #618764; font-size: 12px; font-weight: 600; letter-spacing: 0.22em; margin-bottom: 10px; }
        .section-heading h2 { font-size: clamp(28px, 4vw, 42px); font-weight: 500; margin: 0 0 10px; }
        .section-heading p { color: #66726e; margin: 0; font-size: 15px; }
        .property-filters { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; margin-bottom: 24px; }
        .property-filter { padding: 10px 18px; border-radius: 999px; border: 1px solid #d7ddd7; background: #fff; color: #273338; font: inherit; font-size: 14px; font-weight: 500; cursor: pointer; transition: all 0.2s; }
        .property-filter.active, .property-filter:hover { background: #273338; color: #fff; border-color: #273338; }
        .property-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 290px), 1fr)); gap: 28px; max-width: 1120px; margin: 0 auto; align-items: stretch; }
        .property-card { min-width: 0; }
        .property-card:focus-visible { outline: 3px solid #618764; outline-offset: 3px; }
        .property-image img { display: block; }
        .property-card { background: #fff; border-radius: 6px; padding: 16px; border: 1px solid rgba(39, 51, 56, 0.08); transition: transform 0.25s ease, box-shadow 0.25s ease; display: flex; flex-direction: column; }
        .property-card:hover { transform: translateY(-4px); box-shadow: 0 16px 34px rgba(25, 36, 38, 0.08); }
        .property-image { height: 220px; border-radius: 4px; overflow: hidden; margin-bottom: 16px; position: relative; }
        .property-image img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
        .property-card:hover .property-image img { transform: scale(1.04); }
        .image-arrow { position: absolute; right: 12px; bottom: 12px; width: 34px; height: 34px; border-radius: 50%; background: rgba(255,255,255,0.92); color: #273338; display: inline-flex; align-items: center; justify-content: center; }
        .property-type { color: #618764; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 6px; }
        .property-card h3 { font-size: 20px; font-weight: 500; margin: 0 0 8px; }
        .property-address { display: flex; align-items: center; gap: 6px; color: #66726e; font-size: 13px; margin: 0 0 12px; }
        .property-price { font-size: 20px; font-weight: 600; color: #2B5748; margin: 0 0 14px; }
        .property-meta { display: flex; flex-wrap: wrap; gap: 14px; padding-top: 12px; margin-top: auto; margin-bottom: 14px; border-top: 1px solid #eef1ee; color: #55615d; font-size: 13px; }
        .property-meta span { display: inline-flex; align-items: center; gap: 5px; }
        .property-card-link { display: inline-flex; align-items: center; gap: 4px; font-size: 13px; font-weight: 600; color: #273338; }
        .video-section { min-height: 420px; display: flex; align-items: center; justify-content: center; text-align: center; background-size: cover; background-position: center; color: #fff; padding: 64px 7%; }
        .video-content h2 { font-size: clamp(30px, 4.5vw, 46px); font-weight: 500; margin: 0 0 20px; }
        .play-btn { display: inline-flex; align-items: center; gap: 10px; padding: 14px 26px; border-radius: 999px; border: 1px solid rgba(255,255,255,0.8); background: rgba(255,255,255,0.14); backdrop-filter: blur(6px); color: #fff; font: inherit; font-size: 14px; font-weight: 500; cursor: pointer; }
        .testimonials h2 { text-align: center; font-size: clamp(28px, 4vw, 40px); font-weight: 500; margin: 0 0 36px; }
        .testimonial-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 24px; max-width: 1120px; margin: 0 auto; }
        .testimonial-grid figure { margin: 0; background: #fff; padding: 28px; border-radius: 6px; border: 1px solid rgba(39, 51, 56, 0.08); }
        .quote-mark { font-size: 40px; line-height: 1; color: #618764; margin-bottom: 10px; }
        .testimonial-grid blockquote { margin: 0 0 16px; color: #47524f; line-height: 1.7; font-size: 15px; }
        .testimonial-grid figcaption { font-weight: 600; font-size: 14px; color: #273338; }
        .footer {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          background: #273338;
          color: #fff;
          width: 100%;
          max-width: 100%;
          overflow: hidden;
        }
        .footer > * { min-width: 0; max-width: 100%; }
        .footer-info { padding: 56px 7%; }
        .footer-image {
          position: relative;
          display: block;
          align-self: stretch;
          width: 100%;
          min-width: 0;
          max-width: 100%;
          min-height: 460px;
          height: auto;
          overflow: hidden;
        }
        .footer-image img {
          position: absolute;
          inset: 0;
          display: block;
          width: 100%;
          height: 100%;
          max-width: none;
          min-width: 0;
          object-fit: cover;
          object-position: center;
        }
        .footer-brand { color: #fff; margin-bottom: 24px; }
        .footer-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 32px; }
        .footer-actions a { padding: 10px 18px; border: 1px solid rgba(255,255,255,0.4); color: #fff; text-decoration: none; font-size: 13px; border-radius: 999px; }
        .footer-actions a.filled { background: #618764; border-color: #618764; }
        .footer-info h2 { font-size: 28px; font-weight: 500; margin: 0 0 12px; }
        .contact-line { color: rgba(255,255,255,0.78); margin: 0 0 8px; font-size: 14px; }
        .socials { display: flex; gap: 14px; margin: 22px 0; }
        .socials a { color: #fff; opacity: 0.82; }
        .copyright { font-size: 12px; color: rgba(255,255,255,0.55); margin: 24px 0 0; }
        
        /* SEND A MESSAGE — refreshed sage/ivory panel and subtle motion */
        .contact-form {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          padding: clamp(34px, 5vw, 64px) clamp(24px, 6vw, 7%);
          display: flex;
          flex-direction: column;
          gap: 17px;
          color: #273338;
          background:
            radial-gradient(circle at 92% 8%, rgba(255,255,255,.78) 0, rgba(255,255,255,0) 28%),
            radial-gradient(circle at 5% 100%, rgba(97,135,100,.15) 0, rgba(97,135,100,0) 34%),
            linear-gradient(135deg, #e7eee6 0%, #f5f3ec 52%, #dce8dc 100%);
          border-top: 1px solid rgba(43,87,72,.12);
          animation: contactPanelIn .75s cubic-bezier(.2,.75,.25,1) both;
        }
        .contact-form::before,
        .contact-form::after {
          content: "";
          position: absolute;
          z-index: -1;
          border: 1px solid rgba(43,87,72,.12);
          border-radius: 50%;
          pointer-events: none;
          animation: contactOrbit 16s ease-in-out infinite alternate;
        }
        .contact-form::before {
          width: 280px;
          height: 280px;
          right: -95px;
          top: -155px;
        }
        .contact-form::after {
          width: 190px;
          height: 190px;
          right: 8%;
          bottom: -145px;
          animation-delay: -5s;
        }
        .contact-form h3 {
          position: relative;
          width: fit-content;
          margin: 0 0 8px;
          color: #203c32;
          font-size: clamp(25px, 3vw, 32px);
          font-weight: 500;
          letter-spacing: -.025em;
        }
        .contact-form h3::after {
          content: "";
          display: block;
          width: 54px;
          height: 3px;
          margin-top: 11px;
          border-radius: 99px;
          background: #618764;
          transform-origin: left;
          animation: contactLineIn .8s .25s ease both;
        }
        .contact-form label {
          display: flex;
          flex-direction: column;
          gap: 8px;
          color: #40534b;
          font-size: 13px;
          font-weight: 600;
          animation: contactFieldIn .55s ease both;
        }
        .contact-form label:nth-of-type(1) { animation-delay: .08s; }
        .contact-form label:nth-of-type(2) { animation-delay: .16s; }
        .contact-form label:nth-of-type(3) { animation-delay: .24s; }
        .contact-form input,
        .contact-form textarea {
          width: 100%;
          padding: 13px 14px;
          border-radius: 7px;
          border: 1px solid rgba(43,87,72,.2);
          background: rgba(255,255,255,.78);
          color: #273338;
          font: inherit;
          line-height: 1.5;
          outline: none;
          box-shadow: 0 3px 12px rgba(39,51,56,.025);
          transition: border-color .25s ease, background .25s ease, box-shadow .25s ease, transform .25s ease;
        }
        .contact-form textarea { min-height: 124px; resize: vertical; }
        .contact-form input::placeholder,
        .contact-form textarea::placeholder { color: #8a9690; }
        .contact-form input:hover,
        .contact-form textarea:hover { border-color: rgba(43,87,72,.42); background: #fff; }
        .contact-form input:focus,
        .contact-form textarea:focus {
          border-color: #618764;
          background: #fff;
          box-shadow: 0 0 0 4px rgba(97,135,100,.14), 0 8px 22px rgba(39,51,56,.06);
          transform: translateY(-1px);
        }
          .footer {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  align-items: stretch;
  background: #273338;
  border-radius: 20px;
}

.footer-info,
.contact-form,
.footer-image {
  min-width: 0;
  width: 100%;
  box-sizing: border-box;
}

.footer-image {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100%;
  overflow: hidden;
  margin: 0;
  padding: 0;
}

.footer-image img {
  display: block;
  width: 100%;
  height: 100%;
  min-height: 100%;
  max-width: 100%;
  object-fit: cover;
  object-position: center;
  margin: 0;
  padding: 0;
}
        .contact-form .dark-btn {
          align-self: flex-start;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          margin-top: 3px;
          padding: 13px 22px;
          background: #2b5748;
          color: #fff;
          border: 1px solid #2b5748;
          border-radius: 999px;
          font: inherit;
          font-weight: 600;
          text-decoration: none;
          cursor: pointer;
          box-shadow: 0 8px 18px rgba(43,87,72,.16);
          transition: transform .25s ease, background .25s ease, box-shadow .25s ease;
          animation: contactFieldIn .55s .32s ease both;
        }
        .contact-form .dark-btn:hover {
          transform: translateY(-3px);
          background: #1f4437;
          box-shadow: 0 13px 24px rgba(43,87,72,.24);
        }
        .contact-form .dark-btn:active { transform: translateY(-1px) scale(.985); }
        .contact-form .dark-btn:focus-visible { outline: 3px solid rgba(43,87,72,.3); outline-offset: 4px; }
        .contact-form .success-message {
          color: #244c3d;
          background: rgba(255,255,255,.72);
          border: 1px solid rgba(43,87,72,.25);
          animation: contactFieldIn .45s ease both;
        }
        @keyframes contactPanelIn {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes contactFieldIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes contactLineIn {
          from { transform: scaleX(0); opacity: .4; }
          to { transform: scaleX(1); opacity: 1; }
        }
        @keyframes contactOrbit {
          from { transform: translate3d(0,0,0) rotate(0deg); }
          to { transform: translate3d(-18px,14px,0) rotate(18deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .contact-form, .contact-form::before, .contact-form::after,
          .contact-form h3::after, .contact-form label, .contact-form .dark-btn {
            animation: none !important;
          }
          .contact-form input, .contact-form textarea, .contact-form .dark-btn {
            transition: none !important;
          }
        }
        .success-message { padding: 16px; background: rgba(97, 135, 100, 0.25); border: 1px solid #618764; border-radius: 4px; font-size: 14px; }
        .modal-backdrop { position: fixed; inset: 0; z-index: 1200; background: rgba(20, 30, 32, 0.76); display: flex; align-items: center; justify-content: center; padding: 20px; }
        .tour-modal { position: relative; max-width: 560px; width: 100%; background: #f7f6f2; color: #273338; border-radius: 6px; padding: 24px; text-align: center; }
        .tour-modal img { width: 100%; height: 260px; object-fit: cover; border-radius: 4px; margin-bottom: 16px; }
        .modal-close { position: absolute; top: 14px; right: 14px; width: 34px; height: 34px; border-radius: 50%; border: 0; background: rgba(255,255,255,0.9); cursor: pointer; display: inline-flex; align-items: center; justify-content: center; }
        .reveal { opacity: 0; transform: translateY(18px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .reveal.is-visible { opacity: 1; transform: translateY(0); }
        @media (max-width: 600px) {
          .section-light { padding: 62px 5%; }
          .hero { min-height: 76vh; padding: 72px 6% 125px; }
          .property-grid { grid-template-columns: minmax(0, 1fr); gap: 18px; }
          .property-image { height: 230px; }
        }
        @media (max-width: 860px) {
          .footer { grid-template-columns: minmax(0, 1fr); }
          .footer-image { width: 100%; height: 340px; min-height: 340px; }
          .menu-toggle { display: inline-flex; }
          .nav { display: none; position: absolute; top: 100%; left: 0; right: 0; flex-direction: column; align-items: stretch; padding: 22px 7% 26px; background: #f7f6f2; border-bottom: 1px solid rgba(39, 51, 56, 0.12); box-shadow: 0 14px 24px rgba(39, 51, 56, .08); gap: 17px; }
          .nav.open { display: flex; }
          .nav-list-cta, .nav-contact-cta { align-self: flex-start; margin-top: 3px; }
        }
          
      `}</style>

      {/* HEADER / TOP NAVIGATION */}

      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Leah Bennett Real Estate home">
          <span className="brand-mark">◈</span>
          <span>
            LEAH BENNETT
            <small>BUY · SELL · RENT · COMMERCIAL</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen(open => !open)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav id="main-navigation" className={menuOpen ? "nav open" : "nav"} aria-label="Main navigation">
          <a href="#home" onClick={closeMenu}>Home</a>

          <a href="#homes" onClick={() => navigateToCategory("all")}>
            Properties
          </a>

          <a href="#testimonials" onClick={closeMenu}>Reviews</a>

          <button
            type="button"
            className="nav-list-cta"
            onClick={() => {
              closeMenu();
              setListFormOpen(true);
            }}
          >
            List Your Property <ArrowUpRight size={14} />
          </button>

          <a className="nav-contact-cta" href="#contact" onClick={closeMenu}>
            Contact <ArrowUpRight size={14} />
          </a>
        </nav>
      </header>

      {/* HERO SECTION WITH IMAGE CAROUSEL */}

      <section
        className="hero"
        id="home"
        aria-roledescription="carousel"
        aria-label="Featured properties"
        onMouseEnter={() => setHeroPaused(true)}
        onMouseLeave={() => setHeroPaused(false)}
        onFocus={() => setHeroPaused(true)}
        onBlur={event => {
          if (!event.currentTarget.contains(event.relatedTarget)) setHeroPaused(false);
        }}
        style={{
          position: "relative",
          overflow: "hidden"
        }}
      >

        {/* CAROUSEL BACKGROUND SLIDES */}

        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0
          }}
        >
          {HERO_SLIDES.map((slide, index) => {
            const isActive = index === heroIndex;

            return (
              <div
                key={slide.label}
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `linear-gradient(90deg, rgba(20,32,30,.78) 0%, rgba(20,32,30,.42) 48%, rgba(20,32,30,.12) 100%), url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? "scale(1.03)" : "scale(1)",
                  transition: "opacity 900ms ease, transform 6000ms ease",
                  pointerEvents: "none"
                }}
              />
            );
          })}
        </div>

        <div
          className="hero-copy"
          style={{
            position: "relative",
            zIndex: 2
          }}
        >

          <h1 className="hero-animate hero-delay-1">
            Buy, Sell &amp; Rent
            <br />
            Homes and Find
            <br />
            <em>Commercial Spaces.</em>
          </h1>

          <p
            className="hero-animate hero-delay-2"
            style={{
              maxWidth: 560,
              margin: "20px 0 0",
              color: "rgba(255,255,255,.9)",
              fontSize: "clamp(14px, 1.35vw, 17px)",
              lineHeight: 1.7
            }}
          >
            Whether you are searching for a home, looking to rent, selling your property,
            or finding the right commercial space, we are here to help.
          </p>

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

        {/* HERO CAROUSEL CONTROLS & CAPTION */}

        <div
          style={{
            position: "absolute",
            left: "7%",
            right: "7%",
            bottom: 26,
            zIndex: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16
          }}
        >
          <div style={{ color: "rgba(255,255,255,.92)" }}>
            <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.04em" }}>
              {activeHeroSlide.label}
            </div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,.72)", marginTop: 2 }}>
              {activeHeroSlide.sublabel}
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              role="tablist"
              aria-label="Choose hero slide"
              style={{ display: "flex", alignItems: "center", gap: 7 }}
            >
              {HERO_SLIDES.map((slide, index) => {
                const isActive = index === heroIndex;

                return (
                  <button
                    key={slide.label}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-label={`Show slide ${index + 1}: ${slide.label}`}
                    onClick={() => setHeroIndex(index)}
                    style={{
                      width: isActive ? 24 : 8,
                      height: 8,
                      borderRadius: 999,
                      border: 0,
                      padding: 0,
                      cursor: "pointer",
                      background: isActive ? "#fff" : "rgba(255,255,255,.45)",
                      transition: "width 250ms ease, background 250ms ease"
                    }}
                  />
                );
              })}
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <button
                type="button"
                aria-label="Previous slide"
                onClick={prevHeroSlide}
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,.45)",
                  background: "rgba(20,32,30,.45)",
                  color: "#fff",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer"
                }}
              >
                <ChevronLeft size={17} />
              </button>

              <button
                type="button"
                aria-label="Next slide"
                onClick={nextHeroSlide}
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,.45)",
                  background: "rgba(20,32,30,.45)",
                  color: "#fff",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer"
                }}
              >
                <ChevronRight size={17} />
              </button>
            </div>
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
        title="Explore All Properties"
        properties={combinedListings}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        sortBy={sortBy}
        onSortChange={setSortBy}
        savedIds={savedIds}
        onToggleSave={toggleSaveProperty}
        showSavedOnly={showSavedOnly}
        onToggleSavedOnly={() => setShowSavedOnly(prev => !prev)}
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

      
{/* FOOTER */}

<footer className="footer" id="contact">

  {/* CONTACT INFORMATION */}

  <div className="footer-info">

    <a className="brand footer-brand" href="#home">
      <span className="brand-mark">◈</span>

      <span>
        LEAH BENNETT
        <small>BUY · SELL · RENT · COMMERCIAL</small>
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

    <h2>Let's Connect</h2>

    <p className="contact-line">
      123 Anywhere St., Any City
    </p>

    <p className="contact-line">
      (123) 456-7890
    </p>

    <p className="contact-line">
      hello@leahbennett.com
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
      © 2026 Leah Bennett Real Estate. All rights reserved.
    </p>

  </div>

  {/* FOOTER IMAGE */}

  <div className="footer-image">
    <img
      src={IMAGES_3D.contactInterior3d}
      alt="Luxury modern interior design"
      loading="lazy"
    />
  </div>

  {/* CONTACT FORM */}

  <form
    className="contact-form"
    onSubmit={submitForm}
  >

    <h3>Send a Message</h3>

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
          Email Address

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
            rows="4"
            value={form.message}
            onChange={event => setForm({
              ...form,
              message: event.target.value
            })}
            placeholder="How can we help you?"
          />
        </label>

        <button className="dark-btn" type="submit">
          Send Message <ArrowUpRight size={15} />
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
  {/* CATEGORY */}

  <label style={fieldStyle}>
    Listing Category

    <select
      required
      value={newProperty.listingCategory}
      onChange={event =>
        handleCategoryChange(event.target.value)
      }
      style={listingInputStyle}
    >
      <option value="sale">For Sale</option>
      <option value="rent">For Rent</option>
      <option value="commercial">Commercial</option>
    </select>
  </label>

  {/* PROPERTY TYPE */}

  <label style={fieldStyle}>
    Property Type

    <select
      required
      value={newProperty.type}
      onChange={event =>
        updateNewProperty("type", event.target.value)
      }
      style={listingInputStyle}
    >
      {PROPERTY_TYPES[newProperty.listingCategory].map(type => (
        <option key={type} value={type}>
          {type}
        </option>
      ))}
    </select>
  </label>

  {/* PROPERTY TITLE */}

  <label style={{
    ...fieldStyle,
    gridColumn: "1 / -1"
  }}>
    Property Title

    <input
      required
      placeholder="Enter property title"
      value={newProperty.title}
      onChange={event =>
        updateNewProperty("title", event.target.value)
      }
      style={listingInputStyle}
    />
  </label>

  {/* ADDRESS */}

  <label style={{
    ...fieldStyle,
    gridColumn: "1 / -1"
  }}>
    Property Address

    <input
      required
      placeholder="Street, City, State"
      value={newProperty.address}
      onChange={event =>
        updateNewProperty("address", event.target.value)
      }
      style={listingInputStyle}
    />
  </label>

  {/* PRICE */}

  <label style={fieldStyle}>
    {newProperty.listingCategory === "rent"
      ? "Monthly Rent ($)"
      : "Property Price ($)"}

    <input
      required
      type="number"
      min="1"
      placeholder="Enter amount"
      value={newProperty.price}
      onChange={event =>
        updateNewProperty("price", event.target.value)
      }
      style={listingInputStyle}
    />
  </label>

  {/* AREA */}

  <label style={fieldStyle}>
    {newProperty.type === "Land"
      ? "Land Area (Sq Ft)"
      : "Built-up Area (Sq Ft)"}

    <input
      required
      type="number"
      min="1"
      placeholder="1800"
      value={newProperty.area}
      onChange={event =>
        updateNewProperty("area", event.target.value)
      }
      style={listingInputStyle}
    />
  </label>

  {/* RESIDENTIAL FIELDS */}

  {newProperty.listingCategory !== "commercial" &&
    newProperty.type !== "Land" && (
      <>
        <label style={fieldStyle}>
          Bedrooms

          <input
            required
            type="number"
            min="0"
            placeholder="3"
            value={newProperty.beds}
            onChange={event =>
              updateNewProperty("beds", event.target.value)
            }
            style={listingInputStyle}
          />
        </label>

        <label style={fieldStyle}>
          Bathrooms

          <input
            required
            type="number"
            min="0"
            placeholder="2"
            value={newProperty.baths}
            onChange={event =>
              updateNewProperty("baths", event.target.value)
            }
            style={listingInputStyle}
          />
        </label>

        <label style={fieldStyle}>
          Furnishing

          <select
            value={newProperty.furnishing}
            onChange={event =>
              updateNewProperty("furnishing", event.target.value)
            }
            style={listingInputStyle}
          >
            <option>Unfurnished</option>
            <option>Semi-Furnished</option>
            <option>Fully Furnished</option>
          </select>
        </label>

        <label style={fieldStyle}>
          Parking

          <input
            placeholder="2 Spaces"
            value={newProperty.parking}
            onChange={event =>
              updateNewProperty("parking", event.target.value)
            }
            style={listingInputStyle}
          />
        </label>

        <label style={{
          ...fieldStyle,
          gridColumn: "1 / -1"
        }}>
          Property Condition

          <select
            value={newProperty.condition}
            onChange={event =>
              updateNewProperty("condition", event.target.value)
            }
            style={listingInputStyle}
          >
            <option value="">Select condition</option>
            <option>New Construction</option>
            <option>Excellent Condition</option>
            <option>Good Condition</option>
            <option>Recently Renovated</option>
            <option>Needs Renovation</option>
          </select>
        </label>
      </>
    )}

  {/* LAND FIELDS */}

  {newProperty.type === "Land" && (
    <>
      <label style={fieldStyle}>
        Land Zoning

        <select
          value={newProperty.zoning}
          onChange={event =>
            updateNewProperty("zoning", event.target.value)
          }
          style={listingInputStyle}
        >
          <option value="">Select zoning</option>
          <option>Residential</option>
          <option>Commercial</option>
          <option>Agricultural</option>
          <option>Industrial</option>
          <option>Mixed Use</option>
        </select>
      </label>

      <label style={fieldStyle}>
        Road Access

        <select
          value={newProperty.roadAccess}
          onChange={event =>
            updateNewProperty("roadAccess", event.target.value)
          }
          style={listingInputStyle}
        >
          <option>Yes</option>
          <option>No</option>
        </select>
      </label>

      <label style={{
        ...fieldStyle,
        gridColumn: "1 / -1"
      }}>
        Road Frontage

        <input
          placeholder="e.g. 40 Feet"
          value={newProperty.frontage}
          onChange={event =>
            updateNewProperty("frontage", event.target.value)
          }
          style={listingInputStyle}
        />
      </label>
    </>
  )}

  {/* COMMERCIAL FIELDS */}

  {newProperty.listingCategory === "commercial" && (
    <>
      <label style={fieldStyle}>
        Number of Floors

        <input
          type="number"
          min="1"
          placeholder="2"
          value={newProperty.floors}
          onChange={event =>
            updateNewProperty("floors", event.target.value)
          }
          style={listingInputStyle}
        />
      </label>

      <label style={fieldStyle}>
        Parking Spaces

        <input
          type="number"
          min="0"
          placeholder="10"
          value={newProperty.parking}
          onChange={event =>
            updateNewProperty("parking", event.target.value)
          }
          style={listingInputStyle}
        />
      </label>

      <label style={fieldStyle}>
        Furnishing

        <select
          value={newProperty.furnishing}
          onChange={event =>
            updateNewProperty("furnishing", event.target.value)
          }
          style={listingInputStyle}
        >
          <option>Unfurnished</option>
          <option>Semi-Furnished</option>
          <option>Fully Furnished</option>
        </select>
      </label>

      <label style={fieldStyle}>
        Property Condition

        <select
          value={newProperty.condition}
          onChange={event =>
            updateNewProperty("condition", event.target.value)
          }
          style={listingInputStyle}
        >
          <option value="">Select condition</option>
          <option>Ready to Occupy</option>
          <option>New Construction</option>
          <option>Recently Renovated</option>
          <option>Good Condition</option>
          <option>Needs Renovation</option>
        </select>
      </label>

      <label style={{
        ...fieldStyle,
        gridColumn: "1 / -1"
      }}>
        Suitable Business Uses

        <input
          placeholder="Office, Retail, Showroom, Warehouse"
          value={newProperty.suitableFor}
          onChange={event =>
            updateNewProperty("suitableFor", event.target.value)
          }
          style={listingInputStyle}
        />
      </label>
    </>
  )}

  {/* OWNER INFORMATION */}

  <label style={fieldStyle}>
    Owner Name

    <input
      required
      placeholder="Full name"
      value={newProperty.sellerName}
      onChange={event =>
        updateNewProperty("sellerName", event.target.value)
      }
      style={listingInputStyle}
    />
  </label>

  <label style={fieldStyle}>
    Email Address

    <input
      required
      type="email"
      placeholder="you@example.com"
      value={newProperty.sellerEmail}
      onChange={event =>
        updateNewProperty("sellerEmail", event.target.value)
      }
      style={listingInputStyle}
    />
  </label>

  {/* DESCRIPTION */}

  <label style={{
    ...fieldStyle,
    gridColumn: "1 / -1"
  }}>
    Property Description

    <textarea
      required
      rows={4}
      placeholder="Describe the property, location and highlights..."
      value={newProperty.description}
      onChange={event =>
        updateNewProperty("description", event.target.value)
      }
      style={{
        ...listingInputStyle,
        resize: "vertical"
      }}
    />
  </label>

  {/* FEATURES */}

  <label style={{
    ...fieldStyle,
    gridColumn: "1 / -1"
  }}>
    Property Features

    <textarea
      rows={4}
      placeholder={"Security\nParking\nGarden\nAir Conditioning"}
      value={newProperty.features}
      onChange={event =>
        updateNewProperty("features", event.target.value)
      }
      style={{
        ...listingInputStyle,
        resize: "vertical"
      }}
    />
  </label>

  {/* PROPERTY IMAGE */}

  <label style={{
    ...fieldStyle,
    gridColumn: "1 / -1"
  }}>
    Upload Property Image (Maximum 1 MB)

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
        alt="Property preview"
        style={{
          width: "100%",
          height: 230,
          objectFit: "cover",
          borderRadius: 5,
          marginTop: 10
        }}
      />
    )}
  </label>

  {/* ERROR */}

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

  {/* ACTION BUTTONS */}

  <div style={{
    display: "flex",
    gap: 12,
    justifyContent: "flex-end",
    gridColumn: "1 / -1",
    flexWrap: "wrap",
    marginTop: 10
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
    >
      Publish Property <ArrowUpRight size={15} />
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