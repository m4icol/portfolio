type BoxContainerProps = {
  children?: React.ReactNode;
  title?: string;
  className?: string;
};

export function BoxContainer({ children, title, className }: BoxContainerProps) {
  return (
    <div className={`${className} flex-col gap-2 py-8 border-1 overflow-hidden rounded-xl flex items-center
    border-LIGHT-subtext/20 bg-LIGHT-selected/20
    dark:border-DARK-subtext/10 dark:bg-DARK-selected/40 
    `}>
      <p className="font-[poppins] text-2xl/7 text-center text-gradient">{title}</p>
      {children}
    </div>
  );
}

export function SmallBox({ children, title, className }: BoxContainerProps) {
  return (
    <div className={`${className} flex-col py-8 h-full border-1 overflow-hidden rounded-xl flex justify-center items-center
    border-LIGHT-subtext/20 bg-LIGHT-selected/20
    dark:border-DARK-subtext/10 dark:bg-DARK-selected/40`}>
      <p className="font-[poppins] text-4xl text-center text-gradient">{title}</p>
      {children}
    </div>
  );
}

export function MainBox({ className }: BoxContainerProps) {
  return (
    <div className={`${className} flex-row h-full gap-5 border-1 overflow-hidden rounded-xl flex justify-center items-center
    border-LIGHT-subtext/20 bg-LIGHT-selected/20
    dark:border-DARK-subtext/10 dark:bg-DARK-selected/40 `}>
      <img className="w-18 rounded-lg top-[28%] left-[44%]" src="/Maickol.webp" alt="Maickol Rivera" />
      
      <div className="flex flex-col gap-1">
        <p className="font-[poppins] text-2xl/7 text-gradient">MAICKOL STEVEN <br /> RIVERA OSPINA</p>
        <p className="text-sm text-DARK-subtext">Estudiante de Ing de Software</p>
      </div>
    </div>
  );
}