import styles from './LeftSidebar.module.css'

export default function LeftSidebar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.section}>
        {[
          { icon: '🏠', label: 'Home' },
          { icon: '📈', label: 'Popular' },
          { icon: '📰', label: 'News' },
          { icon: '🔭', label: 'Explore' },
          { icon: '➕', label: 'Start a community' },
        ].map(item => (
          <div key={item.label} className={styles.item}>
            <span className={styles.icon}>{item.icon}</span>
            <span>{item.label}</span>
          </div>
        ))}
      </div>

      <div className={styles.divider} />

      <div className={styles.section}>
        <div className={styles.sectionLabel}>
          GAMES ON REDDIT <button className={styles.chevron}>∧</button>
        </div>
        <div className={styles.gameCard}>
          <div className={styles.gameIcon}>L</div>
          <div className={styles.gameInfo}>
            <div className={styles.gameName}>LETTERSET <span className={styles.newBadge}>NEW</span></div>
            <div className={styles.gameSub}>Make every letter cou...</div>
            <div className={styles.gamePlayers}>169K monthly players</div>
          </div>
        </div>
        {['Slingblade', 'Farm Merge Valley', 'Color Puzzle', 'Discover More'].map(name => (
          <div key={name} className={styles.item}>
            <span className={styles.icon}>🎮</span>
            <span>{name}</span>
          </div>
        ))}
      </div>

      <div className={styles.divider} />

      <div className={styles.section}>
        <div className={styles.sectionLabel}>
          CUSTOM FEEDS <button className={styles.chevron}>∧</button>
        </div>
        <div className={styles.item}>
          <span className={styles.plus}>＋</span>
          <span>Create Custom Feed</span>
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.section}>
        <div className={styles.sectionLabel}>
          RECENT <button className={styles.chevron}>∧</button>
        </div>
        <div className={`${styles.item} ${styles.active}`}>
          <span className={styles.icon} style={{ color: '#ff4500' }}>⬤</span>
          <span>r/AITAH</span>
        </div>
        <div className={styles.item}>
          <span className={styles.icon}>😤</span>
          <span>r/AmIOverreacting</span>
        </div>
      </div>
    </nav>
  )
}
