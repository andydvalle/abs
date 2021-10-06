const ResponsiveImage = ({ src, width, height }) => {
  return (
    <div
      style={{
        width,
      }}
      className="center"
    >
      {/* <div
        style={{
          paddingBottom: (height / width) * 100 + "%",
        }}
      /> */}
      <img src={src} alt="" className="center" />
    </div>
  );
};

export default ResponsiveImage;
