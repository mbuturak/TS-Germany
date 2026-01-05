'use client';

/**
 * Cookie Declaration Component
 * Cookiebot'in cookie bildirimi modalını gösterir
 */
export default function CookieDeclaration() {
  const handleShowCookieSettings = () => {
    // Cookiebot API'si hazır olup olmadığını kontrol et
    if (typeof window !== 'undefined' && window.Cookiebot) {
      // Cookiebot'un tüm API'sinin yüklendiğinden emin ol
      try {
        if (typeof window.Cookiebot.show === 'function') {
          window.Cookiebot.show();
        } else {
          // Eğer API henüz hazır değilse, biraz bekle ve tekrar dene
          setTimeout(() => {
            if (window.Cookiebot && typeof window.Cookiebot.show === 'function') {
              window.Cookiebot.show();
            }
          }, 100);
        }
      } catch (error) {
        // Hata durumunda sessizce devam et
      }
    }
  };

  return (
    <button
      type="button"
      className="cookie-declaration-btn"
      onClick={handleShowCookieSettings}
      style={{
        background: 'transparent',
        color: '#ffffff',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        padding: '8px 16px',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '13px',
        fontWeight: 400,
        transition: 'all 0.3s ease',
        marginTop: '10px',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'transparent';
        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
      }}
    >
      Cookie Settings
    </button>
  );
}
