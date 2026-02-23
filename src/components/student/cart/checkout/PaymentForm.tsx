// components/checkout/PaymentForm.jsx
import React from "react";

const PaymentForm = () => {
  return (
    <div className="md:w-2/3 p-6 bg-card">
      <h2 className="text-xl font-semibold mb-4">Payment Details</h2>

      {/* Card Types */}
      <div className="flex gap-4 mb-6">
        <button className="flex-1 p-3 border border-border rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700">
          <img src="/imges/visa.png" alt="Visa" className="w-8 h-8" />
          <span>**** **** **** 1234</span>
        </button>

        <button className="flex-1 p-3 border border-border rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700">
          <img src="/imges/mastercard.png" alt="Mastercard" className="w-8 h-8" />
          <span>**** **** **** 5678</span>
        </button>
      </div>

      {/* Form */}
      <form className="space-y-4">
        <div>
          <label className="block mb-1 text-sm font-medium">
            Name on card
          </label>
          <input
            type="text"
            placeholder="John Doe"
            className="w-full border border-border rounded-lg p-2"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">
            Card Number
          </label>
          <input
            type="text"
            placeholder="1234 5678 9012 3456"
            className="w-full border border-border rounded-lg p-2"
          />
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block mb-1 text-sm font-medium">MM/YY</label>
            <input
              type="text"
              placeholder="12/24"
              className="w-full border border-border rounded-lg p-2"
            />
          </div>

          <div className="flex-1">
            <label className="block mb-1 text-sm font-medium">CVC</label>
            <input
              type="text"
              placeholder="123"
              className="w-full border border-border rounded-lg p-2"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" id="saveCard" className="w-4 h-4" />
          <label htmlFor="saveCard" className="text-sm">
            Remember this card, save it on my card list
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded-lg mt-4 hover:bg-primary/50 cursor-pointer"
        >
          Complete Payment
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
