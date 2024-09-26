'use client'
import Image from 'next/image';
import { Truck, Droplets, Sparkles, CheckCircle, PhoneCall, Mail, Star, Users, MessageSquare, MapPin } from 'lucide-react'
import sBins from '../public/sbins.png';
import logo from '../public/SVG/logo.svg'

export function App() {
  const pricingPackages = [
    {
      name: "One Cleaning",
      subtext: "Try us out! Perfect for a one-time deep clean!",
      firstBinPrice: 50,
      additionalBinPrice: 15,
    },
    {
      name: "Spring, Summer, Fall",
      subtext: "3 cleanings",
      firstBinPrice: "127.50 (15% off)",
      additionalBinPrice:"38 (15% off)",
    },
    // {
    //   name: "Biweekly",
    //   subtext: "Regular cleaning every other week!",
    //   firstBinPrice: 35,
    //   additionalBinPrice: 15,
    // },
    {
      name: "Half Season",
      subtext: "4 cleanings",
      firstBinPrice: "160 (20% off)",
      additionalBinPrice: "48 (20% off)",
    },
    {
      name: "Full Season",
      subtext: "8 cleanings",
      firstBinPrice: "299.99 (25% off!)",
      additionalBinPrice: "90 additional bins (25% off)",
    },
    // {
    //   name: "Bi-monthly",
    //   subtext: "Have a fresh bin every 2 months!",
    //   firstBinPrice: 55,
    //   additionalBinPrice: 15,
    // },

  ]

  const serviceSteps = [
    {
      number: 1,
      name: "Schedule",
      description: "Book your cleaning service online or by phone",
      icon: <PhoneCall className="w-12 h-12 text-primary" />,
    },
    {
      number: 2,
      name: "Arrival",
      description: "Our team arrives at your location with our specialized cleaning truck",
      icon: <Truck className="w-12 h-12 text-primary" />,
    },
    {
      number: 3,
      name: "Inspection",
      description: "We assess your bins to determine the best cleaning approach",
      icon: <CheckCircle className="w-12 h-12 text-primary" />,
    },
    {
      number: 4,
      name: "Cleaning",
      description: "High-pressure washing with eco-friendly cleaning solutions",
      icon: <Droplets className="w-12 h-12 text-primary" />,
    },
    {
      number: 5,
      name: "Sanitization",
      description: "Thorough sanitization to eliminate bacteria and odors",
      icon: <Sparkles className="w-12 h-12 text-primary" />,
    },
    {
      number: 6,
      name: "Follow-up",
      description: "We ensure your satisfaction and schedule your next cleaning",
      icon: <Mail className="w-12 h-12 text-primary" />,
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New Haven",
      quote: "Nature Fresh Bins has made a huge difference in keeping our outdoor area clean and odor-free. Highly recommended!",
    },
    {
      name: "Mike Thompson",
      location: "Hamden",
      quote: "I'm impressed with their professionalism and the quality of their service. My bins have never been cleaner!",
    },
    {
      name: "Emily Rodriguez",
      location: "West Haven",
      quote: "Great service! They're always on time and do a thorough job. No more smelly trash cans for us!",
    },
  ]

  const faqItems = [
    {
      question: "Is your cleaning process environmentally friendly?",
      answer: "Yes, we use eco-friendly, biodegradable cleaning solutions that effectively clean and deodorize without harming the environment.",
    },
    {
      question: "Do I need to be home during the cleaning?",
      answer: "No, you don't need to be home. As long as your bins are accessible, we can perform the cleaning service.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center">
            <Image src={logo} alt='' className="w-20 h-20 mr-2" />
            <span className="text-2xl font-bold text-gray-800">Nature Fresh Bins</span>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#about" className="text-gray-600 hover:text-primary">About</a></li>
              <li><a href="#service-area" className="text-gray-600 hover:text-primary">Service Area</a></li>
              <li><a href="#how-it-works" className="text-gray-600 hover:text-primary">How It Works</a></li>
              <li><a href="#pricing" className="text-gray-600 hover:text-primary">Pricing</a></li>
              <li><a href="#testimonials" className="text-gray-600 hover:text-primary">Testimonials</a></li>
              {/* <li><a href="#faq" className="text-gray-600 hover:text-primary">FAQ</a></li> */}
              <li><a href="#contact" className="text-gray-600 hover:text-primary">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Professional Trash Can Cleaning in the Greater New Haven Area</h1>
          <p className="text-xl mb-8">Keep your bins clean, hygienic, and odor-free with our expert cleaning service</p>
          <a href="#contact" className="bg-white text-primary font-bold py-2 px-6 rounded-full hover:bg-gray-200 transition duration-300">Get a Quote</a>
        </div>
      </section>

      {/* About Us Section */}
      {/* <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">About Nature Fresh Bins</h2>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image src={sBins} alt="Nature Fresh Bins Team" className="rounded-lg shadow-md"  width={500} height={300} />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <p className="text-lg mb-4">
                Nature Fresh Bins is the leading trash can cleaning service in the Greater New Haven area. We're committed to providing top-notch sanitation services to keep your environment clean and healthy.
              </p>
              <p className="text-lg mb-4">
                Our team of experienced professionals uses state-of-the-art equipment and eco-friendly cleaning solutions to ensure your bins are spotless and odor-free.
              </p>
              <p className="text-lg">
                With Nature Fresh Bins, you can say goodbye to unpleasant odors and hello to a cleaner, more hygienic home or business environment.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Service Area Section */}
      <section id="service-area" className="bg-gray-200 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Service Area</h2>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <iframe className="md:w-1/2 mb-8 md:mb-0 rounded-lg shadow-md" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d182472.58984980543!2d-73.00093170284786!3d41.34918173688665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1725639850250!5m2!1sen!2sus" width="600" height="450" style={{"border": 0}} loading="lazy"></iframe>
            <div className="md:w-1/2 md:pl-8">
              <h3 className="text-2xl font-semibold mb-4">We Serve the Greater New Haven Area</h3>
              <p className="text-lg mb-4">
                Our service area includes New Haven and surrounding towns such as:
              </p>
              <ul className="list-disc list-inside text-lg mb-4">
                <li>West Haven</li>
                <li>East Haven</li>
                <li>Hamden</li>
                <li>North Haven</li>
                <li>Branford</li>
                <li>Guilford</li>
                <li>Milford</li>
              </ul>
              <p className="text-lg">
                Not sure if we service your area? Contact us for more information!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Steps Section */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                <div className="bg-primary-100 rounded-full p-4 mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.number}. {step.name}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-gray-200 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Pricing Packages</h2>
          {/* <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8"'>
            <div className='' onClick={() => {}}>one time</div>
            <div className='' onClick={() => {}}>weekly cleaning</div>
            <div className='' onClick={() => {}}>monthly cleaning</div>
          </div> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingPackages.map((pkg, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-xl text-gray-800 mb-4">{pkg.subtext}</p>
                <div className="text-2xl font-bold text-primary mb-2">${pkg.firstBinPrice}</div>
                <p className="text-sm text-gray-500 mb-4">First bin</p>
                <div className="text-lg font-semibold">${pkg.additionalBinPrice}</div>
                <p className="text-sm text-gray-500">Each additional bin</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-yellow-400 mr-1" />
                  <Star className="w-5 h-5 text-yellow-400 mr-1" />
                  <Star className="w-5 h-5 text-yellow-400 mr-1" />
                  <Star className="w-5 h-5 text-yellow-400 mr-1" />
                  <Star className="w-5 h-5 text-yellow-400" />
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.location}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      {/* <section id="faq" className="bg-gray-200 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-2">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Lower Banner Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Lets Get You Set Up!</h1>
          <p className="text-xl mb-8">Keep your bins clean, hygienic, and odor-free with our expert cleaning service</p>
          {/* <a href="#contact" className="bg-white text-primary font-bold py-2 px-6 rounded-full hover:bg-gray-200 transition duration-300">Set Your Appointment!</a> */}
          {/* <p>Send us a an <a href='mailto:naturefreshbins@gmail.com'>email</a></p> */}
          <p className='font-bold'>Call (203) 868-0379</p>
          <p className='font-bold'>or Email naturefreshbins@gmail.com</p>
          {/* <p> or call us: (203) 868-0379</p> */}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">Nature Fresh Bins</h3>
              <p>Professional trash can cleaning service in the Greater New Haven Area</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
              {/* <p>123 Main Street, New Haven, CT 06511</p> */}
              <p>Phone: (203) 868-0379</p>
              <p>Email: naturefreshbins@gmail.com</p>
            </div>
            {/* <div className="w-full md:w-1/3">
              <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-primary">Facebook</a>
                <a href="#" className="hover:text-primary">Twitter</a>
                <a href="#" className="hover:text-primary">Instagram</a>
              </div>
            </div> */}
          </div>
          <div className="mt-8 text-center text-sm">
            <p>&copy; 2023 Nature Fresh Bins. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}