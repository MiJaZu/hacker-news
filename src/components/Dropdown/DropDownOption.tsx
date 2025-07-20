export type OptionProps = {
  imgUrl: string;
  label: string;
  query: string;
};

type DropdownOptionProps = {
  option: OptionProps;
  onClick(option: React.ReactNode, labe: string): void;
};

export default function DropdownOption({
  option: { imgUrl, label },
  onClick,
}: DropdownOptionProps) {
  const optionJSX = (
    <div className="w-full h-11 flex items-center">
      {imgUrl && <img src={imgUrl} alt={label} className="m-0.5 w-6 h-6 object-contain" />}
      <span>{label}</span>
    </div>
  );

  return (
    <div
      onClick={() => onClick(optionJSX, label)}
      className="{styles.option} w-full h-11 flex items-center hover:cursor-pointer hover:opacity-[0.2]"
      key={`drop-down-${label}-${imgUrl}`}
    >
      {imgUrl && <img src={imgUrl} alt={label} className="m-0.5 w-6 h-6 object-contain" />}
      <span>{label}</span>
    </div>
  );
}
