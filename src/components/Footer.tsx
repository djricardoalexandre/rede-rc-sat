import { Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = '5531983532534';

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Youtube, label: 'YouTube', href: '#' },
  ];

  return (
    <footer className="bg-[#050b1a] border-t border-[#e0e0e0]/10 py-8 px-4 mb-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img
              src="/logo_pura.png"
              alt="RC Sat"
              className="h-12 w-auto"
            />
            <div className="text-[#e0e0e0]/80 text-sm">
              <p>&copy; {currentYear} Rede RC Sat</p>
              <p>Todos os direitos reservados</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#e0e0e0]/60 hover:text-red-600 transition-colors duration-300"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </a>
            ))}
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e0e0e0]/60 hover:text-red-600 transition-colors duration-300"
              aria-label="Contato WhatsApp"
            >
              <MessageCircle size={24} />
            </a>
          </div>
        </div>

        <div className="mt-6 text-center text-[#e0e0e0]/60 text-sm">
          <p>Música de classe, tecnologia e você</p>
        </div>
      </div>
    </footer>
  );
}
