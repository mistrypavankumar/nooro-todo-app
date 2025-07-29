interface ColorSectionProps {
  selectedColor: string;
  setSelectedColor: (color: string) => void;
}

const ColorSection = ({
  selectedColor,
  setSelectedColor,
}: ColorSectionProps) => {
  const colors = [
    { id: 1, colorName: "Red", hexCode: "#EA4335" },
    { id: 2, colorName: "Orange", hexCode: "#FB8C00" },
    { id: 3, colorName: "Yellow", hexCode: "#FBC02D" },
    { id: 4, colorName: "Green", hexCode: "#34A853" },
    { id: 5, colorName: "Blue", hexCode: "#4285F4" },
    { id: 6, colorName: "Indigo", hexCode: "#5E6EBF" },
    { id: 7, colorName: "Purple", hexCode: "#A259FF" },
    { id: 8, colorName: "Pink", hexCode: "#F4426C" },
    { id: 9, colorName: "Brown", hexCode: "#A2835D" },
  ];

  return (
    <div>
      <h2 className="text-secondary font-semibold mt-5">Color</h2>
      <div className="flex items-center gap-3 mt-2 relative overflow-x-auto scrollbar-hide">
        {colors.map((color) => (
          <div key={color.id}>
            <div
              onClick={() => setSelectedColor(color.hexCode)}
              className={`w-[35px] md:w-[52px] h-[35px] md:h-[52px] rounded-full cursor-pointer ${
                selectedColor === color.hexCode
                  ? "opacity-100 border-2 border-foreground"
                  : "opacity-50"
              } hover:opacity-100 transition-opacity duration-200`}
              style={{
                backgroundColor: color.hexCode,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorSection;
