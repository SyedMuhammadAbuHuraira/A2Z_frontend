"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { X, Calendar, Clock, User, Check, Video, Mail, Phone } from "lucide-react";

// Types define karo
type UserDetails = {
  name: string;
  email: string;
  phone: string;
  message: string;
  purpose: "buying" | "selling";
};

type BookingStep = 1 | 2 | 3 | 4;

const FinalCTASection = () => {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [bookingStep, setBookingStep] = useState<BookingStep>(1);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // User details state with proper typing
  const [userDetails, setUserDetails] = useState<UserDetails>({
    name: "",
    email: "",
    phone: "",
    message: "",
    purpose: "buying"
  });

  // Time slots
  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", 
    "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  // Next 7 days
  const getNextDays = () => {
    const days: string[] = [];
    for (let i = 1; i <= 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      days.push(date.toISOString().split('T')[0]);
    }
    return days;
  };

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    setBookingStep(3);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setBookingStep(4);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUserDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePurposeSelect = (purpose: "buying" | "selling") => {
    setUserDetails(prev => ({
      ...prev,
      purpose
    }));
    setBookingStep(2);
  };

  const handleBookingSubmit = async () => {
    if (!userDetails.name || !userDetails.email || !userDetails.phone) {
      showNotification("Please fill all required fields", "error");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/book-consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...userDetails,
          date: selectedDate,
          time: selectedTime,
          timezone: 'EST'
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Booking failed');
      }

      // Show success state
      setBookingSuccess(true);
      
      // Auto download calendar invite
      setTimeout(() => {
        if (data.googleCalendarLink) {
          window.open(data.googleCalendarLink, '_blank');
        }
      }, 1000);

      // Reset after 3 seconds
      setTimeout(() => {
        handleCloseModal();
        // Show success notification
        showNotification("Booking confirmed! Check your email for meeting details.", "success");
      }, 3000);

    } catch (error) {
      console.error('Booking error:', error);
      showNotification("Failed to book. Please try again or contact us directly.", "error");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseModal = () => {
    setShowBookingModal(false);
    setSelectedDate("");
    setSelectedTime("");
    setUserDetails({ 
      name: "", 
      email: "", 
      phone: "", 
      message: "",
      purpose: "buying" 
    });
    setBookingStep(1);
    setBookingSuccess(false);
    setIsLoading(false);
  };

  // Notification function with proper typing
  const showNotification = (message: string, type: "success" | "error" = "success") => {
    // You can use toast library here
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg z-[1000] ${
      type === 'success' ? 'bg-green-100 text-green-800 border border-green-200' : 'bg-red-100 text-red-800 border border-red-200'
    }`;
    notification.innerHTML = `
      <div class="flex items-center gap-3">
        <div class="text-lg">${type === 'success' ? '✅' : '❌'}</div>
        <div>${message}</div>
      </div>
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.remove();
    }, 5000);
  };

  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50/30">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            {/* Minimal Header */}
            <div className="mb-10">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Ready to Make Your Move? 🎯
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Let's discuss your Central NJ real estate goals
              </p>
            </div>

            {/* Heavy Attractive Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-12">
              
              {/* Book Consultation Button - Heavy Design */}
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div
                  onClick={() => setShowBookingModal(true)}
                  className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 group cursor-pointer"
                >
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  
                  <div className="relative z-10">
                    {/* Icon with Pulse */}
                    <div className="relative inline-flex mb-6">
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-3xl">
                        📅
                      </div>
                      {/* Pulsing Ring */}
                      <div className="absolute inset-0 border-2 border-white/30 rounded-2xl animate-ping" />
                    </div>
                    
                    {/* Button Content */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold">Book Strategy Session</h3>
                      <p className="text-blue-100 text-sm">Free 30-minute consultation</p>
                      
                      {/* Features */}
                      <div className="flex flex-wrap gap-3 justify-center">
                        <span className="text-xs bg-white/20 px-3 py-1 rounded-full">✅ Instant Google Meet Link</span>
                        <span className="text-xs bg-white/20 px-3 py-1 rounded-full">📧 Email Confirmation</span>
                        <span className="text-xs bg-white/20 px-3 py-1 rounded-full">💎 Calendar Invite</span>
                      </div>
                    </div>
                    
                    {/* Arrow Indicator */}
                    <div className="mt-8 flex justify-center">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                        <span className="text-xl">→</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Get Home Value Button - Heavy Design */}
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link href="/home-value" className="block">
                  <div className="relative overflow-hidden bg-gradient-to-br from-white to-blue-50 border-2 border-blue-200 text-gray-900 rounded-2xl p-8 shadow-2xl hover:shadow-3xl hover:border-blue-300 transition-all duration-500 group">
                    {/* Subtle Shimmer */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    
                    <div className="relative z-10">
                      {/* Icon */}
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto">
                        💰
                      </div>
                      
                      {/* Button Content */}
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-gray-900">Get Instant Home Value</h3>
                        <p className="text-gray-600 text-sm">Free market analysis report</p>
                        
                        {/* Features */}
                        <div className="flex flex-wrap gap-3 justify-center">
                          <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">📊 Accurate Valuation</span>
                          <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">📈 Market Trends</span>
                          <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">⚡ Instant Report</span>
                        </div>
                      </div>
                      
                      {/* Arrow Indicator */}
                      <div className="mt-8 flex justify-center">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                          <span className="text-xl text-blue-600">→</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>

            {/* Minimal Trust Badge */}
            <div className="inline-flex items-center gap-6 bg-white border border-gray-200 rounded-xl px-8 py-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="text-2xl">🤝</div>
                <div className="text-left">
                  <h4 className="font-bold text-gray-900">Trusted Guidance</h4>
                  <p className="text-gray-600 text-sm">Since 2014 in Central NJ</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Modal Header */}
            <div className="p-6 border-b">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Book Strategy Session</h3>
                  <p className="text-gray-600">30-minute free video consultation</p>
                </div>
                <button
                  onClick={handleCloseModal}
                  disabled={isLoading}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors disabled:opacity-50"
                >
                  <X size={24} />
                </button>
              </div>
              
              {/* Progress Steps */}
              <div className="flex items-center justify-between mt-6">
                {[1, 2, 3, 4].map((step) => (
                  <div key={step} className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      bookingStep >= step 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-200 text-gray-500'
                    }`}>
                      {bookingStep > step ? <Check size={16} /> : step}
                    </div>
                    {step < 4 && (
                      <div className={`w-12 h-1 mx-2 ${
                        bookingStep > step ? 'bg-blue-600' : 'bg-gray-200'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              {bookingSuccess ? (
                <div className="text-center py-8">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="text-green-600" size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed! 🎉</h3>
                  <p className="text-gray-600 mb-4">
                    ✅ Email sent with meeting details<br />
                    ✅ Google Meet link generated<br />
                    ✅ Calendar invite added
                  </p>
                  <div className="animate-pulse text-sm text-blue-600 font-medium">
                    Opening calendar invite...
                  </div>
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-gray-600">
                      <strong>Check your email for:</strong><br />
                      • Google Meet link<br />
                      • Calendar invite<br />
                      • Preparation tips
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  {/* Step 1: Purpose Selection */}
                  {bookingStep === 1 && (
                    <div className="mb-8">
                      <div className="flex items-center gap-2 mb-6">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <span className="text-2xl">🎯</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900">What brings you here?</h4>
                          <p className="text-gray-600 text-sm">Select your primary goal</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <button
                          onClick={() => handlePurposeSelect('buying')}
                          className={`p-6 rounded-xl border-2 text-center transition-all ${
                            userDetails.purpose === 'buying'
                              ? 'border-blue-500 bg-blue-50'
                              : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                          }`}
                        >
                          <div className="text-3xl mb-3">🏠</div>
                          <div className="font-bold text-gray-900">Buying a Home</div>
                          <div className="text-sm text-gray-600 mt-2">First-time or moving up</div>
                        </button>
                        
                        <button
                          onClick={() => handlePurposeSelect('selling')}
                          className={`p-6 rounded-xl border-2 text-center transition-all ${
                            userDetails.purpose === 'selling'
                              ? 'border-blue-500 bg-blue-50'
                              : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                          }`}
                        >
                          <div className="text-3xl mb-3">💰</div>
                          <div className="font-bold text-gray-900">Selling a Home</div>
                          <div className="text-sm text-gray-600 mt-2">Maximize your profit</div>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Select Date */}
                  {bookingStep === 2 && (
                    <div className="mb-8">
                      <div className="flex items-center gap-2 mb-6">
                        <Calendar className="text-blue-600" size={24} />
                        <div>
                          <h4 className="font-bold text-gray-900">Select Date</h4>
                          <p className="text-gray-600 text-sm">Choose a convenient day</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-3">
                        {getNextDays().map((date) => (
                          <button
                            key={date}
                            onClick={() => handleDateSelect(date)}
                            className={`p-4 rounded-lg border-2 text-center transition-all ${
                              selectedDate === date
                                ? 'bg-blue-600 text-white border-blue-600'
                                : 'border-gray-200 hover:border-blue-400 hover:bg-blue-50'
                            }`}
                          >
                            <div className="text-xs font-medium uppercase">
                              {new Date(date).toLocaleDateString('en-US', {
                                weekday: 'short'
                              })}
                            </div>
                            <div className="text-xl font-bold my-1">
                              {new Date(date).getDate()}
                            </div>
                            <div className="text-xs">
                              {new Date(date).toLocaleDateString('en-US', {
                                month: 'short'
                              })}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 3: Select Time */}
                  {bookingStep === 3 && selectedDate && (
                    <div className="mb-8">
                      <div className="flex items-center gap-2 mb-6">
                        <Clock className="text-blue-600" size={24} />
                        <div>
                          <h4 className="font-bold text-gray-900">Select Time</h4>
                          <p className="text-gray-600 text-sm">
                            {new Date(selectedDate).toLocaleDateString('en-US', {
                              weekday: 'long',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            onClick={() => handleTimeSelect(time)}
                            className={`p-4 rounded-xl border-2 text-center transition-all ${
                              selectedTime === time
                                ? 'bg-blue-600 text-white border-blue-600'
                                : 'border-gray-200 hover:border-blue-400 hover:bg-blue-50'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 4: Contact Details */}
                  {bookingStep === 4 && selectedDate && selectedTime && (
                    <div className="space-y-6">
                      <div className="flex items-center gap-2 mb-2">
                        <User className="text-blue-600" size={24} />
                        <div>
                          <h4 className="font-bold text-gray-900">Your Details</h4>
                          <p className="text-gray-600 text-sm">We'll send meeting details here</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={userDetails.name}
                            onChange={handleInputChange}
                            placeholder="John Smith"
                            className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                          />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Email *
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={userDetails.email}
                              onChange={handleInputChange}
                              placeholder="john@example.com"
                              className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              required
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Phone *
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              value={userDetails.phone}
                              onChange={handleInputChange}
                              placeholder="(555) 123-4567"
                              className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              required
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Any specific questions or areas you'd like to discuss?
                          </label>
                          <textarea
                            name="message"
                            value={userDetails.message}
                            onChange={handleInputChange}
                            placeholder="E.g., First-time home buying, Investment properties, Market timing..."
                            rows={3}
                            className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                      </div>

                      {/* Meeting Summary */}
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100">
                        <h5 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                          <Video size={20} />
                          Meeting Summary
                        </h5>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">Purpose:</span>
                            <span className="font-medium">
                              {userDetails.purpose === 'buying' ? '🏠 Buying Home' : '💰 Selling Home'}
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">Date:</span>
                            <span className="font-medium">
                              {new Date(selectedDate).toLocaleDateString('en-US', {
                                weekday: 'long',
                                month: 'short',
                                day: 'numeric'
                              })}
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">Time:</span>
                            <span className="font-medium">{selectedTime} EST</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">Duration:</span>
                            <span className="font-medium">30 minutes</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">Format:</span>
                            <span className="font-medium flex items-center gap-1">
                              <Video size={16} /> Google Meet
                            </span>
                          </div>
                        </div>
                        
                        <div className="mt-6 p-4 bg-white/50 rounded-lg">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Mail size={16} />
                            <span>Meeting link will be emailed instantly</span>
                          </div>
                        </div>
                      </div>

                      {/* Confirm Button */}
                      <button
                        onClick={handleBookingSubmit}
                        disabled={!userDetails.name || !userDetails.email || !userDetails.phone || isLoading}
                        className={`w-full font-bold py-4 rounded-xl transition-all duration-300 mt-4 relative overflow-hidden ${
                          !userDetails.name || !userDetails.email || !userDetails.phone || isLoading
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-xl'
                        }`}
                      >
                        {isLoading ? (
                          <div className="flex items-center justify-center gap-2">
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Processing Booking...
                          </div>
                        ) : (
                          <div className="flex items-center justify-center gap-3">
                            <span className="text-xl">📧</span>
                            Confirm Booking & Get Meeting Link
                          </div>
                        )}
                      </button>

                      {/* Instant Delivery Note */}
                      <div className="text-center">
                        <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
                          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                          Instant delivery: Google Meet link, calendar invite & email confirmation
                        </p>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t bg-gradient-to-r from-blue-50/50 to-white rounded-b-2xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                    <Video className="text-blue-600" size={20} />
                  </div>
                  <div className="text-sm font-medium text-gray-900">Google Meet</div>
                  <div className="text-xs text-gray-600">Video call link</div>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                    <Mail className="text-blue-600" size={20} />
                  </div>
                  <div className="text-sm font-medium text-gray-900">Email Confirmation</div>
                  <div className="text-xs text-gray-600">Sent instantly</div>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                    <Phone className="text-blue-600" size={20} />
                  </div>
                  <div className="text-sm font-medium text-gray-900">24/7 Support</div>
                  <div className="text-xs text-gray-600">Questions? Call us</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default FinalCTASection;