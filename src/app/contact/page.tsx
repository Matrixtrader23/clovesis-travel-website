import { Send, MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata = {
  title: "Contact Us | Clovesis Destinations",
  description: "Get in touch with us to plan your dream vacation.",
};

export default function ContactPage() {
  return (
    <div className="bg-[var(--background)] min-h-screen">
      <div className="bg-sky-950 py-20 border-b border-sky-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Mail className="h-12 w-12 text-primary mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
            Contact Us
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-300">
            Have a question or want to book a trip? We&apos;re here to help you plan your next adventure.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Information */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-poppins font-bold text-[var(--foreground)] mb-6">
                Get In Touch
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                We&apos;re always excited to hear from you. Whether you have questions about our tour packages, need help planning a custom itinerary, or simply want to say hello, contact us today!
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">Office Location</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    123 Galle Road,
                    <br />
                    Colombo 01, Sri Lanka
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">Phone Number</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    +94 11 234 5678
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">Email Address</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    hello@clovesisdestinations.com
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">Working Hours</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Weekend: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[var(--card-bg)] rounded-3xl p-8 shadow-sm border border-slate-200 dark:border-slate-800">
            <h2 className="text-2xl font-poppins font-bold text-[var(--foreground)] mb-8">
              Send us a Message
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-[var(--foreground)]"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-[var(--foreground)]"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-[var(--foreground)]"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-[var(--foreground)]"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none text-[var(--foreground)]"
                  placeholder="Tell us about your next adventure..."
                />
              </div>

              <button
                type="button"
                className="w-full bg-primary hover:bg-sky-500 text-white font-medium py-4 rounded-xl transition-all shadow-md shadow-primary/20 flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        {/* Embedded Google Map */}
        <div className="mt-20">
          <div className="rounded-3xl overflow-hidden h-[400px] border border-slate-200 dark:border-slate-800 relative z-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63371.81529141753!2d79.8211859!3d6.9218374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a70ad%3A0x2db2c1737cf63a9d!2sColombo!5e0!3m2!1sen!2slk!4v1683134372990!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
