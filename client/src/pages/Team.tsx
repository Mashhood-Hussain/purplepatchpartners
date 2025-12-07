export default function TeamPage() {
  return (
    <main id="main-content" className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Our Team</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">Founder - Rafik</h2>
        <img
          src="/images/rafikbhaifacepic.jpg"
          alt="Founder"
          className="w-48 h-48 object-cover rounded-lg mb-4"
        />
        <p className="max-w-2xl">
          founder’s message goes here.......
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Office & Support Staff</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Staff Profile */}
          <div className="p-4 border rounded-lg">
            <img
              src="/images/otherguyface.jpg"
              className="w-48 h-48 object-cover rounded-lg mb-4"
              alt="Staff Member"
            />
            <h3 className="text-xl font-semibold">Staff Name</h3>
            <p>Job Role</p>
            <p className="text-sm mt-2">
              thier message here.....
            </p>
          </div>

          {/* Duplicate for as many staff as you want */}
        </div>
      </section>
    </main>
  );
}
