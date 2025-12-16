import { useState } from "react";
import { useAccessibility } from "@/contexts/AccessibilityContext";

export default function Vacancies() {
  const { isEasyRead } = useAccessibility();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const vacancies = [
    {
      title: isEasyRead ? "Support Worker" : "Support Worker",
      description: isEasyRead
        ? "Help people in their daily life. Be kind and supportive."
        : "Provide person-centred support to individuals.",
    },
    {
      title: isEasyRead ? "Activities Helper" : "Activities Coordinator",
      description: isEasyRead
        ? "Help plan and run fun activities for people."
        : "Plan and deliver engaging activities.",
    },
    {
      title: isEasyRead ? "Office Helper" : "Administrator",
      description: isEasyRead
        ? "Help in the office with simple tasks like filing and booking."
        : "Assist with scheduling and admin tasks.",
    },
  ];

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const res = await fetch("/api/apply", {
      method: "POST",
      body: formData,
    });

    setLoading(false);

    if (res.ok) {
      setSubmitted(true);
      e.currentTarget.reset();
    } else {
      const errorData = await res.json();
      alert(`Error: ${errorData.message}`);
    }
  }

  return (
    <main id="main-content" className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-black">
        {isEasyRead ? "Apply for a Job" : "Job Vacancies"}
      </h1>

      {/* Introduction message */}
      <p>
        {isEasyRead
          ? "We are looking for kind and friendly people to join our team. Here are the jobs you can apply for."
          : "We’re always looking for passionate people to join our team. Below are our current job openings."}
      </p>
      
      <p className="text-lg mb-6 text-muted-foreground">
        {isEasyRead
          ? "Please do not come to the building asking for work. These are all the available roles."
          : "We kindly ask that you refrain from coming to the building to ask about work. These are the only available roles at the moment."}
      </p>

      <div className="space-y-6 mb-10">
        {vacancies.map((job, idx) => (
          <div key={idx} className="p-6 border rounded-lg bg-white shadow-sm">
            <h2 className="text-2xl font-semibold">{job.title}</h2>
            <p className="mt-2 text-muted-foreground">{job.description}</p>
          </div>
        ))}
      </div>

      {/* Add a polite message and a link to the Contact Us page */}
      <p className="text-lg text-muted-foreground">
        {isEasyRead
          ? "To apply for a role, please go to the 'Contact Us' section."
          : "To apply for any of these roles, please visit the 'Contact Us' page, and contact us about which role you are interested in."}
      </p>

      {/* Native anchor tag for regular React app */}
      <a href="/contact" className="text-blue-500 hover:underline" style={{ color: 'purple', fontSize: '20px' }}>
        {isEasyRead ? "Go to Contact Us" : "Visit Contact Us Page"}
      </a>
    </main>
  );
}
