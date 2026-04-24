import Stripe from "stripe";

const stripe = new Stripe("YOUR_SECRET_KEY");

export default async function handler(req, res) {
  if (req.method === "POST") {
    const sig = req.headers["stripe-signature"];

    try {
      const event = stripe.webhooks.constructEvent(
        req.body,
        sig,
        "YOUR_WEBHOOK_SECRET"
      );

      if (event.type === "checkout.session.completed") {
        console.log("Payment successful");
      }

      res.status(200).send("OK");
    } catch (err) {
      res.status(400).send(`Error: ${err.message}`);
    }
  } else {
    res.status(405).end();
  }
}
