export const PickerButton = ({ icon, onClick, ...rest }) => (
  <button className="rounded-full w-8 h-8" onClick={onClick} {...rest}>
    {icon}
  </button>
)
