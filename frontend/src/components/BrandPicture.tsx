// Shows an approved brand asset, switching to its dark-background version when the
// browser is in dark mode. The files are unmodified copies from docs/brand/logo/
// (brand book §4: never recolour, stretch or put the light version on a dark background).

const assets = {
  logo: { file: "skillmirror-logo", width: 315.19, height: 59.7 },
  icon: { file: "skillmirror-icon", width: 64, height: 64 },
} as const;

type BrandPictureProps = {
  asset: keyof typeof assets;
  /** Rendered width in px. Brand book minimums: logo 240 px, icon 16 px. */
  width: number;
  /** Empty when the image is decorative (the name is already in nearby text). */
  alt: string;
  className?: string;
};

export function BrandPicture({ asset, width, alt, className }: BrandPictureProps) {
  const { file, width: w, height: h } = assets[asset];
  const height = Math.round((width * h) / w);
  return (
    <picture className={className}>
      <source srcSet={`/brand/${file}-dark.svg`} media="(prefers-color-scheme: dark)" />
      <img src={`/brand/${file}-light.svg`} width={width} height={height} alt={alt} />
    </picture>
  );
}
