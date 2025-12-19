export default function Header() {
  return (
    <header id="header" className="relative pt-8 pb-6 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6 flex justify-center">
          <img
            src="/logo_completa.png"
            alt="Rede RC Sat"
            className="h-32 md:h-40 lg:h-48 w-auto drop-shadow-2xl"
          />
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#e0e0e0] drop-shadow-lg tracking-wide">
            Rede RC Sat... A rádio que conecta!
          </h1>
          <p className="text-lg md:text-xl text-[#e0e0e0]/90 font-light">
            Conectando você ao melhor do Pop Nacional e Internacional.
          </p>
          <p className="text-base md:text-lg text-[#e0e0e0]/80 font-light">
            Uma experiência digital completa em som de alta definição.
          </p>
        </div>
      </div>
    </header>
  );
}
