export default function ContactPage() {
  return (
    <main id="main-content" className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* LEFT SIDE — CONTACT INFO */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="mb-4 max-w-lg">
            If you have any questions, would like more information about our services,
            or want to make an enquiry, feel free to contact us using the details below.
          </p>
          <div className="space-y-3 text-lg">
            <p>
              <strong>Email:</strong> info@purplepatchpartners.co.uk
            </p>
            <p>
              <strong>Phone:</strong> 01234 567 890
            </p>
            <p>
              <strong>Address:</strong><br />
              Former St Mary's College, Shear Brow, Blackburn BB1 8DS <br />
            </p>
          </div>
        </section>

        {/* RIGHT SIDE — IMAGE */}
<section className="flex flex-col items-center space-y-4">
  {/* First Image */}
  <img
    src="/images/committed_small.png"
    alt="Committed"
    className="w-40 h-auto rounded-lg shadow-lg" // Adjust width and height to make it smaller
  />

  {/* Second Image */}
  <img
    src="/images/Winner Logo BMA 2020-01.jpg"
    alt="Winner Logo"
    className="w-40 h-auto rounded-lg shadow-lg" // Adjust width and height to make it smaller
  />
</section>
      </div>
    </main>
  );
}
