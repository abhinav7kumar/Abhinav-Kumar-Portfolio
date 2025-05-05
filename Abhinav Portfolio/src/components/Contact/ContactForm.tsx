// import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { FormInput } from './FormInput';
import { FormTextarea } from './FormTextarea';

export function ContactForm() {
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "2748c922-a320-4ec8-86cd-e078779a14e9"); // Replace with your actual access key

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      alert("Form submitted successfully!");
    } else {
      alert("Something went wrong. Try again.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white p-8 rounded-2xl shadow-lg"
    >
      <form onSubmit={onSubmit} className="space-y-6">
        <FormInput label="Name" name="name" required />
        <FormInput label="Email" name="email" type="email" required />
        <FormTextarea label="Message" name="message" required />
        <motion.button
          type="submit"
          className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Send size={20} />
          Send Message
        </motion.button>
      </form>
    </motion.div>
  );
}
