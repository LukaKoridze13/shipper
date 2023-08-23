

interface BoxProps {
  src: string;
  text: string;
}
export default function TopSection() {
  const [isCalculatorModalOpen, setIsCalculatorModalOpen] = useState(false);

  const openCalculatorModal = () => {
    setIsCalculatorModalOpen(true);
  };

  useEffect(() => {
    if (isCalculatorModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isCalculatorModalOpen]);

  return (
    <section className="relative">
      <img className="w-full h-auto" src={Banner} alt="Banner" />
      <div className="w-full h-full flex gap-14 justify-center items-center absolute bottom-0 translate-y-1/2">
        <Box src={payment} text="Payment" />
        <div className="" onClick={openCalculatorModal}>
          <Box src={calculator} text="Calculator" />
        </div>
        <Box src={repack} text="Repack" />
        <Box src={delivery} text="Delivery" />
      </div>
      {isCalculatorModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div>
            <Calculator setIsCalculatorModalOpen={setIsCalculatorModalOpen} />
          </div>
        </div>
      )}
    </section>
  );
}

const Box = ({ src, text }: BoxProps) => {
  return (
    <div
      style={{ boxShadow: "0px 4px 40px 0px rgba(0, 0, 0, 0.25)" }}
      className="cursor-pointer bg-white flex justify-center items-center w-[281px] h-[254px] flex-col gap-6 text-[#FCCD46] text-[20px] font-sans rounded-[10px]"
    >
      <img src={src} alt={text} />
      <span>{text}</span>
    </div>
  );
};
