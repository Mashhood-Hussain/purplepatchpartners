export default function VacanciesPage() {
  const vacancies = [
    {
      title: "Support Worker",
      description: "Provide person-centred support to individuals in the community.",
    },
    {
      title: "Activities Coordinator",
      description: "Plan and deliver engaging activities that help people thrive.",
    },
    {
      title: "Administrator",
      description: "Assist with scheduling, data entry, and day-to-day admin tasks.",
    },
  ];

  return (
    <main id="main-content" className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-black">Job Vacancies</h1>

      <p className="text-lg mb-8 max-w-2xl">
        We’re always looking for passionate people to join our team.
        Below are our current job openings.
      </p>

      <div className="space-y-6">
        {vacancies.map((job, idx) => (
          <div key={idx} className="p-6 border rounded-lg shadow-sm bg-white">
            <h2 className="text-2xl font-semibold">{job.title}</h2>
            <p className="text-muted-foreground mt-2">{job.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
