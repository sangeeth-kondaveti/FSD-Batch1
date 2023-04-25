export function ColorBox({ color }) {
  const styles = {
    height: "30px",
    width: "170px",
    backgroundColor: color,
  };
  return <div style={styles}></div>;
}
