import BlobCursor from './BlobCursor';

const CustomCursor = () => {
  // Only render on desktop
  if (window.innerWidth <= 768) return null;

  return (
    <BlobCursor
      blobType="circle"
      fillColor="#000000"
      trailCount={2}
      sizes={[12, 30]}
      innerSizes={[0, 30]}
      innerColor="transparent"
      opacities={[1, 0.6]}
      shadowColor="rgba(0,0,0,0)"
      shadowBlur={0}
      shadowOffsetX={0}
      shadowOffsetY={0}
      filterStdDeviation={0}
      useFilter={false}
      fastDuration={0.1}
      slowDuration={0.5}
      zIndex={9999}
    />
  );
};

export default CustomCursor;