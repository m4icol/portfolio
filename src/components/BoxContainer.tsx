type BoxContainerProps = {
  children?: React.ReactNode;
  title?: string;
  className?: string;
};

export function BoxContainer({ children, title, className }: BoxContainerProps) {
  return (
    <div className={`${className} flex-col gap-2 py-10 border-1 border-DARK-subtext/10 bg-DARK-selected/40 overflow-hidden rounded-xl flex items-center`}>
      <p className="font-[poppins] text-2xl/7 text-center text-gradient">{title}</p>
      {children}
    </div>
  );
}

export function SmallBox({ children, title, className }: BoxContainerProps) {
  return (
    <div className={`${className} flex-col h-full border-1 border-DARK-subtext/10 bg-DARK-selected/40 overflow-hidden rounded-xl flex justify-center items-center`}>
      <p className="font-[poppins] text-4xl text-center text-gradient">{title}</p>
      {children}
    </div>
  );
}

export function MainBox({ className }: BoxContainerProps) {
  return (
    <div className={`${className} flex-row h-full gap-5 border-1 border-DARK-subtext/10 bg-DARK-selected/40 overflow-hidden rounded-xl flex justify-center items-center`}>
        <img className="w-18 rounded-lg top-[28%] left-[44%]" src="public\Maickol.webp" alt="Maickol Rivera" />
      
      <div className="flex flex-col gap-1">
        <p className="font-[poppins] text-2xl/7 text-gradient">MAICKOL STEVEN <br /> RIVERA OSPINA</p>
        <p className="text-xs text-DARK-subtext">Estudiante de Ingenieria de Software</p>
      </div>
    </div>
  );
}