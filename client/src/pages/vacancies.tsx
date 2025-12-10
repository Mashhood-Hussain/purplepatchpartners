import { useAccessibility } from "@/contexts/AccessibilityContext";

export default function VacanciesPage() {
  const { isEasyRead } = useAccessibility();

  const vacancies = [
    {
      title: isEasyRead ? "Support Worker" : "Support Worker",
      description: isEasyRead
        ? "Help people with everyday tasks and support them to live well."
        : "Provide person-centred support to individuals in the community.",
    },
    {
      title: isEasyRead ? "Activities Helper" : "Activities Coordinator",
      description: isEasyRead
        ? "Help plan fun things to do and support people to join in."
        : "Plan and deliver engaging activities that help people thrive.",
    },
    {
      title: isEasyRead ? "Office Helper" : "Administrator",
      description: isEasyRead
        ? "Help with office jobs like writing information and organising things."
        : "Assist with scheduling, data entry, and day-to-day admin tasks.",
    },
  ];

  return (
    <main id="main-content" className="container mx-auto px-4 py-10">
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-6 text-black">
        {isEasyRead ? "Jobs at Purple Patch Partners" : "Job Vacancies"}
      </h1>

      {/* Intro paragraph */}
      <p className="text-lg mb-8 max-w-2xl">
        {isEasyRead
          ? "We are looking for kind and friendly people to join our team. Here are the jobs you can apply for."
          : "We’re always looking for passionate people to join our team. Below are our current job openings."}
      </p>

      {/* Job cards */}
      <div className="space-y-6">
        {vacancies.map((job, idx) => (
          <div
            key={idx}
            className="p-6 border rounded-lg shadow-sm bg-white"
            data-testid={`card-vacancy-${idx}`}
          >
            <h2 className="text-2xl font-semibold">{job.title}</h2>
            <p className="text-muted-foreground mt-2">{job.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
