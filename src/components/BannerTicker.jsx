import "../css/ticker.css";

export default function BannerTicker() {
  return (
    <div className="scrolling-banner bg-black text-white overflow-hidden whitespace-nowrap relative h-[80px] flex items-center">
      <div className="scrolling-text text-[24px] font-bold">
        <span>Payday offer: 50% off sitewide ends in 72 hrs.</span>
        <span>7 days easy return</span>
        <span>Cash On Delivery Available</span>
        <span>Free Shipping</span>
        <span>Additional Discount on Online Payment</span>
        <span>Check Coupon Codes on Checkout Page</span>
      </div>
    </div>
  );
}
