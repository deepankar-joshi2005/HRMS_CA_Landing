// Floating "chat with support on WhatsApp" bubble. Opens the business
// WhatsApp number directly — no in-app chat widget involved.
const SUPPORT_PHONE = "917827900297"; // +91 78279 00297
const SUPPORT_MESSAGE = "Hi, I'd like some help with FIRA.";

export default function WhatsAppSupportButton() {
  const href = `https://wa.me/${SUPPORT_PHONE}?text=${encodeURIComponent(SUPPORT_MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/25 transition-transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden="true">
        <path d="M12 2C6.486 2 2 6.486 2 12c0 1.92.547 3.71 1.49 5.24L2 22l4.93-1.46A9.96 9.96 0 0 0 12 22c5.514 0 10-4.486 10-10S17.514 2 12 2zm0 18.2c-1.69 0-3.3-.47-4.66-1.29l-.33-.2-3.46 1.02 1.03-3.37-.22-.35A8.18 8.18 0 0 1 3.8 12c0-4.52 3.68-8.2 8.2-8.2s8.2 3.68 8.2 8.2-3.68 8.2-8.2 8.2z" />
        <path d="M16.862 14.616c-.297-.149-1.758-.867-2.03-.966-.273-.1-.473-.149-.673.15-.197.295-.766.965-.939 1.162-.174.195-.348.21-.645.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.057 3.15 5.022 4.29 2.964 1.141 2.964.765 3.478.72.52-.045 1.69-.689 1.93-1.354.243-.665.243-1.23.168-1.354-.074-.135-.3-.21-.598-.345z" />
      </svg>
    </a>
  );
}
