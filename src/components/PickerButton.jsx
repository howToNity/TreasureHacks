export const PickerButton = ({ icon, onClick }) => (
  <button className="rounded-full w-8 h-8" onClick={onClick}>
    {icon}
  </button>
)