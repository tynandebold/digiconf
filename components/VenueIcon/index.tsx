type Props = {
  altText: string;
  path: string;
  position: number[];
  width?: string;
};

export default function VenueIcon({
  altText,
  path,
  position,
  width = '50',
}: Props) {
  const styles = {
    left: `${position[0]}%`,
    position: 'absolute' as 'absolute',
    top: `${position[1]}%`,
    width: `${width}px`,
  };

  return <img alt={altText} src={path} style={styles} />;
}
