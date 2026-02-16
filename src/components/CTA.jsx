import AppStoreBadge from "../assets/badges/app-store.svg";
import PlayStoreBadge from "../assets/badges/google-play.svg";

export default function CTA() {
  return (
    <section id="cta" className="py-24 bg-primary text-white text-center">
      <div className="max-w-3xl mx-auto px-6">
        <h3 className="text-4xl font-bold mb-6">
          Ready to Simplify Your NLIS Management?
        </h3>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            
            <a href="https://apps.apple.com/us/app/nlisbuddy/id6474272694?platform=iphone" target="_blank" rel="noopener noreferrer">
              <img
                src={AppStoreBadge}
                alt="Download on the App Store"
                className="h-14 hover:scale-105 transition-transform duration-200"
              />
            </a>

            <a href="https://play.google.com/store/apps/details?id=com.nlisbuddy&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">
              <img
                src={PlayStoreBadge}
                alt="Get it on Google Play"
                className="h-14 hover:scale-105 transition-transform duration-200"
              />
            </a>

          </div>
      </div>
    </section>
  )
}