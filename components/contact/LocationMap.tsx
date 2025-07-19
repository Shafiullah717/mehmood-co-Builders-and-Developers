import { companyInfo } from '@/data/data';

const LocationMap = () => {
  // IMPORTANT: The URL should be the 'src' from the Google Maps embed code.
  // How to get your embed URL:
  // 1. Go to Google Maps and search for your business address.
  // 2. Click the "Share" button.
  // 3. Select the "Embed a map" tab.
  // 4. Copy the HTML. The URL you need is inside the `src="..."` attribute.
  // 5. Paste that URL into the `googleMapsLocation` field in `data/data.ts`.
  const embedUrl = companyInfo.googleMapsLocation;

  return (
    <div className="rounded-lg shadow-lg overflow-hidden border border-medium">
      <iframe
        src={embedUrl}
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`${companyInfo.name} Office Location`}
        aria-label="Google Map showing office location"
      ></iframe>
    </div>
  );
};

export default LocationMap;