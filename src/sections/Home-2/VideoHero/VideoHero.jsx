'use client';
import Link from 'next/link';

const HERO_VIDEO_ID = '8YHT2xGiBz4';
const HERO_EMBED_SRC = `https://www.youtube.com/embed/${HERO_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${HERO_VIDEO_ID}&controls=0&modestbranding=1&playsinline=1&rel=0`;

const VideoHero = () => {
  return (
    <div 
      className="video-hero-wrapper" 
      style={{ 
        width: '100vw', 
        height: '100vh', 
        position: 'relative',
        userSelect: 'none',
        // Butonların tıklanabilmesi için wrapper etkileşim açık
        pointerEvents: 'auto',
        overflow: 'hidden',
        marginLeft: 'calc(-50vw + 50%)',
        marginRight: 'calc(-50vw + 50%)'
      }}
      onContextMenu={(e) => e.preventDefault()}
      onKeyDown={(e) => e.preventDefault()}
    >
      {/* Koyu overlay - videonun üzerinde yarı saydam katman */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.45)',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      />

      {/* İçerik katmanı - başlık ve butonlar */
      }
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          // Sola hizalama
          alignItems: 'flex-start',
          justifyContent: 'center',
          textAlign: 'left',
          padding: '0 24px',
          zIndex: 2
        }}
      >
        <h1
          style={{
            color: '#FFFFFF',
            fontSize: 'clamp(28px, 5vw, 56px)',
            lineHeight: 1.2,
            margin: 0,
            fontWeight: 700
          }}
        >
          {/* Typing effect wrapper */}
          <span className="typing">PRECISE ENGINEERING & SURVEYS</span>
        </h1>

        <div
          style={{
            marginTop: 24,
            display: 'flex',
            gap: 12,
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'flex-start'
          }}
        >
          <Link href="/locations" legacyBehavior>
            <a
              style={{
                backgroundColor: 'transparent',
                color: '#fff',
                padding: '10px 18px',
                borderRadius: 6,
                fontWeight: 600,
                textDecoration: 'none',
                border: '1px solid #E5E7EB'
              }}
            >
              See our offices
            </a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a
              style={{
                backgroundColor: 'transparent',
                color: '#FFFFFF',
                padding: '10px 18px',
                borderRadius: 6,
                fontWeight: 600,
                textDecoration: 'none',
                border: '1px solid rgba(255,255,255,0.7)'
              }}
            >
              Contact us
            </a>
          </Link>
        </div>
      </div>

      <iframe
        title="Hero background video"
        src={HERO_EMBED_SRC}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '100vw',
          height: '56.25vw',
          minHeight: '100vh',
          minWidth: '177.77vh',
          transform: 'translate(-50%, -50%)',
          border: 'none',
          outline: 'none',
          pointerEvents: 'none',
          userSelect: 'none',
          zIndex: 0
        }}
      />
      {/* Scoped styles for typing effect */}
      <style jsx>{`
        /* Typewriter effect and blinking caret */
        .typing {
          display: inline-block;
          overflow: hidden; /* Hide the overflowing characters while typing */
          white-space: nowrap; /* Prevent text wrapping */
          border-right: 2px solid rgba(255,255,255,0.9); /* Caret */
          /* "PRECISE ENGINEERING & SURVEYS" = 31 karakter (boşluklar dahil) */
          width: 0;
          animation: typing 3.5s steps(31, end) 0.2s forwards, blink 0.9s step-end 3.7s infinite;
        }

        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes blink {
          from, to { border-color: transparent; }
          50% { border-color: rgba(255,255,255,0.9); }
        }

        /* Respect smaller screens: slightly thinner caret */
        @media (max-width: 480px) {
          .typing { 
            border-right-width: 1.5px;
            animation: typing 3.5s steps(31, end) 0.2s forwards, blink 0.9s step-end 3.7s infinite;
          }
        }
      `}</style>
    </div>
  );
};

export default VideoHero;
