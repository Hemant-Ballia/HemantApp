import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const toastId = toast.loading('Sending message...');

    const submissionData = {
      ...formData,
      access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY, 
      subject: `New Message from ${formData.firstName} ${formData.lastName}`,
      from_name: 'Portfolio Contact Form'
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(submissionData)
      });

      const result = await response.json();

      if (result.success) {
        toast.success('Message sent successfully!', { id: toastId });
        setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
      } else {
        toast.error('Failed to send message. Please try again.', { id: toastId });
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Something went wrong. Check connection.', { id: toastId });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full bg-white py-20 px-6 md:px-12 flex items-center justify-center relative">
      
      {/* Toast Notification Component - Position Updated Here 👇 */}
      <Toaster 
        position="top-right"
        toastOptions={{
          style: {
            background: '#18181b', 
            color: '#fff',
            fontSize: '14px',
            borderRadius: '12px',
          },
        }} 
      />

      <div className="grid md:grid-cols-2 md:gap-10 lg:gap-16 max-w-6xl w-full items-center">

        {/* Left Side: Clean Form */}
        <div className="p-2 md:p-5">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-3">
            Get in touch
          </h2>
          <p className="text-[15px] text-zinc-500 mb-8 leading-relaxed max-w-[400px]">
            Have a question or idea? Our approachable team would love to connect and support you.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4 mb-5">
              <div>
                <label className="block text-sm font-medium text-zinc-600 mb-2">First name</label>
                <input 
                  type="text" 
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="name" 
                  required
                  className="w-full px-4 py-3 border border-zinc-200 rounded-xl text-sm outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all bg-zinc-50/50" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-600 mb-2">Last name</label>
                <input 
                  type="text" 
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="surname" 
                  className="w-full px-4 py-3 border border-zinc-200 rounded-xl text-sm outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all bg-zinc-50/50" 
                />  
              </div>
            </div>

            <div className="mb-5">
              <label className="block text-sm font-medium text-zinc-600 mb-2">Email address</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@gmail.com" 
                required
                className="w-full px-4 py-3 border border-zinc-200 rounded-xl text-sm outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all bg-zinc-50/50"
              />
            </div>

            <div className="mb-5">
              <label className="block text-sm font-medium text-zinc-600 mb-2">Phone number</label>
              <div className="flex border border-zinc-200 rounded-xl overflow-hidden focus-within:border-orange-500 focus-within:ring-1 focus-within:ring-orange-500 transition-all bg-zinc-50/50">
                <select className="px-3 py-3 text-sm outline-none cursor-pointer text-zinc-500 bg-transparent border-r border-zinc-200">
                  <option>IN</option>
                  <option>US</option>
                  <option>UK</option>
                </select>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210" 
                  className="flex-1 px-4 py-3 text-sm outline-none bg-transparent" 
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-zinc-600 mb-2">Message</label>
              <textarea 
                rows="4" 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or inquiry..."
                required
                className="w-full px-4 py-3 border border-zinc-200 rounded-xl text-sm outline-none resize-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all bg-zinc-50/50"
              />
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full py-3.5 bg-orange-600 hover:bg-orange-700 disabled:bg-orange-400 disabled:cursor-not-allowed text-white font-medium rounded-xl text-sm transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-600/20"
            >
              {isSubmitting ? 'Sending...' : 'Send message'}
            </button>
          </form>
        </div>

        {/* Right Side: Only the Image */}
        <div className="rounded-3xl relative min-h-[600px] w-full max-w-[520px] hidden md:flex overflow-hidden shadow-xl shadow-zinc-200/50 border border-zinc-200">
          <img 
            src="/login%20.webp" 
            alt="Contact Background" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default ContactSection;