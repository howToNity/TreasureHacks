export default function StatusBar({ width, done, color, label }) {
  return (
    <>
      <label>{label}</label>
      <div style={{
        width: `${width}px`,
        height: `20px`,
        borderRadius: `50px`,
        backgroundColor: color,
        opacity: 0.25
      }}>
      </div>
      <div style={{
        width: `${(done / 100) * width}px`,
        height: "20px",
        borderRadius: `50px`,
        transform: `translateY(-20px)`,
        backgroundColor: color,
        opacity: 1
      }}></div>
    </>
  )
}
