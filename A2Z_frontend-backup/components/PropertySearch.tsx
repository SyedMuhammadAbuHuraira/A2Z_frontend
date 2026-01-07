"use client";

import { useState } from "react";
import { FaSearch, FaBed, FaBath, FaRulerCombined, FaFilter, FaMapMarkerAlt, FaTag, FaHome,   FaBuilding   } from "react-icons/fa";

const PropertySearch = () => {
  const [searchType, setSearchType] = useState<"residential" | "commercial" | "investment">("residential");
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("any");
  const [priceRange, setPriceRange] = useState("any");
  const [bedrooms, setBedrooms] = useState("any");
  const [bathrooms, setBathrooms] = useState("any");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would integrate with IDX
    console.log("Searching properties:", { searchType, location, propertyType, priceRange, bedrooms, bathrooms });
  };

  const residentialFilters = searchType === "residential";
  const commercialFilters = searchType === "commercial";
  const investmentFilters = searchType === "investment";

  return (
    <section className="relative py-20 bg-gradient-to-b from-white via-brand-grey-lighter/30 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full bg-[linear-gradient(90deg,#4B0082_1px,transparent_1px),linear-gradient(180deg,#4B0082_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-brand-indigo/10 to-brand-red/10 px-6 py-3 rounded-full mb-6">
            <div className="w-2 h-2 bg-brand-red rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-brand-grey-dark uppercase tracking-wider">
              Property Search
            </span>
            <div className="w-2 h-2 bg-brand-red rounded-full animate-pulse" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
            Find Your{" "}
            <span className="bg-gradient-to-r from-brand-indigo via-brand-red to-brand-indigo bg-clip-text text-transparent animate-gradient-flow">
              Dream Property
            </span>
          </h2>
          
          <p className="text-xl text-brand-grey max-w-2xl mx-auto font-light leading-relaxed">
            Search our extensive database of residential, commercial, and investment properties across New Jersey.
          </p>
        </div>

        {/* Main Search Container */}
        <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-10 border border-white/20 overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-brand-indigo/5 to-transparent rounded-full -translate-x-20 -translate-y-20" />
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-gradient-to-tl from-brand-red/5 to-transparent rounded-full translate-x-20 translate-y-20" />
          
          {/* Search Type Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <button
              onClick={() => setSearchType("residential")}
              className={`group relative px-8 py-4 rounded-xl font-semibold transition-all duration-500 flex items-center gap-3 ${
                searchType === "residential"
                  ? "bg-gradient-to-r from-brand-indigo to-brand-indigo-dark text-white shadow-lg shadow-brand-indigo/30"
                  : "bg-white text-brand-grey-dark border border-gray-200 hover:border-brand-indigo/30"
              }`}
            >
              {searchType === "residential" && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              )}
              <FaHome className={`${searchType === "residential" ? "text-white" : "text-brand-indigo"}`} />
              <span className="relative">Residential</span>
            </button>
            
            <button
              onClick={() => setSearchType("commercial")}
              className={`group relative px-8 py-4 rounded-xl font-semibold transition-all duration-500 flex items-center gap-3 ${
                searchType === "commercial"
                  ? "bg-gradient-to-r from-brand-indigo to-brand-indigo-dark text-white shadow-lg shadow-brand-indigo/30"
                  : "bg-white text-brand-grey-dark border border-gray-200 hover:border-brand-indigo/30"
              }`}
            >
              {searchType === "commercial" && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              )}
              <FaBuilding className={`${searchType === "commercial" ? "text-white" : "text-brand-indigo"}`} />
              <span className="relative">Commercial</span>
            </button>
            
            <button
              onClick={() => setSearchType("investment")}
              className={`group relative px-8 py-4 rounded-xl font-semibold transition-all duration-500 flex items-center gap-3 ${
                searchType === "investment"
                  ? "bg-gradient-to-r from-brand-indigo to-brand-indigo-dark text-white shadow-lg shadow-brand-indigo/30"
                  : "bg-white text-brand-grey-dark border border-gray-200 hover:border-brand-indigo/30"
              }`}
            >
              {searchType === "investment" && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              )}
              <FaTag className={`${searchType === "investment" ? "text-white" : "text-brand-indigo"}`} />
              <span className="relative">Investment</span>
            </button>
          </div>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="space-y-8">
            {/* Location Search */}
            <div className="relative group">
              <label className="block text-sm font-semibold mb-3 text-brand-grey-dark uppercase tracking-wider">
                <FaMapMarkerAlt className="inline mr-2 text-brand-red" />
                Location
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Enter city, neighborhood, or ZIP code"
                  className="w-full pl-12 pr-4 py-4 bg-white/50 border-2 border-gray-200 rounded-xl focus:border-brand-indigo focus:ring-2 focus:ring-brand-indigo/20 transition-all duration-300 placeholder-gray-400 hover:border-brand-indigo/50"
                />
                <FaMapMarkerAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-brand-grey-light" />
              </div>
            </div>

            {/* Property Filters Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Property Type */}
              <div className="group">
                <label className="block text-sm font-semibold mb-3 text-brand-grey-dark uppercase tracking-wider">
                  <FaHome className="inline mr-2 text-brand-red" />
                  Property Type
                </label>
                <div className="relative">
                  <select
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full pl-4 pr-10 py-4 bg-white/50 border-2 border-gray-200 rounded-xl focus:border-brand-indigo focus:ring-2 focus:ring-brand-indigo/20 transition-all duration-300 appearance-none hover:border-brand-indigo/50"
                  >
                    <option value="any">Any Type</option>
                    {searchType === "residential" && (
                      <>
                        <option value="single-family">Single Family</option>
                        <option value="condo">Condo</option>
                        <option value="townhouse">Townhouse</option>
                        <option value="multi-family">Multi-Family</option>
                        <option value="luxury">Luxury Homes</option>
                      </>
                    )}
                    {searchType === "commercial" && (
                      <>
                        <option value="retail">Retail Space</option>
                        <option value="office">Office Building</option>
                        <option value="industrial">Industrial</option>
                        <option value="mixed-use">Mixed-Use</option>
                        <option value="land">Land</option>
                      </>
                    )}
                    {searchType === "investment" && (
                      <>
                        <option value="rental">Rental Property</option>
                        <option value="fixer-upper">Fixer Upper</option>
                        <option value="distressed">Distressed</option>
                        <option value="multi-unit">Multi-Unit</option>
                        <option value="development">Development</option>
                      </>
                    )}
                  </select>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-brand-grey-light">
                    <FaFilter />
                  </div>
                </div>
              </div>

              {/* Price Range */}
              <div className="group">
                <label className="block text-sm font-semibold mb-3 text-brand-grey-dark uppercase tracking-wider">
                  <FaTag className="inline mr-2 text-brand-red" />
                  Price Range
                </label>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full px-4 py-4 bg-white/50 border-2 border-gray-200 rounded-xl focus:border-brand-indigo focus:ring-2 focus:ring-brand-indigo/20 transition-all duration-300 appearance-none hover:border-brand-indigo/50"
                >
                  <option value="any">Any Price</option>
                  {searchType === "residential" && (
                    <>
                      <option value="0-300000">Up to $300,000</option>
                      <option value="300000-500000">$300K - $500K</option>
                      <option value="500000-750000">$500K - $750K</option>
                      <option value="750000-1000000">$750K - $1M</option>
                      <option value="1000000+">$1M+</option>
                    </>
                  )}
                  {searchType === "commercial" && (
                    <>
                      <option value="0-1000000">Up to $1M</option>
                      <option value="1000000-3000000">$1M - $3M</option>
                      <option value="3000000-10000000">$3M - $10M</option>
                      <option value="10000000+">$10M+</option>
                    </>
                  )}
                  {searchType === "investment" && (
                    <>
                      <option value="0-250000">Up to $250K</option>
                      <option value="250000-500000">$250K - $500K</option>
                      <option value="500000-1000000">$500K - $1M</option>
                      <option value="1000000-3000000">$1M - $3M</option>
                      <option value="3000000+">$3M+</option>
                    </>
                  )}
                </select>
              </div>

              {/* Bedrooms (Residential only) */}
              {residentialFilters && (
                <div className="group">
                  <label className="block text-sm font-semibold mb-3 text-brand-grey-dark uppercase tracking-wider">
                    <FaBed className="inline mr-2 text-brand-red" />
                    Bedrooms
                  </label>
                  <select
                    value={bedrooms}
                    onChange={(e) => setBedrooms(e.target.value)}
                    className="w-full px-4 py-4 bg-white/50 border-2 border-gray-200 rounded-xl focus:border-brand-indigo focus:ring-2 focus:ring-brand-indigo/20 transition-all duration-300 appearance-none hover:border-brand-indigo/50"
                  >
                    <option value="any">Any</option>
                    <option value="1">1+</option>
                    <option value="2">2+</option>
                    <option value="3">3+</option>
                    <option value="4">4+</option>
                    <option value="5">5+</option>
                  </select>
                </div>
              )}

              {/* Bathrooms (Residential only) */}
              {residentialFilters && (
                <div className="group">
                  <label className="block text-sm font-semibold mb-3 text-brand-grey-dark uppercase tracking-wider">
                    <FaBath className="inline mr-2 text-brand-red" />
                    Bathrooms
                  </label>
                  <select
                    value={bathrooms}
                    onChange={(e) => setBathrooms(e.target.value)}
                    className="w-full px-4 py-4 bg-white/50 border-2 border-gray-200 rounded-xl focus:border-brand-indigo focus:ring-2 focus:ring-brand-indigo/20 transition-all duration-300 appearance-none hover:border-brand-indigo/50"
                  >
                    <option value="any">Any</option>
                    <option value="1">1+</option>
                    <option value="2">2+</option>
                    <option value="3">3+</option>
                    <option value="4">4+</option>
                  </select>
                </div>
              )}

              {/* Extra filters for Commercial & Investment */}
              {commercialFilters && (
                <>
                  <div className="group">
                    <label className="block text-sm font-semibold mb-3 text-brand-grey-dark uppercase tracking-wider">
                      Square Footage
                    </label>
                    <select className="w-full px-4 py-4 bg-white/50 border-2 border-gray-200 rounded-xl focus:border-brand-indigo focus:ring-2 focus:ring-brand-indigo/20 transition-all duration-300 appearance-none hover:border-brand-indigo/50">
                      <option value="any">Any Size</option>
                      <option value="0-5000">Up to 5,000 sqft</option>
                      <option value="5000-10000">5,000 - 10,000 sqft</option>
                      <option value="10000-50000">10,000 - 50,000 sqft</option>
                      <option value="50000+">50,000+ sqft</option>
                    </select>
                  </div>
                  <div className="group">
                    <label className="block text-sm font-semibold mb-3 text-brand-grey-dark uppercase tracking-wider">
                      Property Class
                    </label>
                    <select className="w-full px-4 py-4 bg-white/50 border-2 border-gray-200 rounded-xl focus:border-brand-indigo focus:ring-2 focus:ring-brand-indigo/20 transition-all duration-300 appearance-none hover:border-brand-indigo/50">
                      <option value="any">Any Class</option>
                      <option value="a">Class A</option>
                      <option value="b">Class B</option>
                      <option value="c">Class C</option>
                    </select>
                  </div>
                </>
              )}

              {investmentFilters && (
                <>
                  <div className="group">
                    <label className="block text-sm font-semibold mb-3 text-brand-grey-dark uppercase tracking-wider">
                      ROI Target
                    </label>
                    <select className="w-full px-4 py-4 bg-white/50 border-2 border-gray-200 rounded-xl focus:border-brand-indigo focus:ring-2 focus:ring-brand-indigo/20 transition-all duration-300 appearance-none hover:border-brand-indigo/50">
                      <option value="any">Any ROI</option>
                      <option value="5-10">5% - 10%</option>
                      <option value="10-15">10% - 15%</option>
                      <option value="15-20">15% - 20%</option>
                      <option value="20+">20%+</option>
                    </select>
                  </div>
                  <div className="group">
                    <label className="block text-sm font-semibold mb-3 text-brand-grey-dark uppercase tracking-wider">
                      Property Condition
                    </label>
                    <select className="w-full px-4 py-4 bg-white/50 border-2 border-gray-200 rounded-xl focus:border-brand-indigo focus:ring-2 focus:ring-brand-indigo/20 transition-all duration-300 appearance-none hover:border-brand-indigo/50">
                      <option value="any">Any Condition</option>
                      <option value="new">New Construction</option>
                      <option value="excellent">Excellent</option>
                      <option value="good">Good</option>
                      <option value="needs-work">Needs Work</option>
                    </select>
                  </div>
                </>
              )}
            </div>

            {/* Search Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="group relative w-full bg-gradient-to-r from-brand-red to-brand-red-dark text-white py-5 px-8 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-brand-red/40 transition-all duration-500 hover:-translate-y-1 flex items-center justify-center gap-3 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <FaSearch className="relative text-xl group-hover:scale-110 transition-transform duration-300" />
                <span className="relative">
                  Search {searchType === "residential" ? "Homes" : searchType === "commercial" ? "Properties" : "Investments"}
                </span>
              </button>
            </div>
          </form>

          {/* Advanced Search Link */}
          <div className="mt-8 text-center">
            <a 
              href="#" 
              className="inline-flex items-center gap-2 text-brand-indigo font-semibold hover:text-brand-red transition-colors duration-300 group"
            >
              <span>Advanced Search Options</span>
              <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
            </a>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="relative inline-flex items-center justify-center w-20 h-20 mb-4">
              <div className="absolute inset-0 bg-brand-indigo/10 rounded-full group-hover:scale-110 transition-transform duration-500" />
              <div className="text-3xl font-bold text-brand-indigo relative">150+</div>
            </div>
            <div className="text-sm text-brand-grey uppercase tracking-wider">Properties Listed</div>
          </div>
          
          <div className="text-center group">
            <div className="relative inline-flex items-center justify-center w-20 h-20 mb-4">
              <div className="absolute inset-0 bg-brand-red/10 rounded-full group-hover:scale-110 transition-transform duration-500" />
              <div className="text-3xl font-bold text-brand-red relative">24</div>
            </div>
            <div className="text-sm text-brand-grey uppercase tracking-wider">Hours Avg. Response</div>
          </div>
          
          <div className="text-center group">
            <div className="relative inline-flex items-center justify-center w-20 h-20 mb-4">
              <div className="absolute inset-0 bg-brand-indigo/10 rounded-full group-hover:scale-110 transition-transform duration-500" />
              <div className="text-3xl font-bold text-brand-indigo relative">98%</div>
            </div>
            <div className="text-sm text-brand-grey uppercase tracking-wider">Client Satisfaction</div>
          </div>
          
          <div className="text-center group">
            <div className="relative inline-flex items-center justify-center w-20 h-20 mb-4">
              <div className="absolute inset-0 bg-brand-red/10 rounded-full group-hover:scale-110 transition-transform duration-500" />
              <div className="text-3xl font-bold text-brand-red relative">30</div>
            </div>
            <div className="text-sm text-brand-grey uppercase tracking-wider">Days Avg. to Close</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertySearch;