import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import ContactForm from '@/components/ui/ContactForm';

export default function ContactPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Have a project in mind? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="text-blue-600 mr-4 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold mb-1">Address</h3>
                      <p className="text-gray-600">
                        69 Chitimukulu Road, PHI<br />
                        Lusaka, Zambia
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="text-blue-600 mr-4 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-gray-600">info@RECSr.com</p>
                      <p className="text-gray-600">careers@RECSr.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="text-blue-600 mr-4 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-gray-600">+260 XXX XXX XXX</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="text-blue-600 mr-4 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold mb-1">Business Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 8:00 AM - 5:00 PM<br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="bg-gray-200 h-96 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3846.1234567890!2d28.287!3d-15.416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDI0JzU3LjYiUyAyOMKwMTcnMTMuMiJF!5e0!3m2!1sen!2szm!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="RECS Research Location"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
