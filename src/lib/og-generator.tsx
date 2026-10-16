import { ImageResponse } from 'next/og';
import fs from 'fs';
import path from 'path';

export const OG_SIZE = {
  width: 1200,
  height: 630,
};

export const OG_CONTENT_TYPE = 'image/png';

export interface OgCardOptions {
  pageName: string;
  title: string;
  description: string;
  badge?: string;
  kicker?: string;
  stats?: Array<{ label: string; value: string }>;
}

let cachedLogoBase64: string | null = null;

export function getLogoBase64(): string {
  if (cachedLogoBase64) return cachedLogoBase64;
  try {
    const logoPath = path.join(process.cwd(), 'public', 'logo', 'empowayouth-logo-2.png');
    if (fs.existsSync(logoPath)) {
      const buffer = fs.readFileSync(logoPath);
      cachedLogoBase64 = `data:image/png;base64,${buffer.toString('base64')}`;
      return cachedLogoBase64;
    }
  } catch {
    // fallback
  }
  return '';
}

export function createOgImageResponse(options: OgCardOptions): ImageResponse {
  const logoBase64 = getLogoBase64();
  const kickerText = options.kicker || 'INSPIRED • CONNECTED • TRANSFORMED';
  const badgeText = options.badge || options.pageName;
  const stats = options.stats || [
    { value: '294,000+', label: 'Youth Impacted' },
    { value: '2,070+', label: 'Job Placements' },
    { value: '600+', label: 'Partners' },
    { value: '9', label: 'Provinces' },
  ];

  // Dynamic font sizing based on title length
  const titleFontSize =
    options.title.length > 70
      ? '40px'
      : options.title.length > 50
      ? '46px'
      : '52px';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#070A09',
          backgroundImage:
            'radial-gradient(circle at 92% 16%, rgba(232, 93, 4, 0.40) 0%, transparent 48%), radial-gradient(circle at 8% 84%, rgba(232, 131, 42, 0.24) 0%, transparent 46%), radial-gradient(circle at 50% 50%, rgba(15, 23, 20, 0.65) 0%, transparent 100%)',
          padding: '44px 54px',
          fontFamily: 'sans-serif',
          color: '#F4F0E8',
          border: '1.5px solid rgba(244, 240, 232, 0.14)',
          position: 'relative',
        }}
      >
        {/* Top Header Row with Official Site Logo & Page Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          {/* Official Site Logo Brand Lockup */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '18px',
            }}
          >
            {/* Logo Badge Container */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '16px',
                padding: '6px 10px',
                border: '1px solid rgba(244, 240, 232, 0.12)',
              }}
            >
              {logoBase64 ? (
                <img
                  src={logoBase64}
                  alt="EmpowaYouth Official Logo"
                  width={92}
                  height={100}
                  style={{
                    width: '92px',
                    height: '100px',
                  }}
                />
              ) : (
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '14px',
                    backgroundColor: '#E85D04',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 900,
                    fontSize: '32px',
                    color: '#FFFFFF',
                  }}
                >
                  EY
                </div>
              )}
            </div>

            <div
              style={{
                width: '2px',
                height: '68px',
                backgroundColor: 'rgba(232, 93, 4, 0.65)',
              }}
            />

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <span
                style={{
                  fontSize: '32px',
                  fontWeight: 900,
                  letterSpacing: '-0.02em',
                  textTransform: 'uppercase',
                  color: '#FFFFFF',
                  lineHeight: 1.05,
                }}
              >
                EmpowaYouth
              </span>
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 800,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#E85D04',
                  marginTop: '4px',
                }}
              >
                South Africa&apos;s Youth Economic Movement
              </span>
            </div>
          </div>

          {/* Page Badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 22px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(232, 93, 4, 0.18)',
              border: '1.5px solid rgba(232, 93, 4, 0.55)',
              color: '#FFA459',
              fontSize: '14px',
              fontWeight: 800,
              letterSpacing: '0.09em',
              textTransform: 'uppercase',
            }}
          >
            <span>{badgeText}</span>
          </div>
        </div>

        {/* Center Main Content Area: Page Name, Title, Description */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            maxWidth: '1080px',
            margin: '6px 0',
          }}
        >
          {/* Kicker with accent line */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontSize: '14px',
              fontWeight: 800,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#E85D04',
            }}
          >
            <div
              style={{
                width: '32px',
                height: '3px',
                backgroundColor: '#E85D04',
                borderRadius: '2px',
              }}
            />
            <span>{kickerText}</span>
          </div>

          {/* Prominent Page Title */}
          <h1
            style={{
              fontSize: titleFontSize,
              lineHeight: 1.08,
              fontWeight: 900,
              letterSpacing: '-0.035em',
              textTransform: 'uppercase',
              margin: 0,
              color: '#FFFFFF',
              maxHeight: '136px',
              overflow: 'hidden',
            }}
          >
            {options.title}
          </h1>

          {/* Page Description */}
          <p
            style={{
              fontSize: '20px',
              lineHeight: 1.4,
              color: '#B8C4BF',
              margin: 0,
              maxWidth: '960px',
              maxHeight: '60px',
              overflow: 'hidden',
            }}
          >
            {options.description}
          </p>
        </div>

        {/* Bottom Metrics & Official Domain Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '18px',
            borderTop: '1px solid rgba(244, 240, 232, 0.12)',
            width: '100%',
          }}
        >
          {/* Key Stats Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
            }}
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '24px',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span
                    style={{
                      fontSize: '24px',
                      fontWeight: 900,
                      color: '#F4F0E8',
                      lineHeight: 1.1,
                    }}
                  >
                    {stat.value}
                  </span>
                  <span
                    style={{
                      fontSize: '11px',
                      textTransform: 'uppercase',
                      color: '#E85D04',
                      fontWeight: 800,
                      letterSpacing: '0.06em',
                      marginTop: '2px',
                    }}
                  >
                    {stat.label}
                  </span>
                </div>
                {i < stats.length - 1 && (
                  <div
                    style={{
                      width: '1px',
                      height: '32px',
                      backgroundColor: 'rgba(244, 240, 232, 0.15)',
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Official Domain & Brand Signature */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
            }}
          >
            <span
              style={{
                color: '#FFFFFF',
                fontSize: '18px',
                fontWeight: 900,
                letterSpacing: '0.04em',
              }}
            >
              empowayouth.co.za
            </span>
            <span
              style={{
                color: '#E85D04',
                fontSize: '10px',
                fontWeight: 800,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginTop: '2px',
              }}
            >
              All 9 Provinces • South Africa
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
    }
  );
}
