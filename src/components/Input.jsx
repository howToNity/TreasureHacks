import { Fragment } from 'react'

export const Input = ({ type, name, label, placeholder, ...rest }) => (
  <Fragment>
    <label className="text-white font-semibold text-sm" htmlFor={name}>{label}</label>
    <input
      className="p-4 rounded bg-white/30 mb-2 ring-1 ring-white/50 placeholder:text-white focus:outline-none focus:bg-white/40"
      id={name}
      type={type}
      name={name}
      placeholder={placeholder}
      {...rest}
    />
  </Fragment>
)