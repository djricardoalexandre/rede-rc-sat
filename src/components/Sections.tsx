import { MessageCircle, Radio } from 'lucide-react';

export default function Sections() {
  const whatsappNumber = '5531983532534';

  const openWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="px-4 py-8 pb-32 space-y-16 max-w-6xl mx-auto">
      <section id="our-story" className="backdrop-blur-md bg-gradient-to-br from-[#0a1428]/40 to-[#050b1a]/60 rounded-2xl p-8 md:p-12 border border-[#e0e0e0]/10 shadow-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-[#e0e0e0] mb-6 text-center">
          Rede RC Sat: Onde a Experiência Encontra a Inovação
        </h2>
        <p className="text-[#e0e0e0]/90 text-lg leading-relaxed text-center max-w-4xl mx-auto">
          Com mais de 35 anos de dedicação à arte de fazer rádio, a Rede RC Sat nasce da paixão pela curadoria musical refinada.
          Fugimos do óbvio para entregar um som limpo e sofisticado. Aqui, você encontra os grandes clássicos do Flashback,
          o melhor do Pop Nacional e Internacional. Com plástica moderna e tecnologia de ponta, somos a conexão perfeita entre
          o passado memorável e o futuro da rádio. <strong className="text-[#e0e0e0]">Rede RC Sat – Música de classe, tecnologia e você.</strong>
        </p>
      </section>

      <section id="advertise" className="backdrop-blur-md bg-gradient-to-br from-red-950/20 to-[#050b1a]/60 rounded-2xl p-8 md:p-12 border border-red-500/20 shadow-2xl">
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#e0e0e0]">
            Sua marca com quem decide
          </h2>
          <p className="text-[#e0e0e0]/90 text-lg max-w-3xl mx-auto">
            Anuncie na nossa rede nacional e fale com o público de maior poder aquisitivo do Brasil.
          </p>
          <button
            onClick={() => openWhatsApp('Olá, gostaria de informações sobre publicidade na Rede RC Sat.')}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg shadow-red-900/50 transition-all duration-300 hover:scale-105 border border-red-500/30"
          >
            <MessageCircle size={24} />
            Anuncie na Rede
          </button>
        </div>
      </section>

      <section id="affiliates" className="backdrop-blur-md bg-gradient-to-br from-[#0a1428]/40 to-[#050b1a]/60 rounded-2xl p-8 md:p-12 border border-[#e0e0e0]/10 shadow-2xl">
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#e0e0e0]">
            Leve a Rede RC Sat para sua cidade
          </h2>
          <p className="text-[#e0e0e0]/90 text-lg max-w-3xl mx-auto">
            Transforme sua emissora local em uma rádio premium com nossa plataforma turnkey.
            Entregamos conteúdo 24h e este site/app pronto para você.
          </p>
          <button
            onClick={() => openWhatsApp('Olá, gostaria de informações sobre como afiliar minha rádio à Rede RC Sat.')}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#e0e0e0] to-[#c0c0c0] hover:from-white hover:to-[#e0e0e0] text-[#050b1a] px-8 py-4 rounded-xl text-lg font-semibold shadow-lg shadow-[#e0e0e0]/20 transition-all duration-300 hover:scale-105"
          >
            <Radio size={24} />
            Seja uma Afiliada
          </button>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#e0e0e0] mb-6">
          Ouça no RadiosNet
        </h2>
        <a
          href="https://www.radios.com.br/aovivo/rc-radio/263180"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <img
            src="/radios_net.png"
            alt="Ouça no RadiosNet"
            className="max-w-xs md:max-w-sm mx-auto rounded-xl shadow-2xl hover:scale-105 transition-transform duration-300 border border-[#e0e0e0]/20"
          />
        </a>
      </section>
    </div>
  );
}
