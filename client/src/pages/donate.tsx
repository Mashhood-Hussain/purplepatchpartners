import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Donate() {
  const [donationAmount, setDonationAmount] = useState<number>(0);
  const [donationMessage, setDonationMessage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // You can replace the setTimeout with an API call to process the donation
    setTimeout(() => {
      alert("Donation successful! Thank you for your support.");
      setIsSubmitting(false);
      setDonationAmount(0);
      setDonationMessage("");
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-semibold text-center mb-6">Donate to Support Our Cause</h1>

      <p className="text-lg text-center mb-8">
        THIS IS JUST FOR SHOW NOT REAL
      </p>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        <div className="space-y-4">
          {/* Donation Amount */}
          <div className="flex justify-between items-center">
            <label htmlFor="donation-amount" className="text-xl font-medium">Donation Amount</label>
            <input
              type="number"
              id="donation-amount"
              name="donation-amount"
              value={donationAmount}
              onChange={(e) => setDonationAmount(Number(e.target.value))}
              min="1"
              className="w-32 px-4 py-2 border rounded-md text-lg"
              placeholder="Amount"
              required
            />
          </div>

          {/* Message */}
          <div className="flex justify-between items-center">
            <label htmlFor="donation-message" className="text-xl font-medium">Leave a Message (Optional)</label>
            <textarea
              id="donation-message"
              name="donation-message"
              value={donationMessage}
              onChange={(e) => setDonationMessage(e.target.value)}
              rows={4}
              className="w-full px-4 py-2 border rounded-md text-lg"
              placeholder="Your message..."
            />
          </div>

          {/* Payment Method */}
          <div className="flex justify-between items-center">
            <label htmlFor="payment-method" className="text-xl font-medium">Payment Method</label>
            <select
              id="payment-method"
              name="payment-method"
              className="w-48 px-4 py-2 border rounded-md text-lg"
              required
            >
              <option value="credit-card">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="bank-transfer">Bank Transfer</option>
            </select>
          </div>

          <div className="mt-6 flex justify-center">
            <Button type="submit" size="lg" disabled={isSubmitting} className="w-full max-w-xs">
              {isSubmitting ? "Processing..." : "Donate Now"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
