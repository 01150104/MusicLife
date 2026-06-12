import React from 'react';

const style = `
  .bottom-nav {
    display: none;
  }
  @media (max-width: 768px) {
    .bottom-nav {
      display: flex;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      height: 62px;
      background: rgba(255, 252, 248, 0.97);
      border-top: 1px solid rgba(139, 109, 56, 0.15);
      z-index: 9999;
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
    }
    .bn-item {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 3px;
      cursor: pointer;
      border: none;
      background: none;
      padding: 6px 0 10px;
      transition: opacity 0.15s;
      -webkit-tap-highlight-color: transparent;
    }
    .bn-item:active { opacity: 0.6; }
    .bn-icon {
      font-size: 20px;
      line-height: 1;
    }
    .bn-label {
      font-family: 'Noto Serif KR', serif;
      font-size: 10px;
      letter-spacing: 0.02em;
      color: #b8a07a;
      font-weight: 400;
    }
    .bn-item.bn-active .bn-label {
      color: #8b6d38;
      font-weight: 700;
    }
    .bn-item.bn-active .bn-icon {
      filter: none;
    }
  }
`;

const ITEMS = [
  { page: 'home',      icon: '🏠', label: '홈' },
  { page: 'history',   icon: '📖', label: '역사' },
  { page: 'composers', icon: '🎵', label: '작곡가' },
  { page: 'etiquette', icon: '✨', label: '에티켓' },
  { page: 'mypage',    icon: '👤', label: '내 페이지' },
];

export default function BottomNav({ onNavigate, activePage }) {
  const activeRoot = activePage === 'composer-detail' ? 'composers'
    : activePage === 'people-detail' ? 'composers'
    : activePage === 'quiz' ? 'composers'
    : activePage === 'history-quiz' ? 'history'
    : activePage === 'etiquette-quiz' ? 'etiquette'
    : activePage;

  return (
    <>
      <style>{style}</style>
      <nav className="bottom-nav">
        {ITEMS.map(({ page, icon, label }) => (
          <button
            key={page}
            className={`bn-item${activeRoot === page ? ' bn-active' : ''}`}
            onClick={() => onNavigate(page)}
          >
            <span className="bn-icon">{icon}</span>
            <span className="bn-label">{label}</span>
          </button>
        ))}
      </nav>
    </>
  );
}
